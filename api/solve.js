export default async function handler(req, res) {
  // CORS Headers 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (_) {}
    }
    const { prompt, apiKey: clientKey } = body || {};
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // 서버 환경 변수 키 우선 사용, 없을 경우 클라이언트 전달 키 백업 사용
    const apiKey = (process.env.GEMINI_API_KEY || clientKey || '').trim().replace(/['"\s]/g, '');
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API Key is not configured on server' });
    }

    // 검증된 모델 우선순위: gemini-3.5-flash-lite, gemini-3.5-flash, gemini-2.5-flash
    const modelNames = ['gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-2.5-flash'];
    const apiVersions = ['v1beta', 'v1'];

    let diagnosticErrors = [];

    for (const model of modelNames) {
      for (const version of apiVersions) {
        const url = `https://generativelanguage.googleapis.com/${version}/models/${model}:generateContent?key=${apiKey}`;

        for (let attempt = 0; attempt < 2; attempt++) {
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            });

            if (!response.ok) {
              const errorText = await response.text();
              let errorMsg = `HTTP ${response.status}`;
              try {
                const errorJson = JSON.parse(errorText);
                if (errorJson?.error?.message) {
                  errorMsg += ` - ${errorJson.error.message}`;
                }
              } catch (_) {
                if (errorText) errorMsg += ` - ${errorText.substring(0, 120)}`;
              }

              // 일시적 과부하(503, 429) 시 1초 대기 후 재시도
              if ((response.status === 503 || response.status === 429) && attempt < 1) {
                await new Promise((r) => setTimeout(r, 1000));
                continue;
              }
              diagnosticErrors.push(`[${model}/${version}]: ${errorMsg}`);
              break;
            }

            const data = await response.json();
            const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (answer) {
              return res.status(200).json({
                success: true,
                answer: answer,
                model: model,
                version: version
              });
            } else {
              diagnosticErrors.push(`[${model}/${version}]: Empty response candidates`);
              break;
            }
          } catch (netErr) {
            diagnosticErrors.push(`[${model}/${version}]: ${netErr.message}`);
            break;
          }
        }
      }
    }

    return res.status(502).json({
      success: false,
      error: 'All Gemini API models failed',
      details: diagnosticErrors
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal Server Error'
    });
  }
}
