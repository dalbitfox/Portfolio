import React from 'react';

interface ProjectsPageProps {
  setActiveTab: (tab: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ setActiveTab }) => {
  return (
    <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
      
      {/* magic-portfolio.com/about Grid Structure */}
      <div className="magic-grid">
        
        {/* Left Profile Sidebar Card (span 4) */}
        <div className="magic-profile-card">
          <div className="avatar-placeholder">
            ⚙️
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-headings)', marginBottom: '0.25rem' }}>
            서부기술 (SeobuTech)
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
            Infrastructure & Workspace Portal
          </p>
          
          <div className="line-divider" style={{ margin: '1rem 0' }}></div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem', textAlign: 'left', fontWeight: 300 }}>
            서부기술(SeobuTech)의 네트워크 자산 효율을 높이고, 팀원들 간의 자료 관리 및 소통을 촉진하기 위한 자동화 솔루션 본부입니다. Django 백엔드와 React 클라이언트를 결합하여 고도의 네트워크 자동화 툴과 내부 유틸리티를 배포합니다.
          </p>
          
          <div className="line-divider" style={{ margin: '1rem 0' }}></div>
          
          {/* Quick Stats / Info List */}
          <div style={{ width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.82rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>대표 개발 엔지니어</span>
              <strong style={{ color: 'var(--text-primary)' }}>달빛폭스 (dalbitfox)</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>주요 배포 서비스</span>
              <strong style={{ color: 'var(--text-primary)' }}>netbox, 사다리타기, 자료실</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>연동 방식</span>
              <strong style={{ color: '#10b981' }}>GitHub ➔ Vercel Auto-sync</strong>
            </div>
          </div>
          
          <div className="line-divider" style={{ margin: '1.25rem 0' }}></div>
          
          {/* GitHub repo redirect link button */}
          <a 
            href="https://github.com/dalbitfox/Portfolio" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-secondary" 
            style={{ width: '100%', padding: '0.6rem 0' }}
          >
            🐙 깃허브 코드 저장소 방문
          </a>
        </div>

        {/* Right Details Column (span 8) */}
        <div className="magic-details-col">
          
          {/* Section: Main Portfolios (Projects & Experiences) */}
          <div className="magic-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.35rem' }}>💼</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-headings)' }}>
                Projects & Utilities Showcase
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Project 1: Netbox */}
              <div style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '1.25rem', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      1. Netbox Network Utility Suite
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      Django REST Framework Backend & React Frontend SPA
                    </span>
                  </div>
                  <span className="tag tag-blue" style={{ fontSize: '0.65rem' }}>Active Service</span>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem', fontWeight: 300 }}>
                  실제 배포 운영 중인 통합 네트워크 유틸리티 포털입니다. 서부기술(SeobuTech) 등 네트워크 인프라 팀원들이 매일 수동으로 계산하는 서브넷 주소 할당 업무를 전면 자동화하기 위해 탄생했습니다. 사이트에 탑재된 핵심 기능 명세는 다음과 같습니다:
                </p>
                
                {/* 7 core tools bullet description from source code analysis */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '0.5rem 1rem', 
                    fontSize: '0.82rem', 
                    backgroundColor: 'var(--bg-secondary)', 
                    padding: '1rem', 
                    borderRadius: '12px', 
                    border: '1px solid var(--border-color)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div><strong>• IPv4 Subnet Calculator:</strong> 비트 조절형 대역폭 및 범위 산출</div>
                  <div><strong>• CIDR Calculator:</strong> 클래스리스 주소 도식 매핑</div>
                  <div><strong>• IPv6 Subnet Tool:</strong> 차세대 IP 마스크 연산 및 표기</div>
                  <div><strong>• IP Tracker & Trace:</strong> IP 주소 홉 역추적 및 위치 수집</div>
                  <div><strong>• Web Ping Tester:</strong> 게이트웨이 왕복 시간(RTT) 진단</div>
                  <div><strong>• Security Port Scanner:</strong> 개방 포트 스캔 취약점 스펙 체크</div>
                  <div style={{ gridColumn: 'span 2' }}><strong>• Todo Checklist:</strong> 인프라 작업 보드 (Firebase 영구 연동)</div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a 
                    href="https://net-box.vercel.app" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary"
                    style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
                  >
                    🌐 실물 웹서비스 방문하기 (net-box.vercel.app) ↗
                  </a>
                  <button 
                    onClick={() => setActiveTab('netbox')} 
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
                  >
                    🔍 상세 아키텍처 쇼케이스 보기
                  </button>
                </div>
              </div>

              {/* Project 2: Ladder Game */}
              <div style={{ borderLeft: '3px solid #f97316', paddingLeft: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      2. 점심메뉴 선택 사다리타기 게임 (Lunch Ladder)
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      SVG Path Crawling Animation & React state
                    </span>
                  </div>
                  <span className="tag tag-orange" style={{ fontSize: '0.65rem' }}>Playable App</span>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem', fontWeight: 300 }}>
                  매일 직면하는 점심 메뉴 선택 피로를 해소하고 팀원 간 친목을 다지기 위한 인터랙티브 토이입니다. 참가자와 결과 목록을 실시간으로 입력하면, 정밀하게 계산된 SVG 선을 따라 파란 광선이 움직이며 deterministic 경로를 실시간 추적해 줍니다.
                </p>
                
                <button 
                  onClick={() => setActiveTab('ladder')} 
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
                >
                  🎯 사이트 내에서 플레이 시작하기
                </button>
              </div>

              {/* Project 3: Resource Hub */}
              <div style={{ borderLeft: '3px solid #10b981', paddingLeft: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      3. 팀 업무 자료실 (Workspace Resource Hub)
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      Local State Management & Drag-Drop File System
                    </span>
                  </div>
                  <span className="tag" style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', color: '#10b981', fontSize: '0.65rem' }}>Internal Utility</span>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem', fontWeight: 300 }}>
                  서부기술 팀의 자료 공유 아카이브 역할을 수행하는 아키타이프 스토리지입니다. 카테고리 태그 분류, 파일 검색 필터, 드래그 앤 드롭 업로드 모사 및 실제 파일 다운로드 동작 트리거를 지원하여 가볍고 견고하게 서류를 공유합니다.
                </p>
                
                <button 
                  onClick={() => setActiveTab('resources')} 
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
                >
                  📁 자료실 대시보드 바로 열기
                </button>
              </div>

            </div>
          </div>

          {/* Section: Professional Capabilities (Tech Stack) */}
          <div className="magic-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.35rem' }}>🛠️</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-headings)' }}>
                Skills & Technologies
              </h3>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem', fontWeight: 300 }}>
              서부기술(SeobuTech) 솔루션에 연계되어 작동하는 주요 인프라, 백엔드 프레임워크 및 프론트엔드 언어 스택 목록입니다.
            </p>
            
            <div>
              <span className="skill-badge">IPAM/Subnetting</span>
              <span className="skill-badge">CIDR Mapping</span>
              <span className="skill-badge">Port Scanning</span>
              <span className="skill-badge">React.js SPA</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">Django REST Framework</span>
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">Firebase Realtime DB</span>
              <span className="skill-badge">SVG Node Computing</span>
              <span className="skill-badge">Git & Version Control</span>
              <span className="skill-badge">Vercel & GitHub Actions</span>
              <span className="skill-badge">Bespoke CSS Modules</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
