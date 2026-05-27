import React from 'react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '좋은 아침입니다! ☀️';
    if (hour < 18) return '즐거운 오후입니다! ☕';
    return '오늘 하루도 수고 많으셨습니다! 🌙';
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Editorial Welcome Banner */}
      <div className="hero" style={{ paddingBottom: '2.5rem' }}>
        <span className="hero-tag">Team Workspace & Portfolio</span>
        <h1>{getGreeting()}</h1>
        <p style={{ marginTop: '0.5rem', fontSize: '1.2rem', fontWeight: 300 }}>
          팀원들과 자료를 공유하고, 직접 만든 유용한 포트폴리오 도구를 경험할 수 있는 워크스페이스 포털입니다.
        </p>
      </div>

      {/* Stats Board */}
      <div className="editorial-grid" style={{ marginBottom: '3rem' }}>
        <div className="card span-4" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            공유 자료 수
          </span>
          <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-headings)', color: 'var(--accent-primary)' }}>
            14 <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)' }}>개 등록됨</span>
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            업무 보고서, 리포트, 소스 코드 등
          </span>
        </div>

        <div className="card span-4" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            구동 가능한 도구
          </span>
          <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-headings)', color: 'var(--accent-warm)' }}>
            2 <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)' }}>개 활성화</span>
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            점심메뉴 사다리타기 및 Netbox 소개
          </span>
        </div>

        <div className="card span-4" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            워크스페이스 연동
          </span>
          <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-headings)', color: '#10b981' }}>
            Active
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            GitHub Push시 Vercel 자동 배포 설정 완료
          </span>
        </div>
      </div>

      {/* Feature Navigation Cards */}
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-headings)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        포트폴리오 & 자료실 둘러보기
      </h2>

      <div className="editorial-grid">
        {/* Resource Hub Card */}
        <div className="card span-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '320px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="tag tag-blue">Resource Center</span>
              <span style={{ fontSize: '1.5rem' }}>📁</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontFamily: 'var(--font-headings)' }}>
              업무 자료실 (Resource Hub)
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              업무에 필요한 문서, 디자인 가이드, 소스 코드 자료를 실시간으로 분류하고 보관할 수 있는 클라우드 느낌의 라이트 아키이브입니다. 검색 및 태그 필터링을 지원합니다.
            </p>
          </div>
          <button className="btn btn-primary" onClick={() => setActiveTab('resources')} style={{ alignSelf: 'flex-start' }}>
            자료실 바로가기 →
          </button>
        </div>

        {/* Ladder Game Card */}
        <div className="card span-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '320px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="tag tag-warm">Interactive App</span>
              <span style={{ fontSize: '1.5rem' }}>🎯</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontFamily: 'var(--font-headings)' }}>
              점심 사다리타기 게임
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              팀원들과 점심 메뉴 선택이나 가벼운 내기를 할 수 있는 인터랙티브 애니메이션 게임입니다. 사다리가 동적으로 렌더링되며, 클릭 시 짜릿한 결과가 나타납니다.
            </p>
          </div>
          <button className="btn btn-primary" onClick={() => setActiveTab('ladder')} style={{ alignSelf: 'flex-start' }}>
            사다리타기 시작 →
          </button>
        </div>

        {/* Netbox Portfolio Card */}
        <div className="card span-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '240px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span className="tag" style={{ backgroundColor: '#f1f5f9', color: '#334155' }}>Network System</span>
              <span style={{ fontSize: '1.5rem' }}>🌐</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontFamily: 'var(--font-headings)' }}>
              이전 개발작: Netbox 쇼케이스
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '650px' }}>
              네트워크 설정 및 관리를 획기적으로 개선했던 Netbox 프로젝트의 핵심 강점과 설계 철학, 주요 UI 아키텍처를 깔끔하고 우아한 다이어그램 및 설명서로 소개합니다.
            </p>
          </div>
          <button className="btn btn-secondary" onClick={() => setActiveTab('netbox')} style={{ alignSelf: 'flex-start', marginTop: '1.5rem' }}>
            쇼케이스 보기 →
          </button>
        </div>

        {/* Team Collaboration Panel */}
        <div className="card span-4" style={{ backgroundColor: 'var(--bg-primary)', borderStyle: 'dashed', borderWidth: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-headings)', color: 'var(--text-primary)' }}>
              팀원 공유 및 피드백
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5' }}>
              이 사이트는 GitHub 저장소와 연동되어 작동합니다. 수정 사항을 push하면 Vercel을 통해 10초 이내에 자동 업데이트되어 배포됩니다!
            </p>
            <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
              <code>git push origin main</code>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <span className="tag tag-blue">Deploy Auto-sync</span>
            <span className="tag">React SPA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
