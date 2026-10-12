import React, { useState, useEffect } from 'react';

export const HelperShowcase: React.FC = () => {
  const [bookmarkletUrl, setBookmarkletUrl] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  // v4.5.0 HTML 파일에서 북마크클릿 URL 동적 추출
  useEffect(() => {
    fetch('/배움마당%2BSmart%2BHelper%2B(v4.5.0).html')
      .then((res) => res.text())
      .then((html) => {
        const startTag = '<script type="text/plain" id="bookmarklet-source">';
        const endTag = '</script>';
        const startIdx = html.indexOf(startTag);
        if (startIdx !== -1) {
          const endIdx = html.indexOf(endTag, startIdx);
          if (endIdx !== -1) {
            const raw = html.substring(startIdx + startTag.length, endIdx);
            const clean = raw
              .split('\n')
              .map((line) => {
                const commentIdx = line.indexOf('//');
                if (commentIdx !== -1) {
                  const prefix = line.substring(0, commentIdx);
                  if (!prefix.match(/https?:$/i)) {
                    return prefix;
                  }
                }
                return line;
              })
              .join('\n');
            const normalized = clean.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
            const base64Code = btoa(unescape(encodeURIComponent(normalized)));
            const url = "javascript:eval(decodeURIComponent(escape(atob('" + base64Code + "'))))";
            setBookmarkletUrl(url);
          }
        }
      })
      .catch((err) => console.error('Failed to load bookmarklet source:', err));
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3200);
  };

  const handleAddToFavorites = () => {
    // 1. Legacy IE/Edge
    try {
      if ((window as any).external && 'AddFavorite' in (window as any).external) {
        (window as any).external.AddFavorite(window.location.href, document.title);
        triggerToast('⭐ 즐겨찾기에 추가되었습니다!');
        return;
      }
    } catch {
      // modern browser continues
    }

    // 2. Modern Browsers (Chrome, Edge, Whale)
    if (bookmarkletUrl) {
      navigator.clipboard.writeText(bookmarkletUrl);
      triggerToast('⭐ [Ctrl + D]를 누르면 즐겨찾기에 즉시 추가됩니다! (북마크 코드도 함께 복사되었습니다)');
    } else {
      triggerToast('⭐ [Ctrl + D]를 누르면 현재 페이지가 즐겨찾기에 즉시 추가됩니다!');
    }
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', maxWidth: '1050px', margin: '0 auto' }}>
      {/* 1. Header Section */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
          <span className="tag tag-orange" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
            AX Automation Suite
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              backgroundColor: 'rgba(236, 72, 153, 0.15)',
              color: '#f472b6',
              padding: '0.2rem 0.65rem',
              borderRadius: '99px',
              fontWeight: 700,
              border: '1px solid rgba(236, 72, 153, 0.3)'
            }}
          >
            v4.5.0 최신 업데이트
          </span>
        </div>

        <h2
          style={{
            fontSize: '2.3rem',
            fontFamily: 'var(--font-headings)',
            fontWeight: 800,
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            letterSpacing: '-0.03em'
          }}
        >
          <img
            src="/helper-cap.png"
            alt="Cap Icon"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              boxShadow: '0 4px 16px rgba(249, 115, 22, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          />
          배움마당 스마트 도우미 (Smart Helper)
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.4rem', fontWeight: 300, lineHeight: '1.6' }}>
          사내 교육 플랫폼 수강 일정을 감시하고, 백그라운드 무음 멀티 학습 및 Gemini AI 기반 100% 자동 시험 응시를 완전 무간섭으로 대행하는 생산성 혁신 솔루션
        </p>
      </div>

      {/* 2. Top Action Center (배움마당 추가하는 버튼 & 즐겨찾기 버튼 맨 위 배치) */}
      <div
        className="magic-card"
        style={{
          marginBottom: '2.5rem',
          padding: '1.75rem 2rem',
          backgroundColor: 'rgba(20, 20, 26, 0.65)',
          border: '1px solid rgba(249, 115, 22, 0.35)',
          borderRadius: '18px',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(249, 115, 22, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#f97316', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              ⚡ QUICK ACTION CENTER
            </span>
            <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-headings)', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
              배움마당 도우미 원클릭 추가 및 설치
            </h3>
          </div>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            확장프로그램 설치 없이 즐겨찾기 클릭 한 번으로 실행 가능
          </span>
        </div>

        {/* Buttons Row */}
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Button 1: 배움마당 추가 (두 번째 스샷의 배움마당 SMART HELPER 버튼과 동일한 드래그 앤 드롭 버튼) */}
          <a
            href={bookmarkletUrl || '#'}
            draggable={true}
            title="마우스로 누른 채 상단 브라우저 북마크(즐겨찾기) 바로 끌어다 놓으세요!"
            onClick={(e) => {
              if (bookmarkletUrl) {
                navigator.clipboard.writeText(bookmarkletUrl);
                triggerToast('🎓 마우스로 북마크바(Ctrl+Shift+B)로 끌어다 놓으시거나, 복사된 코드를 북마크 주소에 붙여넣으세요!');
              } else {
                e.preventDefault();
                window.open('/배움마당%2BSmart%2BHelper%2B(v4.5.0).html', '_blank');
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              fontSize: '18px',
              fontWeight: 800,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(236, 72, 153, 0.45)',
              cursor: 'grab',
              userSelect: 'none',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(236, 72, 153, 0.65)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(236, 72, 153, 0.45)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>🎓</span>
            <span>배움마당 Smart Helper (v4.5.0)</span>
          </a>

          {/* Button 2: 즐겨찾기 추가 (누르면 즐겨찾기에 바로 추가) */}
          <button
            onClick={handleAddToFavorites}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              fontSize: '18px',
              fontWeight: 800,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              borderRadius: '50px',
              border: 'none',
              fontFamily: 'var(--font-headings)',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(249, 115, 22, 0.4)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(249, 115, 22, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(249, 115, 22, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>⭐</span>
            <span>즐겨찾기 추가</span>
          </button>
        </div>

        {/* Action Guide Tip (두번째 스샷 안내 문구 일치) */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(236, 72, 153, 0.04)',
            border: '1px dashed rgba(236, 72, 153, 0.25)',
            borderRadius: '14px',
            fontSize: '0.92rem',
            color: '#e2e8f0',
            lineHeight: '1.6'
          }}
        >
          위 보라색 버튼을 마우스로 누른 채, <strong style={{ color: '#fb7185' }}>브라우저 북마크(즐겨찾기) 바</strong>로 끌어다 놓으세요!<br />
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            * 북마크 바가 안 보인다면 키보드의 <strong>Ctrl + Shift + B</strong>를 누르세요.
          </span>
        </div>
      </div>

      {/* 3. Core Automation Features (One-Page Briefing) */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
          ✨ 핵심 자동화 기능 (Zero-Human Interference)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {/* Feature 1 */}
          <div
            className="magic-card"
            style={{
              padding: '1.75rem',
              backgroundColor: 'rgba(10, 10, 10, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.07)'
            }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🔇</div>
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.15rem', color: '#f97316', marginBottom: '0.5rem', fontWeight: 700 }}>
              초고속 백그라운드 학습
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', fontWeight: 300 }}>
              브라우저 탭 비활성화 시 자동 정지되는 제약(Page Visibility API)을 극복하고, Web Worker 무간섭 타이머로 다른 업무 중에도 완전한 무음 모드로 동영상을 자율 학습하여 진도율 100%를 완수합니다.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="magic-card"
            style={{
              padding: '1.75rem',
              backgroundColor: 'rgba(10, 10, 10, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.07)'
            }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>💯</div>
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.15rem', color: '#f472b6', marginBottom: '0.5rem', fontWeight: 700 }}>
              Gemini AI 시험 100% 자동 대행
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', fontWeight: 300 }}>
              수강 완료 후 필수적으로 요구되는 교육별 퀴즈 및 평가 시험 문항들을 Gemini AI와 지능형 문제풀이 엔진이 실시간 연산하여, 어떠한 수동 조작 없이도 고득점으로 안정적인 수료 기준을 달성합니다.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="magic-card"
            style={{
              padding: '1.75rem',
              backgroundColor: 'rgba(10, 10, 10, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.07)'
            }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🛡️</div>
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.15rem', color: '#60a5fa', marginBottom: '0.5rem', fontWeight: 700 }}>
              자가복구 & 실시간 알림
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', fontWeight: 300 }}>
              네트워크 단절이나 가상 브라우저 이상 시 캐시 세션을 복원하는 이중 자가복구 구조(Self-Healing Loop)를 내장했습니다. 신규 교육 일정 감지 및 수료 완료 시 웹훅 알림을 즉시 발송합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Simple 3-Step Flow Diagram */}
      <div
        className="magic-card"
        style={{
          marginBottom: '3rem',
          padding: '2rem',
          backgroundColor: 'rgba(14, 14, 18, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
          ⚙️ 간편 3단계 사용 흐름
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f97316', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 0.75rem auto' }}>
              1
            </div>
            <h5 style={{ fontFamily: 'var(--font-headings)', fontSize: '1rem', color: '#e2e8f0', marginBottom: '0.35rem' }}>
              배움마당 사이트 접속
            </h5>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontWeight: 300 }}>
              LGU+ 사내 배움마당 로그인 후 수강 대상 과목 상세 화면(차시 목록)으로 이동
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(236, 72, 153, 0.04)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 0.75rem auto' }}>
              2
            </div>
            <h5 style={{ fontFamily: 'var(--font-headings)', fontSize: '1rem', color: '#f472b6', marginBottom: '0.35rem' }}>
              즐겨찾기 클릭 (실행)
            </h5>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontWeight: 300 }}>
              상단 북마크바의 <strong>[⭐ 배움마당 도우미]</strong> 클릭 (Tampermonkey는 자동 구동)
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(59, 130, 246, 0.04)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 0.75rem auto' }}>
              3
            </div>
            <h5 style={{ fontFamily: 'var(--font-headings)', fontSize: '1rem', color: '#60a5fa', marginBottom: '0.35rem' }}>
              자동 수강 및 시험 완료
            </h5>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontWeight: 300 }}>
              화면에 스마트 위젯이 뜨며 미이수 강의 동시 수강 및 시험까지 완전 무간섭 자동 패스!
            </p>
          </div>
        </div>
      </div>

      {/* 5. Live Interface Preview & System Spec */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {/* Left: Interface Preview */}
        <div
          className="magic-card"
          style={{
            padding: '1.75rem',
            backgroundColor: 'rgba(10, 10, 10, 0.55)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 700 }}>
            📸 실제 구동 화면 (멀티 수강 위젯)
          </h4>
          <div
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
              marginBottom: '1rem'
            }}
          >
            <img src="/helper-widget.png" alt="Baeummadang Smart Helper Widget" style={{ width: '100%', display: 'block' }} />
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontWeight: 300 }}>
            가상 iFrame을 생성하여 백그라운드 무음 모드로 동시 수강을 보조하는 위젯입니다. 진행률(%) 그래디언트 바와 완료 체크 마크를 통해 여러 강의의 실시간 상태를 한눈에 통제합니다.
          </p>
        </div>

        {/* Right: System Spec & Downloads */}
        <div
          className="magic-card"
          style={{
            padding: '1.75rem',
            backgroundColor: 'rgba(10, 10, 10, 0.55)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.15rem', color: '#ffffff', marginBottom: '1.25rem', fontWeight: 700 }}>
              🛠️ System Specifications
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>ENGINE CORE</span>
                <p style={{ fontWeight: 600, fontSize: '0.92rem', color: '#e2e8f0', marginTop: '0.1rem' }}>JavaScript & Web Worker (Unthrottled)</p>
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>AI EXAM ENGINE</span>
                <p style={{ fontWeight: 600, fontSize: '0.92rem', color: '#f472b6', marginTop: '0.1rem' }}>Gemini AI Automated Problem Solving</p>
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>LATEST UPDATE</span>
                <p style={{ fontWeight: 600, fontSize: '0.92rem', color: '#f97316', marginTop: '0.1rem' }}>v4.5.0 Stable Release</p>
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>COMPATIBILITY</span>
                <p style={{ fontWeight: 600, fontSize: '0.92rem', color: '#94a3b8', marginTop: '0.1rem' }}>Chrome, Edge, Whale (PC Browser)</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => window.open('/배움마당%2BSmart%2BHelper%2B(v4.5.0).html', '_blank')}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontFamily: 'var(--font-headings)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <span>📄 전체 설치 포털 단독 창으로 열기</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <div
        style={{
          position: 'fixed',
          bottom: '36px',
          left: '50%',
          transform: showToast ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(90px)',
          opacity: showToast ? 1 : 0,
          backgroundColor: '#10b981',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '50px',
          fontSize: '0.9rem',
          fontWeight: 600,
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.45)',
          transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 1000,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
