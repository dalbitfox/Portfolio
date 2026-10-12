import React, { useState, useRef, useEffect } from 'react';

const LOADER_BOOKMARKLET = "javascript:(function(){var s=document.createElement('script');s.src='https://seobu.vercel.app/baeummadang_helper.user.js?t='+Date.now();document.body.appendChild(s);})();";

export const HelperShowcase: React.FC = () => {
  const [bookmarkletUrl] = useState<string>(LOADER_BOOKMARKLET);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [showGuideModal, setShowGuideModal] = useState<boolean>(false);

  const bookmarkRef1 = useRef<HTMLAnchorElement | null>(null);
  const bookmarkRef2 = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (bookmarkRef1.current) {
      bookmarkRef1.current.setAttribute('href', LOADER_BOOKMARKLET);
    }
    if (bookmarkRef2.current) {
      bookmarkRef2.current.setAttribute('href', LOADER_BOOKMARKLET);
    }
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3200);
  };

  const handleAddToFavorites = () => {
    if (bookmarkletUrl) {
      navigator.clipboard.writeText(bookmarkletUrl);
      triggerToast('📋 도우미 코드가 클립보드에 복사되었습니다!');
    }
    setShowGuideModal(true);
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
          {/* Button 1: 배움마당 추가 (React 19 javascript: 차단 우회 및 브라우저 네이티브 드래그 지원) */}
          <a
            ref={(el) => {
              bookmarkRef1.current = el;
              if (el) el.setAttribute('href', LOADER_BOOKMARKLET);
            }}
            draggable={true}
            onDragStart={(e) => {
              e.dataTransfer.setData('text/uri-list', LOADER_BOOKMARKLET);
              e.dataTransfer.setData('text/plain', LOADER_BOOKMARKLET);
            }}
            title="마우스로 누른 채 상단 브라우저 북마크(즐겨찾기) 바로 끌어다 놓으세요!"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(LOADER_BOOKMARKLET);
              triggerToast('🎓 마우스로 북마크바(Ctrl+Shift+B)로 끌어다 놓으시거나, 복사된 코드를 북마크 주소에 붙여넣으세요!');
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

          {/* Button 2: 즐겨찾기 추가 (React 19 javascript: 차단 우회 및 브라우저 네이티브 드래그 지원) */}
          <a
            ref={(el) => {
              bookmarkRef2.current = el;
              if (el) el.setAttribute('href', LOADER_BOOKMARKLET);
            }}
            draggable={true}
            onDragStart={(e) => {
              e.dataTransfer.setData('text/uri-list', LOADER_BOOKMARKLET);
              e.dataTransfer.setData('text/plain', LOADER_BOOKMARKLET);
            }}
            title="마우스로 누른 채 상단 브라우저 북마크 바로 끌어다 놓으시거나, 클릭하여 즐겨찾기 안내를 확인하세요!"
            onClick={(e) => {
              e.preventDefault();
              handleAddToFavorites();
            }}
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
              border: '2px solid rgba(255, 255, 255, 0.15)',
              fontFamily: 'var(--font-headings)',
              cursor: 'grab',
              userSelect: 'none',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(249, 115, 22, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(249, 115, 22, 0.6)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(249, 115, 22, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>⭐</span>
            <span>즐겨찾기 추가</span>
          </a>
        </div>

        {/* Action Guide Tip */}
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
          위 버튼(보라색 또는 주황색)을 마우스로 누른 채, <strong style={{ color: '#fb7185' }}>브라우저 북마크(즐겨찾기) 바</strong>로 끌어다 놓으세요!<br />
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            * 북마크 바가 안 보인다면 키보드의 <strong>Ctrl + Shift + B</strong>를 누르세요. (버튼 클릭 시 설치 가이드 및 코드 자동 복사)
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

      {/* 4. Guide Modal for Bookmarking */}
      {showGuideModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '1.25rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setShowGuideModal(false)}
        >
          <div
            style={{
              backgroundColor: '#161622',
              border: '1px solid rgba(249, 115, 22, 0.45)',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '560px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(249, 115, 22, 0.15)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(249, 115, 22, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem'
                  }}
                >
                  ⭐
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-headings)' }}>
                    즐겨찾기(북마크) 등록 안내
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    크롬/엣지 보안 정책 안내 및 3초 간편 설치법
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowGuideModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.2rem 0.5rem',
                  lineHeight: 1
                }}
              >
                ✕
              </button>
            </div>

            {/* Browser Policy Notice */}
            <div
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
                fontSize: '0.85rem',
                color: '#fca5a5',
                lineHeight: '1.5',
                marginBottom: '1.25rem'
              }}
            >
              🔒 <strong>브라우저 보안 안내:</strong> 크롬, 엣지, 웨일 등 최신 브라우저는 악성 스크립트의 무단 주입을 방지하기 위해 웹페이지 버튼 클릭만으로 브라우저 즐겨찾기에 코드를 자동 등록하는 기능을 엄격히 차단하고 있습니다.
            </div>

            {/* Methods */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Method 1 */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(249, 115, 22, 0.35)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#f97316', color: '#fff', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    추천 1순위
                  </span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                    마우스로 드래그 앤 드롭 (가장 간편!)
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                  화면 상단의 <strong>[⭐ 즐겨찾기 추가]</strong> 또는 <strong>[🎓 스마트 도우미]</strong> 버튼을 마우스로 누른 채 브라우저 상단 <strong>북마크 바</strong>로 끌어다 놓으시면 즉시 설치됩니다.
                  <br />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>* 북마크 바가 안 보이면 키보드의 <strong>Ctrl + Shift + B</strong>를 누르세요.</span>
                </p>
              </div>

              {/* Method 2 */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#fff', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    수동 등록
                  </span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                    북마크 바 우클릭 후 붙여넣기
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                  이미 스마트 도우미 실행 코드가 <strong>클립보드에 자동 복사</strong>되었습니다!
                  <br />
                  1. 브라우저 북마크 바 빈 공간 마우스 우클릭 ➔ <strong>[페이지 추가]</strong> 선택
                  <br />
                  2. 이름: <code style={{ color: '#fb923c' }}>배움마당 도우미</code> 입력
                  <br />
                  3. URL(주소) 칸에 <strong>Ctrl + V</strong> (붙여넣기) 후 저장 완료
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  if (bookmarkletUrl) {
                    navigator.clipboard.writeText(bookmarkletUrl);
                    triggerToast('📋 도우미 코드가 클립보드에 복사되었습니다!');
                  }
                }}
                style={{
                  padding: '0.65rem 1.2rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                📋 코드 다시 복사
              </button>
              <button
                onClick={() => setShowGuideModal(false)}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)'
                }}
              >
                확인 완료
              </button>
            </div>
          </div>
        </div>
      )}

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
