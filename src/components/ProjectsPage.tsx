import React from 'react';

interface ProjectsPageProps {
  setActiveTab: (tab: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ setActiveTab }) => {
  return (
    <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
      {/* Header Info */}
      <div style={{ marginBottom: '3.5rem' }}>
        <span className="tag tag-blue" style={{ marginBottom: '0.75rem' }}>Portfolio Index</span>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-headings)', letterSpacing: '-0.04em' }}>
          Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px', fontWeight: 300 }}>
          팀의 효율을 끌어올리는 자동화 툴과 재미 요소를 결합한 웹 애플리케이션들입니다. 몇 가지는 상용 수준의 대시보드이며, 일부는 즐거운 내기를 위한 장난감입니다.
        </p>
      </div>

      <div className="line-divider" style={{ margin: '0 0 3rem 0' }}></div>

      {/* chronark.com Signature Asymmetric Featured Grid */}
      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
        Featured Projects
      </h3>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '1.5rem', 
          marginBottom: '4rem' 
        }}
      >
        {/* Left Large Hero Card (Netbox) */}
        <div 
          onClick={() => setActiveTab('netbox')}
          className="chronark-card" 
          style={{ 
            gridColumn: 'span 7', 
            minHeight: '380px', 
            justifyContent: 'space-between', 
            cursor: 'pointer' 
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '1.5rem' }}>
              <span>2026 • Django & React</span>
              <span className="tag tag-blue" style={{ fontSize: '0.65rem' }}>Featured</span>
            </div>
            <h4 style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-headings)', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Netbox Network Controller
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: 300 }}>
              네트워크 IP 할당 동기화 및 물리 랙 캐비닛의 3차원 상태를 한눈에 볼 수 있도록 자동화한 플랫폼입니다. Django REST API 및 React UI 스위치 24포트의 동작 모듈이 정밀하게 설계되었습니다.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
              프로젝트 쇼케이스 보기 →
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              👁 1.2k views
            </span>
          </div>
        </div>

        {/* Right Columns (2 smaller cards) */}
        <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Top Right Card (Ladder Game) */}
          <div 
            onClick={() => setActiveTab('ladder')}
            className="chronark-card" 
            style={{ 
              flex: 1, 
              justifyContent: 'space-between', 
              cursor: 'pointer',
              padding: '1.5rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.75rem' }}>
                <span>2026 • SVG Animation</span>
                <span className="tag" style={{ backgroundColor: 'rgba(249, 115, 22, 0.08)', color: 'var(--accent-warm)', fontSize: '0.65rem' }}>Playable</span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-headings)', marginBottom: '0.5rem' }}>
                점심 사다리타기 게임
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontWeight: 300, lineHeight: '1.5' }}>
                팀원들과 점심 선택 내기를 할 수 있는 실시간 룰렛형 사다리 게임입니다. 동적 SVG 드로잉 및 부드러운 경로 애니메이션 탑재.
              </p>
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '1rem', display: 'block' }}>
              사다리타기 플레이 →
            </span>
          </div>

          {/* Bottom Right Card (Resource Hub) */}
          <div 
            onClick={() => setActiveTab('resources')}
            className="chronark-card" 
            style={{ 
              flex: 1, 
              justifyContent: 'space-between', 
              cursor: 'pointer',
              padding: '1.5rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.75rem' }}>
                <span>2026 • File System</span>
                <span className="tag" style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', color: '#10b981', fontSize: '0.65rem' }}>Utility</span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-headings)', marginBottom: '0.5rem' }}>
                팀 업무 자료실
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontWeight: 300, lineHeight: '1.5' }}>
                드래그 앤 드롭 파일 업로드와 다용도 검색 및 다운로드를 지원하는 팀의 라이트 공유 스토리지 아카이브입니다.
              </p>
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '1rem', display: 'block' }}>
              자료실 바로가기 →
            </span>
          </div>

        </div>
      </div>

      <div className="line-divider" style={{ margin: '3rem 0' }}></div>

      {/* chronark.com Signature Line List View (All Projects) */}
      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '2rem' }}>
        All Projects
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Year Label */}
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-headings)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            2026
          </span>
        </div>

        {/* Project List Items */}
        {[
          { tab: 'netbox', name: 'Netbox Network Controller', desc: 'Django API와 React가 연동된 네트워크 IP 및 랙 가시화 매니저', stars: '★ 14', views: '👁 1,240' },
          { tab: 'resources', name: '팀 업무 자료실 (Resource Hub)', desc: '로컬 스토리지 상태 저장 기반 드래그 앤 드롭 파일 아카이브', stars: '★ 19', views: '👁 840' },
          { tab: 'ladder', name: '점심메뉴 사다리타기 게임', desc: '팀원 추가 기능 및 실시간 SVG 애니메이션 경로 추적이 내장된 놀이', stars: '★ 8', views: '👁 450' },
          { tab: 'home', name: 'GitHub Portfolio Portal', desc: 'chronark.com의 디자인을 럭셔리 라이트 테마로 재해석한 통합 사이트', stars: '★ 32', views: '👁 2,120' }
        ].map((item, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(item.tab)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0.5rem',
              borderBottom: '1px solid rgba(15, 23, 42, 0.04)',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.paddingLeft = '0.75rem';
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.paddingLeft = '0.5rem';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <strong style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {item.name}
              </strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 300 }}>
                {item.desc}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              <span>{item.stars}</span>
              <span>{item.views}</span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};
