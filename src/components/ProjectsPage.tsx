import React from 'react';

interface ProjectsPageProps {
  setActiveTab: (tab: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ setActiveTab }) => {
  return (
    <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
      
      {/* magic-portfolio.com/work Title Header */}
      <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
        <span className="tag tag-blue" style={{ marginBottom: '0.75rem', fontSize: '0.75rem' }}>Projects</span>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-headings)', letterSpacing: '-0.04em' }}>
          SeobuTech Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto', fontWeight: 300 }}>
          서부기술(SeobuTech)의 인프라 모니터링, 리포트 생성 및 운영 업무를 자동화하기 위해 구축된 솔루션 및 도구 포트폴리오입니다.
        </p>
      </div>

      {/* 1. Large Hero Mockup Card (Netbox) */}
      <div 
        onClick={() => window.open('https://net-box.vercel.app', '_blank')}
        className="magic-card" 
        style={{ 
          marginBottom: '3rem', 
          cursor: 'pointer', 
          padding: '2.5rem', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'rgba(9, 9, 11, 0.7)',
          overflow: 'hidden'
        }}
      >
        <div className="hero-grid">
          
          {/* Hero Mockup image styled with pure CSS to look high-tech dark admin dashboard */}
          <div 
            style={{ 
              borderRadius: '12px', 
              backgroundColor: '#0c0a09', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            {/* Soft background glow */}
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            
            {/* Header bar inside mockup */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ color: '#60a5fa', fontSize: '0.75rem', fontWeight: 'bold' }}>🌐 netbox-automation-console</span>
              <span style={{ color: '#10b981', fontSize: '0.65rem' }}>● LIVE</span>
            </div>
            
            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', margin: '1rem 0' }}>
              <div style={{ padding: '0.6rem', backgroundColor: '#1c1917', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>IPAM 대역폭</span>
                <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#60a5fa', marginTop: '0.1rem' }}>IPv4 / IPv6 Active</div>
              </div>
              <div style={{ padding: '0.6rem', backgroundColor: '#1c1917', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>보안 스캔 노드</span>
                <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#10b981', marginTop: '0.1rem' }}>24 Switch Ports</div>
              </div>
            </div>
            
            {/* Code lines */}
            <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.4)', backgroundColor: '#141414', padding: '0.6rem', borderRadius: '6px' }}>
              <span style={{ color: '#34d399' }}>$</span> npx port-scanner --host gateway.seobu.net --port 22,80,443<br/>
              <span style={{ color: '#93c5fd' }}>[info]</span> Port 80 is open. Subnet mask: 255.255.255.240 (/28)
            </div>
          </div>

          {/* Hero text details */}
          <div>
            <span className="tag tag-blue" style={{ marginBottom: '1rem', fontSize: '0.65rem' }}>Lead Portfolio Project</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-headings)', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>
              NetBox Network Suite
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: 300 }}>
              서부기술(SeobuTech)의 인프라 스위치 포트 장애, IP 범위 연산, 핑 모니터링 체크를 위해 실물 배포된 자동화 플랫폼입니다. 서브넷팅 연산 외 7가지 고정밀 네트워크 분석 도구가 완벽 연동되어 있습니다.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#3b82f6' }}>
                실물 사이트 즉시 방문하기 (net-box.vercel.app) ↗
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="line-divider" style={{ marginBottom: '3rem' }}></div>

      {/* Grid of AX TEAM Projects */}
      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>
        2026 AX TEAM Projects
      </h3>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '4rem'
        }}
      >
        
        {/* Project 2: AX-자동메일시스템 */}
        <div className="magic-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="tag" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontSize: '0.65rem' }}>Python & SMTP</span>
              <span style={{ fontSize: '1.25rem' }}>✉️</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
              AX-자동메일시스템
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', fontWeight: 300 }}>
              서부기술 대량 장비 상태 수집 서버 로그와 긴급 오류 알림 이메일 발송을 완전 자동화하는 경량 크론 스케줄러 시스템입니다.
            </p>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '1rem' }}>
            🛠️ 내부 전용 서버에서 구동 중
          </span>
        </div>

        {/* Project 3: AX-월간정기리포트 */}
        <div className="magic-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="tag" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontSize: '0.65rem' }}>React & Chart.js</span>
              <span style={{ fontSize: '1.25rem' }}>📊</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
              AX-월간정기리포트
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', fontWeight: 300 }}>
              매월 사내 네트워크 트래픽 로그 및 가동 시간을 가공하여 시각 차트와 PDF 리포트로 자동 생성하고 다운로드해주는 기안 보조 툴입니다.
            </p>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '1rem' }}>
            📊 인프라 통계 탭과 연동 예정
          </span>
        </div>

        {/* Project 4: 배움마당 스마트 도우미 */}
        <div 
          onClick={() => setActiveTab('helper')}
          className="magic-card" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            minHeight: '220px', 
            border: '1px solid rgba(249, 115, 22, 0.25)', 
            cursor: 'pointer',
            backgroundColor: 'rgba(249, 115, 22, 0.01)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="tag tag-orange" style={{ fontSize: '0.65rem' }}>Node.js & Bot</span>
              <span style={{ fontSize: '1.25rem' }}>🤖</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
              배움마당 스마트 도우미
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', fontWeight: 300 }}>
              일정 스캔 알림뿐 아니라 인간 개입 없이 동영상 강의 백그라운드 학습 및 100% 자동 시험 대행을 완수해주는 스마트 헬러 엔진입니다.
            </p>
          </div>
          <span style={{ fontSize: '0.78rem', color: '#f97316', fontWeight: 600, marginTop: '1rem' }}>
            🎮 즉시 플레이 / 상세 보기 →
          </span>
        </div>

      </div>

      <div className="line-divider" style={{ marginBottom: '3rem' }}></div>

      {/* Grid of Other Projects */}
      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>
        Other Active Projects
      </h3>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '4rem'
        }}
      >
        {/* Project 5: 점심 룰렛 (Live App) */}
        <div 
          onClick={() => setActiveTab('roulette')}
          className="magic-card" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            minHeight: '220px', 
            border: '1px solid rgba(249, 115, 22, 0.25)', 
            cursor: 'pointer',
            backgroundColor: 'rgba(249, 115, 22, 0.01)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="tag tag-orange" style={{ fontSize: '0.65rem' }}>Interactive Web Tool</span>
              <span style={{ fontSize: '1.25rem' }}>🎡</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)', color: '#f97316' }}>
              점심 룰렛 (Lunch Roulette)
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', fontWeight: 300 }}>
              음식 카테고리를 룰렛판으로 돌려 오늘 점심 메뉴를 무작위로 빠르고 유쾌하게 추천해주는 웹 도구입니다. (즉시 플레이 가능)
            </p>
          </div>
          <span style={{ fontSize: '0.78rem', color: '#f97316', fontWeight: 600, marginTop: '1rem' }}>
            🎮 즉시 플레이하러 가기 →
          </span>
        </div>

        {/* Project 6: 다트 게임 (Live App) */}
        <div 
          onClick={() => setActiveTab('dart')}
          className="magic-card" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            minHeight: '220px', 
            border: '1px solid rgba(249, 115, 22, 0.25)', 
            cursor: 'pointer',
            backgroundColor: 'rgba(249, 115, 22, 0.01)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="tag tag-orange" style={{ fontSize: '0.65rem' }}>Interactive Web Tool</span>
              <span style={{ fontSize: '1.25rem' }}>🎯</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)', color: '#f97316' }}>
              다트 게임 (Dart Game)
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', fontWeight: 300 }}>
              회전하는 과녁판에 다트를 날려 점심값 지불 당첨자를 공정하게 선정하거나 식사 메뉴를 결정하는 미니 게임입니다. (즉시 플레이 가능)
            </p>
          </div>
          <span style={{ fontSize: '0.78rem', color: '#f97316', fontWeight: 600, marginTop: '1rem' }}>
            🎮 즉시 플레이하러 가기 →
          </span>
        </div>

        {/* Project 7: 사다리 타기 (Live App) */}
        <div 
          onClick={() => setActiveTab('ladder')}
          className="magic-card" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            minHeight: '220px', 
            border: '1px solid rgba(249, 115, 22, 0.25)', 
            cursor: 'pointer',
            backgroundColor: 'rgba(249, 115, 22, 0.01)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="tag tag-orange" style={{ fontSize: '0.65rem' }}>Interactive Web Tool</span>
              <span style={{ fontSize: '1.25rem' }}>🪜</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)', color: '#f97316' }}>
              사다리 타기 (Ladder Game)
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', fontWeight: 300 }}>
              참여자 명단과 각각의 매칭 메뉴를 기입한 후 선을 타고 내려가 당첨 결과를 추첨하는 클래식 도구입니다. (즉시 플레이 가능)
            </p>
          </div>
          <span style={{ fontSize: '0.78rem', color: '#f97316', fontWeight: 600, marginTop: '1rem' }}>
            🎮 즉시 플레이하러 가기 →
          </span>
        </div>

      </div>

      <div className="line-divider" style={{ marginBottom: '3rem' }}></div>

      {/* 4 Empty Placeholder Cards for Future Projects (비어있는 예비 카드 4개 구성) */}
      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>
        Upcoming Projects
      </h3>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div 
            key={`placeholder-${i}`}
            className="magic-card" 
            style={{ 
              border: '1px dashed rgba(255, 255, 255, 0.12)', 
              backgroundColor: 'rgba(255, 255, 255, 0.005)', 
              color: 'var(--text-muted)', 
              textAlign: 'center', 
              justifyContent: 'center', 
              alignItems: 'center',
              minHeight: '160px', 
              cursor: 'not-allowed',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: 'none'
            }}
          >
            <span style={{ fontSize: '1.5rem', opacity: 0.2 }}>🔒</span>
            <div style={{ fontFamily: 'var(--font-headings)', fontWeight: 600, fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.25)' }}>
              Project Spaceholder #{i + 1}
            </div>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.15)', fontWeight: 300 }}>
              준비 중 (Coming Soon)
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};
