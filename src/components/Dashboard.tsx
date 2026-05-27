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
        <h1 
          style={{ 
            fontSize: '5rem', 
            fontWeight: 800, 
            fontFamily: 'var(--font-headings)', 
            letterSpacing: '-0.05em',
            lineHeight: '1',
            color: '#ffffff',
            textShadow: '0 0 45px rgba(255,255,255,0.08)',
            marginBottom: '2rem'
          }}
        >
          SeobuTech
        </h1>

        {/* Minimal Subtitle Description */}
        <p 
          style={{ 
            fontSize: '1.05rem', 
            color: 'rgba(255, 255, 255, 0.55)', 
            fontWeight: 300, 
            lineHeight: '1.8', 
            marginBottom: '2.5rem',
            fontFamily: 'var(--font-body)'
          }}
        >
          서부기술(SeobuTech)의 인프라 효율과 협업 속도를 극어올리기 위한 자동화 포털입니다. 네트워크 유틸리티 통합 스위트인 **netbox**와 **점심 메뉴 사다리타기** 등의 생산성 도구를 설계합니다.
        </p>

        {/* Secondary Navigation Indicators */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="btn" 
            onClick={() => setActiveTab('about')}
            style={{ padding: '0.85rem 2.25rem', fontSize: '0.88rem', backgroundColor: '#ffffff', color: '#000000' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.85)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
          >
            소개 (ABOUT) →
          </button>
          <button 
            className="btn" 
            onClick={() => setActiveTab('projects')}
            style={{ padding: '0.85rem 2.25rem', fontSize: '0.88rem', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
          >
            프로젝트 (PROJECTS) 📂
          </button>
        </div>
      </div>
    </div>
  );
};
