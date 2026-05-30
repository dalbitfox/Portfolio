import React, { useState, useEffect } from 'react';
import avatarImg from '../assets/avatar.png';

export const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    const sections = ['intro', 'experience', 'studies', 'skills'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -50% 0px', // trigger when section occupies middle region of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveSection(id);
    }
  };

  return (
    <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
      
      {/* magic-portfolio.com/about Split Grid Layout */}
      <div className="magic-grid">
        
        {/* Left Column: Sticky Profile & Index Nav (span 4) */}
        <div className="magic-profile-card" style={{ border: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'rgba(10, 10, 10, 0.7)' }}>
          {/* Custom Avatar Placeholder matching the screenshot shape */}
          <div className="avatar-placeholder" style={{ width: '110px', height: '110px', border: '2px solid rgba(255,255,255,0.15)', overflow: 'hidden' }}>
            <img src={avatarImg} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, fontFamily: 'var(--font-headings)', marginBottom: '0.25rem' }}>
            SeobuTech
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
            Automation Engineer Team
          </p>

          {/* Time Zone Indicator matching screenshot */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            <span>🌐</span>
            <span>Asia/Seoul</span>
          </div>

          {/* Faux Language Toggle Buttons matching screenshot */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'white', fontWeight: 600 }}>Korean</span>
            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '4px', backgroundColor: 'transparent', color: 'rgba(255, 255, 255, 0.3)' }}>English</span>
          </div>

          <div className="line-divider" style={{ margin: '0.75rem 0' }}></div>
          
          {/* Vertical edge index navigations matching screenshot */}
          <div style={{ width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: '0.5rem 0' }}>
            <a 
              href="#intro" 
              onClick={(e) => handleNavClick(e, 'intro')}
              style={{ 
                color: activeSection === 'intro' ? 'var(--text-primary)' : 'var(--text-secondary)', 
                textDecoration: 'none', 
                fontSize: '0.82rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontWeight: activeSection === 'intro' ? 600 : 400,
                transition: 'var(--transition-smooth)'
              }}
            >
              <span style={{ color: activeSection === 'intro' ? '#3b82f6' : 'transparent', fontWeight: 'bold', transition: 'var(--transition-smooth)' }}>—</span> Introduction
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, 'experience')}
              style={{ 
                color: activeSection === 'experience' ? 'var(--text-primary)' : 'var(--text-secondary)', 
                textDecoration: 'none', 
                fontSize: '0.82rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontWeight: activeSection === 'experience' ? 600 : 400,
                transition: 'var(--transition-smooth)'
              }}
            >
              <span style={{ color: activeSection === 'experience' ? '#3b82f6' : 'transparent', fontWeight: 'bold', transition: 'var(--transition-smooth)' }}>—</span> Work Experience
            </a>
            <a 
              href="#studies" 
              onClick={(e) => handleNavClick(e, 'studies')}
              style={{ 
                color: activeSection === 'studies' ? 'var(--text-primary)' : 'var(--text-secondary)', 
                textDecoration: 'none', 
                fontSize: '0.82rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontWeight: activeSection === 'studies' ? 600 : 400,
                transition: 'var(--transition-smooth)'
              }}
            >
              <span style={{ color: activeSection === 'studies' ? '#3b82f6' : 'transparent', fontWeight: 'bold', transition: 'var(--transition-smooth)' }}>—</span> Studies
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, 'skills')}
              style={{ 
                color: activeSection === 'skills' ? 'var(--text-primary)' : 'var(--text-secondary)', 
                textDecoration: 'none', 
                fontSize: '0.82rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontWeight: activeSection === 'skills' ? 600 : 400,
                transition: 'var(--transition-smooth)'
              }}
            >
              <span style={{ color: activeSection === 'skills' ? '#3b82f6' : 'transparent', fontWeight: 'bold', transition: 'var(--transition-smooth)' }}>—</span> Technical skills
            </a>
          </div>
        </div>

        {/* Right Column: Detailed CV Sections (span 8) */}
        <div className="magic-details-col">
          
          {/* Section 1: Introduction */}
          <section id="intro" className="magic-card" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.35rem' }}>🔍</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-headings)' }}>Introduction</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.75', fontWeight: 300 }}>
              서부기술(SeobuTech)의 네트워크 자산 효율을 높이고, 정형화된 업무들을 웹 플랫폼으로 연결해 자동화하는 소프트웨어 엔지니어 팀입니다. 
              수동 데이터 입력이나 파일 분실 위험을 없애는 통합 보관 대시보드 설계와 인프라의 실시간 계산 연산을 다루며, 
              React, Django, PostgreSQL을 비롯한 현대적인 웹 기술 스택을 활용해 안정적인 사내 플랫폼을 배포합니다.
            </p>
          </section>

          {/* Section 2: Work Experience */}
          <section id="experience" className="magic-card" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '1.35rem' }}>💼</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-headings)' }}>Work Experience</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Job 1 */}
              <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Senior Systems Automation Engineer
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: 600 }}>
                      서부기술 (SeobuTech)
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>2026 - Present</span>
                </div>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontWeight: 300 }}>
                  <li>스위치 포트 점검 및 서브넷팅 연산 자동화 어드민 포털 <strong>NetBox</strong> 설계 및 연동</li>
                  <li>서부기술 대량 발송용 이메일 트리거 배치 <strong>AX-자동메일시스템</strong> 모듈 개발</li>
                  <li>정기 인프라 운영 상태 분석 리포팅 배치 <strong>AX-월간정기리포트</strong> 자동 렌더링 툴 개발</li>
                  <li>사내 교육 정보 알림 수집 및 가공 가이드 <strong>배움마당 스마트 도우미</strong> 크롤러 구축</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Full Stack Web Developer
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      Infrastructure Automation Lab
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>2022 - 2026</span>
                </div>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontWeight: 300 }}>
                  <li>팀 소통 증진 및 실시간 사다리 경로 추적을 위한 <strong>점심메뉴 사다리타기 게임</strong> 개발</li>
                  <li>파일 업로드 분류 태그와 Mock 다운로드를 지원하는 사내 <strong>업무 자료실 (Resource Hub)</strong> 구축</li>
                  <li>Django 및 React 기반의 고속 IP 주소 트래커 및 포트 스캔 API 연동</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Section 3: Studies */}
          <section id="studies" className="magic-card" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.35rem' }}>🎓</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-headings)' }}>Studies</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>University of Computer Science & Networks</strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, marginTop: '0.2rem' }}>
                  Studied Computer Systems Architecture, Subnet Allocations, Routing Protocols, and Database Administration.
                </p>
              </div>
              <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>
              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Build the Future Automation Guild</strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, marginTop: '0.2rem' }}>
                  Studied React frontend architectures, SVG rendering animations, and Django REST API integration workflows.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Technical skills */}
          <section id="skills" className="magic-card" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.35rem' }}>🛠️</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-headings)' }}>Technical skills</h3>
            </div>
            
            <div>
              <span className="skill-badge">IPAM/Subnetting</span>
              <span className="skill-badge">React.js Frontend</span>
              <span className="skill-badge">TypeScript SPA</span>
              <span className="skill-badge">Django REST Framework</span>
              <span className="skill-badge">PostgreSQL DB</span>
              <span className="skill-badge">SVG Stroke Animation</span>
              <span className="skill-badge">Crawl Automation Bot</span>
              <span className="skill-badge">Git & CI/CD Deployment</span>
              <span className="skill-badge">Vercel Cloud Hooks</span>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
};
