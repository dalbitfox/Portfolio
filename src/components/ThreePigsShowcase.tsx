import React, { useState } from 'react';

export const ThreePigsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'play' | 'skills' | 'tech'>('overview');
  const liveUrl = 'https://3pig.netlify.app';

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
        backgroundColor: 'rgba(230, 126, 34, 0.1)',
        borderRadius: '12px',
        border: '1px solid rgba(230, 126, 34, 0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ 
            backgroundColor: 'rgba(230, 126, 34, 0.2)', 
            color: '#E67E22', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '999px', 
            fontSize: '0.75rem', 
            fontWeight: 700 
          }}>
            Fairy Tale Defense Game
          </span>
          <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
            아기돼지 삼형제의 철통방어 (Three Little Pigs: Home Defense)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button 
            onClick={() => setActiveTab('play')}
            style={{
              backgroundColor: '#E67E22',
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
              boxShadow: '0 4px 12px rgba(230, 126, 34, 0.3)'
            }}
          >
            <span>🛡️ 지금 바로 수성전 시작</span>
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
        background: 'radial-gradient(circle at 50% 20%, rgba(230, 126, 34, 0.25) 0%, rgba(15, 23, 42, 0.95) 75%)',
        borderRadius: '20px',
        border: '1px solid rgba(230, 126, 34, 0.2)',
        marginBottom: '2.5rem'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          backgroundColor: 'rgba(230, 126, 34, 0.15)',
          color: '#F39C12',
          borderRadius: '999px',
          fontSize: '0.82rem',
          fontWeight: 700,
          marginBottom: '1rem',
          border: '1px solid rgba(230, 126, 34, 0.3)'
        }}>
          🐷 본격 실시간 동화 수성 디펜스 액션
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 900, 
          letterSpacing: '-0.03em', 
          marginBottom: '0.75rem',
          lineHeight: '1.25'
        }}>
          아기돼지 삼형제의 <span style={{ color: '#E67E22' }}>철통방어</span>
        </h1>

        <p style={{ 
          fontSize: '1.15rem', 
          color: '#F8FAFC', 
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          Three Little Pigs: Home Defense
        </p>

        <p style={{ 
          fontSize: '0.95rem', 
          color: '#CBD5E1', 
          maxWidth: '780px', 
          margin: '0 auto 1.5rem',
          fontWeight: 300,
          lineHeight: '1.6'
        }}>
          몰려오는 탐욕스러운 늑대 군단으로부터 소중한 보금자리를 지켜내라! 짚단 굴리기, 도토리 폭격, 벽돌 성벽 연계 스킬과 집 요새화 업그레이드로 보스 울프 제왕을 격퇴하는 타워 디펜스 게임입니다.
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
            borderTop: '3px solid #E67E22'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#E67E22' }}>3 TIERS</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>짚집 → 나무집 → 벽돌 요새</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #F1C40F'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#F1C40F' }}>COMBO SKILLS</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>삼형제 고유 스킬 연계 폭격</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #E74C3C'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#E74C3C' }}>BOSS BATTLE</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>빅 배드 울프 제왕 결전</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #2ECC71'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#2ECC71' }}>10 WAVES</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>웨이브별 스테이지 테마 변화</div>
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
          { id: 'skills', label: '🌾 디펜스 & 스킬 시스템' },
          { id: 'tech', label: '⚙️ 기술 아키텍처' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.75rem 1.25rem',
              color: activeTab === tab.id ? '#E67E22' : '#94A3B8',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab.id ? 700 : 500,
              cursor: 'pointer',
              borderBottom: activeTab === tab.id ? '3px solid #E67E22' : '3px solid transparent',
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
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: '#E67E22' }}>
              📖 동화 세계관의 게임화
            </h3>
            <p style={{ color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
              전 세계인이 알고 있는 친숙한 고전 명작 동화 <strong>'아기돼지 삼형제'</strong>의 스토리를 액션 디펜스 장르로 재해석했습니다.
            </p>
            <p style={{ color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.95rem' }}>
              첫째의 짚, 둘째의 나무, 셋째의 벽돌이라는 고유 소재를 <strong>수성 내구도</strong>와 <strong>특수 연계 스킬 메커니즘</strong>으로 구현하여 몰입도를 극대화했습니다.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: '#F1C40F' }}>
              ⚔️ 핵심 게임 메커니즘
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(230,126,34,0.2)', color: '#E67E22', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>도토리 연사</span>
                <span>클릭/터치 또는 [T] 단축키로 기본 도토리 탄환 고속 난사</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(230,126,34,0.2)', color: '#E67E22', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>스킬 연계</span>
                <span>짚단 굴리기(밀치기) + 도토리 폭격(폭파) 콤보 연계 발동</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(230,126,34,0.2)', color: '#E67E22', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>상점 강화</span>
                <span>골드를 모아 집 내구도 보수, 데미지 증폭, 쿨타임 단축</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(230,126,34,0.2)', color: '#E67E22', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>신성 각성</span>
                <span>스탯 ALL MAX 도달 시 5초 주기 벼락 천벌 자동 강타</span>
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
              💡 아래 화면에서 실제 디펜스 게임을 바로 플레이할 수 있습니다! (단축키: 1/2/3 스킬, T 터보, U 상점)
            </span>
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              style={{
                color: '#E67E22',
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
            border: '2px solid rgba(230, 126, 34, 0.3)',
            backgroundColor: '#0F172A',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <iframe 
              src={liveUrl} 
              title="Three Little Pigs Defense Game"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay"
            />
          </div>
        </div>
      )}

      {/* Tab 3: Skills */}
      {activeTab === 'skills' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#E67E22', marginBottom: '0.5rem' }}>
              🌾 [1번 스킬] 짚단 굴리기 (첫째 돼지)
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              거대한 짚단을 전방으로 힘차게 굴려 몰려오는 늑대 무리를 일제히 뒤로 넉백시키고 기절 상태를 부여합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F1C40F', marginBottom: '0.5rem' }}>
              🌰 [2번 스킬] 도토리 폭격 (둘째 돼지)
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              하늘 높이 던진 거대 도토리가 낙하하며 광역 폭발 피해를 일으킵니다. 짚단으로 뭉쳐놓은 적들에게 연계 시 치명타가 발동합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#E74C3C', marginBottom: '0.5rem' }}>
              🧱 [3번 스킬] 벽돌 성벽 요새화 (셋째 돼지)
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              집 전방에 견고한 벽돌 차단벽을 생성하여 늑대들의 진격을 직접 물리 차단하고 본체의 내구도를 완벽 보호합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2ECC71', marginBottom: '0.5rem' }}>
              👑 보스전: 힙스터 빅 배드 울프 제왕
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              최종 웨이브에 등장하는 거대 보스는 입김으로 집을 직접 강타하며, 상단 전용 HUD 체력바와 함께 박진감 넘치는 결전을 선사합니다.
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
              <div style={{ color: '#E67E22', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Canvas 2D Game Loop</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>requestAnimationFrame 기반 60FPS 실시간 투사체 충돌 감지(AABB/Circle) 및 몬스터 AI 경로 계산</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#F1C40F', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Keyboard & Touch Control</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>PC 키보드 단축키(1,2,3,T,U,P,F) 및 모바일 가상 HUD 버튼 간의 완벽한 듀얼 인터페이스 지원</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#E74C3C', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Dynamic Audio Engine</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>Web Audio 기반 웨이브별 배경음악 전환 및 피격, 타격, 폭발 사운드 볼륨 정규화 믹싱</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#2ECC71', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Responsive Orientation</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>모바일 세로/가로 모드 감지 배너 및 전체화면 API를 통한 기기 맞춤형 시야각 제공</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
