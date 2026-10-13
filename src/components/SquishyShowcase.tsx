import React, { useState } from 'react';

export const SquishyShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'play' | 'features' | 'tech'>('overview');
  const liveUrl = 'https://5286.netlify.app';

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', maxWidth: '1100px', margin: '0 auto', color: '#F8FAFC' }}>
      
      {/* 0. Top Bar Actions */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem', 
        marginBottom: '2rem',
        padding: '1rem 1.5rem',
        backgroundColor: 'rgba(255, 107, 139, 0.1)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 107, 139, 0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ 
            backgroundColor: 'rgba(255, 107, 139, 0.2)', 
            color: '#FF6B8B', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '999px', 
            fontSize: '0.75rem', 
            fontWeight: 700 
          }}>
            Casual Arcade Web Game
          </span>
          <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
            스트레스 젤리 파괴자 (Squishy Stress Smasher)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button 
            onClick={() => setActiveTab('play')}
            style={{
              backgroundColor: '#FF6B8B',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(255, 107, 139, 0.3)'
            }}
          >
            <span>🎮 지금 바로 플레이하기</span>
          </button>

          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noreferrer"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span>라이브 사이트 새 창</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* 1. Header */}
      <div style={{
        textAlign: 'center',
        padding: '3rem 1.5rem 2.5rem',
        background: 'radial-gradient(circle at 50% 20%, rgba(255, 107, 139, 0.25) 0%, rgba(15, 23, 42, 0.95) 75%)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 107, 139, 0.2)',
        marginBottom: '2.5rem'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          backgroundColor: 'rgba(255, 107, 139, 0.15)',
          color: '#FF8FA3',
          borderRadius: '999px',
          fontSize: '0.82rem',
          fontWeight: 700,
          marginBottom: '1rem',
          border: '1px solid rgba(255, 107, 139, 0.3)'
        }}>
          🍡 뽀작뽀작 스트레스 날리기 클리커 게임
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 900, 
          letterSpacing: '-0.03em', 
          marginBottom: '0.75rem',
          lineHeight: '1.25'
        }}>
          말랑말랑 <span style={{ color: '#FF6B8B' }}>스트레스 젤리 파괴자</span>
        </h1>

        <p style={{ 
          fontSize: '1.15rem', 
          color: '#F8FAFC', 
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          Squishy Stress Smasher
        </p>

        <p style={{ 
          fontSize: '0.95rem', 
          color: '#CBD5E1', 
          maxWidth: '750px', 
          margin: '0 auto 1.5rem',
          fontWeight: 300,
          lineHeight: '1.6'
        }}>
          일상에서 쌓인 온갖 스트레스(야근, 과제, 시험, 월요병)를 말랑말랑한 젤리 몬스터로 형상화하여 팍팍 깨부수는 힐링 액션 웹 게임입니다. 콤보 피버 타임과 유쾌한 사운드가 극대화된 타격감을 선사합니다.
        </p>

        {/* KPI / Spec Chips */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #FF6B8B'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FF6B8B' }}>5X FEVER</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>피버 모드 스매시 타격</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #FFA07A'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFA07A' }}>CUSTOM</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>스트레스 이름 직접 지정</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #C084FC'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#C084FC' }}>BOOK & REPORT</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>젤리 도감 & 파괴 통계</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #34D399'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#34D399' }}>AUDIO API</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>경쾌한 신스 사운드 & SFX</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        marginBottom: '2rem',
        overflowX: 'auto',
        paddingBottom: '2px'
      }}>
        {[
          { id: 'overview', label: '🔍 프로젝트 개요' },
          { id: 'play', label: '🎮 인게임 라이브 플레이' },
          { id: 'features', label: '✨ 핵심 시스템 & 조작' },
          { id: 'tech', label: '⚙️ 기술 아키텍처' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.75rem 1.25rem',
              color: activeTab === tab.id ? '#FF6B8B' : '#94A3B8',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab.id ? 700 : 500,
              cursor: 'pointer',
              borderBottom: activeTab === tab.id ? '3px solid #FF6B8B' : '3px solid transparent',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: '#FF6B8B' }}>
              💡 기획 의도 및 배경
            </h3>
            <p style={{ color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
              현대 직장인과 수험생들이 일상에서 겪는 <strong>업무 스트레스, 시험 압박, 만성 피로</strong>를 간편하게 덜어낼 수 있는 게임을 목표로 제작되었습니다.
            </p>
            <p style={{ color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.95rem' }}>
              별도의 복잡한 규칙 없이, 누구나 직관적으로 클릭/탭하는 것만으로 스트레스 몬스터를 물리치고 상쾌한 파괴 이펙트와 피버 타임을 즐길 수 있습니다.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: '#FFA07A' }}>
              🎯 핵심 게임 루프
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(255,107,139,0.2)', color: '#FF6B8B', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>1단계</span>
                <span>원하는 스트레스 키워드 입력 후 젤리 몬스터 소환</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(255,107,139,0.2)', color: '#FF6B8B', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>2단계</span>
                <span>연속 클릭으로 콤보를 쌓으며 말랑말랑한 젤리 타격</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(255,107,139,0.2)', color: '#FF6B8B', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>3단계</span>
                <span>게이지 완충 시 5배 점수 FEVER TIME 폭발 발동</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(255,107,139,0.2)', color: '#FF6B8B', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>4단계</span>
                <span>스트레스 해소율 100% 달성 및 통계 리포트 확인</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Play (Live Iframe) */}
      {activeTab === 'play' && (
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
              💡 아래 화면에서 바로 플레이할 수 있습니다. (전체화면이나 사운드는 사이트 방문 시 최적화됩니다)
            </span>
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              style={{
                color: '#FF6B8B',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              전체 화면으로 플레이 ↗
            </a>
          </div>

          <div style={{
            width: '100%',
            height: '680px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid rgba(255, 107, 139, 0.3)',
            backgroundColor: '#0F172A',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <iframe 
              src={liveUrl} 
              title="Squishy Stress Smasher Game"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay"
            />
          </div>
        </div>
      )}

      {/* Tab 3: Features */}
      {activeTab === 'features' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FF6B8B', marginBottom: '0.5rem' }}>
              🔥 5X FEVER TIME 시스템
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              클릭 콤보를 누적시키면 FEVER 게이지가 차오르며, 발동 시 화면 전체가 불타오르며 모든 클릭 점수와 타격감이 5배로 폭발합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFA07A', marginBottom: '0.5rem' }}>
              💥 커스텀 스트레스 타겟 소환
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              플레이어가 직접 물리치고 싶은 스트레스의 이름(예: '월요병', '부장님 잔소리', '취업준비')을 입력창에 적으면 젤리 머리 위에 명찰이 생성되어 타격 몰입감을 극대화합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#C084FC', marginBottom: '0.5rem' }}>
              📖 젤리 도감 & 파괴 리포트
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              각양각색의 속성과 표정을 지닌 젤리 몬스터를 처치하여 도감을 해금하고, 세션 종료 후 총 해소된 스트레스 수치와 등급 리포트를 발급받을 수 있습니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34D399', marginBottom: '0.5rem' }}>
              🎵 오디오 반응형 타격 사운드
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              Web Audio API를 활용한 맞춤형 BGM과 클릭 시 출력되는 찰진 스쿼시(Squish) 사운드가 청각적 만족감을 실시간으로 제공합니다.
            </p>
          </div>
        </div>
      )}

      {/* Tab 4: Tech */}
      {activeTab === 'tech' && (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F8FAFC' }}>
            ⚙️ 기술 스택 및 아키텍처 상세
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#FF6B8B', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>HTML5 Canvas</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>60fps의 부드러운 젤리 물리학 시뮬레이션, 스프링 튕김 애니메이션 및 입자 파편 렌더링</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#FFA07A', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Web Audio API</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>외부 사운드 의존성 없이 주파수 변조를 통한 실시간 동적 신스 효과음 및 BGM 합성</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#C084FC', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Vanilla JavaScript</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>프레임워크 오버헤드 없는 순수 자바스크립트 객체 지향 게임 루프 및 콤보 상태 관리</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#34D399', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Netlify CDN Deploy</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>글로벌 엣지 배포를 통한 0.1초 미만 초고속 로딩 및 모바일 완벽 반응형 뷰포트 지원</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
