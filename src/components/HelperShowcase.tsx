import React, { useState } from 'react';

export const HelperShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'launcher'>('overview');
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  const handleTabChange = (tab: 'overview' | 'architecture' | 'launcher') => {
    setActiveTab(tab);
    if (tab === 'launcher') {
      setIframeLoading(true);
    }
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Title */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="tag tag-orange" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>AX Automation Suite</span>
        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-headings)', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/helper-cap.png" alt="Cap Icon" style={{ width: '42px', height: '42px', borderRadius: '50%', boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)' }} />
          배움마당 스마트 도우미 (Smart Helper)
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.25rem', fontWeight: 300 }}>
          사내 교육 플랫폼 수강 일정을 감시하고, 백그라운드 학습 및 자동 시험 응시를 완전 무간섭으로 대행하는 생산성 혁신 솔루션
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2.5rem' }}>
        <button
          onClick={() => handleTabChange('overview')}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontFamily: 'var(--font-headings)',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'overview' ? '#f97316' : 'var(--text-secondary)',
            borderBottom: activeTab === 'overview' ? '3px solid #f97316' : '3px solid transparent',
            transition: 'all 0.3s ease'
          }}
        >
          🔍 프로젝트 개요
        </button>
        <button
          onClick={() => handleTabChange('architecture')}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontFamily: 'var(--font-headings)',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'architecture' ? '#f97316' : 'var(--text-secondary)',
            borderBottom: activeTab === 'architecture' ? '3px solid #f97316' : '3px solid transparent',
            transition: 'all 0.3s ease'
          }}
        >
          ⚙️ 무간섭 자동화 흐름
        </button>
        <button
          onClick={() => handleTabChange('launcher')}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontFamily: 'var(--font-headings)',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'launcher' ? '#f97316' : 'var(--text-secondary)',
            borderBottom: activeTab === 'launcher' ? '3px solid #f97316' : '3px solid transparent',
            transition: 'all 0.3s ease'
          }}
        >
          📥 헬퍼 파일 및 사용법
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="editorial-grid">
          {/* Main Info */}
          <div className="card span-8">
            <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.4rem', marginBottom: '1.25rem', color: '#ffffff' }}>
              💡 프로젝트 배경 및 목적
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7', fontWeight: 300 }}>
              바쁜 실무 환경 속에서 필수로 이수해야 하는 사이버 동영상 교육 일정들을 바쁜 업무 도중 틈틈이 수동으로 클릭하고 수강 기한을 챙겨야 하는 번거로움을 해결하기 위해 탄생했습니다.<br />
              사용자가 신경 쓰지 않는 동안에도 프로그램이 백그라운드 환경에서 학습 진도를 나가고, 시험 응시까지 완수함으로써 실질적인 실무 집중 시간을 보장합니다.
            </p>
            <div className="divider" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '1.5rem 0' }}></div>
            
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.15rem', marginBottom: '0.85rem', color: '#f97316' }}>
              ✨ 핵심 자동화 기능 (Zero-Human Interference)
            </h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontWeight: 300, lineHeight: '1.6' }}>
              <li>
                <strong>동영상 강의 백그라운드 학습:</strong> 
                브라우저 탭 비활성화 시 자동 정지되는 제약(Page Visibility API)을 극복하고, 완전한 백그라운드 무음 모드로 동영상을 자율 학습하여 진도율을 수료 기준까지 완수합니다.
              </li>
              <li>
                <strong>시험 응시 100% 자동 대행:</strong> 
                수강 완료 후 필수적으로 수행되는 교육별 퀴즈 및 평가 시험 문항들을 100% 자동 연산하여 무간섭으로 고득점 응시를 완료하고 수료 기준을 충족합니다.
              </li>
              <li>
                <strong>실시간 스케줄링 및 챗봇 통보:</strong> 
                사내 메신저 및 Webhook 연동을 통해, 신규 교육 일정이 감지되거나 자동 수료가 끝나는 시점에 챗봇 알람을 실시간으로 발송합니다.
              </li>
            </ul>
          </div>

          {/* Quick Specs */}
          <div className="card span-4" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.25rem', marginBottom: '1.25rem', color: '#ffffff' }}>
              🛠️ System Spec
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>ENGINE CORE</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: '#e2e8f0', marginTop: '0.1rem' }}>Node.js & Puppeteer Engine</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>AUTOMATION</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: '#e2e8f0', marginTop: '0.1rem' }}>Headless Chromium Driver</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>INTEGRATION</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: '#e2e8f0', marginTop: '0.1rem' }}>HTTP REST Webhook Bot</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>LATEST STABLE</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: '#f97316', marginTop: '0.1rem' }}>v4.4.1 Stable Release</p>
              </div>
            </div>
          </div>

          {/* Live Screenshots Showcasing Actual Interface */}
          <div className="card span-12" style={{ marginTop: '2rem', backgroundColor: 'rgba(9, 9, 11, 0.3)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.4rem', marginBottom: '1.5rem', color: '#ffffff' }}>
              📸 실제 구동 화면 및 기능 상세
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', alignItems: 'start' }}>
              {/* Screenshot 1: Background Multi-player widget */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)' }}>
                  <img src="/helper-widget.png" alt="Baeummadang Smart Helper Widget Interface" style={{ width: '100%', display: 'block' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.05rem', margin: '0.5rem 0 0.25rem 0', color: '#f97316' }}>
                  🚀 초고속 백그라운드 멀티 수강 위젯
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontWeight: 300 }}>
                  가상 iFrame 창을 생성하여 백그라운드 무음 모드로 동시 수강을 보조하는 위젯입니다. 진행률(%) 그래디언트 바와 완료 체크 마크를 통해 여러 강의의 실시간 상태를 한눈에 통제할 수 있습니다.
                </p>
              </div>

              {/* Screenshot 2: Gemini AI Exam Solving Engine */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)' }}>
                  <img src="/helper-exam.png" alt="Gemini AI Exam Solving Engine Interface" style={{ width: '100%', display: 'block' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.05rem', margin: '0.5rem 0 0.25rem 0', color: '#60a5fa' }}>
                  🤖 Gemini AI 지능형 평가 시험 풀이 엔진
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontWeight: 300 }}>
                  시험 문항과 다지선다식 보기를 실시간으로 정교하게 자동 파싱하고, 무간섭 상태에서 최신 거대 언어 모델(Gemini AI)의 상황 추론을 연동하여 백그라운드 고득점 시험 통과 루프를 가동합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Architecture Tab */}
      {activeTab === 'architecture' && (
        <div className="magic-card span-12" style={{ border: '1px solid var(--border-color)', backgroundColor: 'rgba(9, 9, 11, 0.4)' }}>
          <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center', color: '#ffffff' }}>
            ⚙️ 배움마당 스마트 헬퍼 자동화 알고리즘
          </h3>
          
          {/* Custom Pure CSS Diagram */}
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem 0' }}>
            {/* Box 1 */}
            <div style={{ width: '180px', padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>📡</span>
              <h4 style={{ fontSize: '0.95rem', marginTop: '0.5rem', fontFamily: 'var(--font-headings)', color: '#e2e8f0' }}>일정 실시간 감지</h4>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>배움마당 플랫폼 미수강 과정 주기적 자동 스캔</p>
            </div>

            <div style={{ fontSize: '1.5rem', color: '#f97316' }}>➔</div>

            {/* Box 2 */}
            <div style={{ width: '200px', padding: '1.25rem', backgroundColor: 'rgba(249, 115, 22, 0.08)', border: '1px solid rgba(249, 115, 22, 0.25)', borderRadius: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>🔇</span>
              <h4 style={{ fontSize: '0.95rem', marginTop: '0.5rem', fontFamily: 'var(--font-headings)', color: '#f97316' }}>백그라운드 학습</h4>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Headless Chromium 브라우저를 통한 무음 자동 진도</p>
            </div>

            <div style={{ fontSize: '1.5rem', color: '#f97316' }}>➔</div>

            {/* Box 3 */}
            <div style={{ width: '200px', padding: '1.25rem', backgroundColor: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>💯</span>
              <h4 style={{ fontSize: '0.95rem', marginTop: '0.5rem', fontFamily: 'var(--font-headings)', color: '#60a5fa' }}>시험 100% 자동 대행</h4>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>평가 문항 파싱 및 지능형 문제풀이 엔진 구동</p>
            </div>

            <div style={{ fontSize: '1.5rem', color: '#f97316' }}>➔</div>

            {/* Box 4 */}
            <div style={{ width: '180px', padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>💬</span>
              <h4 style={{ fontSize: '0.95rem', marginTop: '0.5rem', fontFamily: 'var(--font-headings)', color: '#e2e8f0' }}>알림 통보</h4>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>수료 결과 및 학습 완료 통계 챗봇 Webhook 알림</p>
            </div>
          </div>

          <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', marginTop: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.05rem', marginBottom: '0.5rem', color: '#ffffff' }}>
              ⚙️ 비정상 정지 우회 및 상태 모니터링 시스템
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', fontWeight: 300 }}>
              네트워크 순간 단절, 장시간 미반응 등의 가상 브라우저 이상 상태 발생 시, 프로그램 스스로 캐시 상태를 파악하여 세션을 복원하고 미이수 지점부터 재시작하는 **이중 자가복구 구조(Self-Healing Loop)**를 구축했습니다.
              또한 시험 문제 파서 엔진은 각 문항의 퀴즈 해설 정답 및 기출 패턴 데이터베이싱 매칭을 수행하여 오답 없이 안정적인 점수대로 수료를 완수합니다.
            </p>
          </div>
        </div>
      )}

      {/* Launcher Tab (Renders the HTML Helper file inside a 950px full size iframe) */}
      {activeTab === 'launcher' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Action Bar */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              gap: '1.5rem',
              backgroundColor: 'rgba(9, 9, 11, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '1rem 1.5rem',
              borderRadius: '10px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '0.82rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                📄 배움마당 Smart Helper (v4.4.1).html
              </span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0.2rem 0 0 0', fontWeight: 300, lineHeight: '1.5' }}>
                아래 화면에서 스마트 헬퍼 프로그램 완성본 콘솔이 실시간으로 로딩되었습니다. 직접 사번/비밀번호 설정을 기입하여 무간섭 자동 수료를 동작시킬 수 있으며, 단독 실행을 원하는 경우 우측 버튼을 누르십시오.
              </p>
            </div>
            <div>
              <button
                onClick={() => window.open('/배움마당+Smart+Helper+(v4.4.1).html', '_blank')}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  color: '#f97316',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                  fontFamily: 'var(--font-headings)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(249, 115, 22, 0.08)';
                  e.currentTarget.style.borderColor = '#f97316';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.3)';
                }}
              >
                새 창에서 열기 ↗
              </button>
            </div>
          </div>

          {/* Iframe Frame Container */}
          <div 
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: '1550px',
              backgroundColor: '#141414',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden'
            }}
          >
            {/* Loading Spinner */}
            {iframeLoading && (
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0, 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  backgroundColor: 'rgba(20, 20, 20, 0.95)',
                  zIndex: 5,
                  gap: '1rem'
                }}
              >
                <div 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    border: '3px solid rgba(249, 115, 22, 0.1)', 
                    borderTopColor: '#f97316', 
                    animation: 'spin 1s linear infinite'
                  }}
                />
                <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-headings)' }}>
                  헬퍼 프로그램을 화면에 로딩하고 있습니다...
                </span>
              </div>
            )}

            {/* Embedded Iframe */}
            <iframe
              src="/배움마당+Smart+Helper+(v4.4.1).html"
              title="배움마당 스마트 헬퍼"
              onLoad={() => setIframeLoading(false)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: 'transparent',
                overflow: 'hidden'
              }}
              scrolling="no"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Local Spin CSS */}
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      )}
    </div>
  );
};
