import React from 'react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  return (
    <div 
      style={{ 
        minHeight: '70vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem 1rem',
        animation: 'fadeIn 0.8s ease-out',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Floating Mini Menu (chronark.com Style in White text) */}
      <nav 
        style={{ 
          display: 'flex', 
          gap: '2.5rem', 
          marginBottom: '3.5rem',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-headings)',
          letterSpacing: '0.08em',
          fontWeight: 500
        }}
      >
        <button 
          onClick={() => setActiveTab('about')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255, 255, 255, 0.45)', transition: 'var(--transition-smooth)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)'}
        >
          ABOUT
        </button>
        <button 
          onClick={() => setActiveTab('projects')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255, 255, 255, 0.45)', transition: 'var(--transition-smooth)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)'}
        >
          PROJECTS
        </button>
      </nav>

      {/* Hero Content */}
      <div style={{ maxWidth: '650px' }}>
        {/* Large Central Title in Chronark Font Style */}
        <h1 className="hero-title">
          SeobuTech
        </h1>

        {/* Minimal Subtitle Description */}
        <p 
          style={{ 
            fontSize: '1.05rem', 
            color: 'rgba(255, 255, 255, 0.55)', 
            fontWeight: 300, 
            lineHeight: '1.8', 
            marginBottom: '0',
            fontFamily: 'var(--font-body)'
          }}
        >
          업무 협업과 효율성 향상을 위한 서부기술지원팀 자동화 포털입니다.
          <br />
          네트워크 전문가 통합 유틸리티인 NetBox, AX-자동메일시스템, AX-월간정기리포트 등
          <br />
          생산성을 높이는 다양한 자동화 도구를 설계하고 구축합니다.
        </p>
      </div>
    </div>
  );
};
