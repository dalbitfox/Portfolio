import React, { useState } from 'react';

export const OnTetrisShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'play' | 'battle' | 'tech'>('overview');
  const liveUrl = 'https://ontetris.vercel.app';

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
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        borderRadius: '12px',
        border: '1px solid rgba(56, 189, 248, 0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ 
            backgroundColor: 'rgba(56, 189, 248, 0.2)', 
            color: '#38BDF8', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '999px', 
            fontSize: '0.75rem', 
            fontWeight: 700 
          }}>
            Multiplayer Block Battle
          </span>
          <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
            OnTetris · 함께 쌓는 승부 (Live Web Game)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button 
            onClick={() => setActiveTab('play')}
            style={{
              backgroundColor: '#38BDF8',
              color: '#0B1321',
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
              boxShadow: '0 4px 12px rgba(56, 189, 248, 0.3)'
            }}
          >
            <span>🧩 블록 대전 입장하기</span>
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
        background: 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.25) 0%, rgba(16, 20, 30, 0.95) 75%)',
        borderRadius: '20px',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        marginBottom: '2.5rem'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          backgroundColor: 'rgba(56, 189, 248, 0.15)',
          color: '#91EDCC',
          borderRadius: '999px',
          fontSize: '0.82rem',
          fontWeight: 700,
          marginBottom: '1rem',
          border: '1px solid rgba(56, 189, 248, 0.3)'
        }}>
          🕹️ 실시간 멀티플레이어 &amp; AI 블록 대전 플랫폼
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 900, 
          letterSpacing: '-0.03em', 
          marginBottom: '0.75rem',
          lineHeight: '1.25'
        }}>
          OnTetris · <span style={{ color: '#38BDF8' }}>함께 쌓는 승부</span>
        </h1>

        <p style={{ 
          fontSize: '1.15rem', 
          color: '#F8FAFC', 
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          Multiplayer Real-time Tetris Battle
        </p>

        <p style={{ 
          fontSize: '0.95rem', 
          color: '#CBD5E1', 
          maxWidth: '780px', 
          margin: '0 auto 1.5rem',
          fontWeight: 300,
          lineHeight: '1.6'
        }}>
          모바일과 데스크톱 어디서나 함께 즐기는 차세대 블록 대전 게임. 실시간 라인 밀어내기 배틀, 라이브 인게임 채팅, 친구 및 AI 봇과의 1:1 대전, 그리고 실시간 랭킹 순위표를 완벽 지원합니다.
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
            borderTop: '3px solid #38BDF8'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#38BDF8' }}>PVP & AI</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>친구 1:1 및 스마트 AI 대전</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #91EDCC'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#91EDCC' }}>REALTIME</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>인게임 채팅 &amp; 공격 렌더링</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #818CF8'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#818CF8' }}>RANKING</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>전적 및 글로벌 순위 리더보드</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #F472B6'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#F472B6' }}>CYBER UI</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>다크 네온 반응형 테마</div>
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
          { id: 'battle', label: '⚔️ 배틀 시스템 & 모드' },
          { id: 'tech', label: '⚙️ 기술 아키텍처' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.75rem 1.25rem',
              color: activeTab === tab.id ? '#38BDF8' : '#94A3B8',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab.id ? 700 : 500,
              cursor: 'pointer',
              borderBottom: activeTab === tab.id ? '3px solid #38BDF8' : '3px solid transparent',
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
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: '#38BDF8' }}>
              💡 기획 및 아키텍처 목표
            </h3>
            <p style={{ color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
              혼자서만 플레이하던 고전 테트리스에서 벗어나, <strong>웹 브라우저 링크 하나로 접속해 친구와 실시간 승부를 겨루는 배틀 게임</strong>을 구축했습니다.
            </p>
            <p style={{ color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.95rem' }}>
              별도의 클라이언트 앱 설치 없이 모바일과 PC 크로스 플랫폼에서 동일한 60FPS 조작감을 보장하며, 상대방의 라인 현황과 공격 블록이 실시간으로 동기화됩니다.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: '#91EDCC' }}>
              🕹️ 주요 게임 모드
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(56,189,248,0.2)', color: '#38BDF8', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>AI 대전</span>
                <span>실력에 따라 자동 적응하는 지능형 AI 봇과의 1:1 연습 배틀</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(56,189,248,0.2)', color: '#38BDF8', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>친구 대전</span>
                <span>방 생성 후 초대 링크를 공유하여 실시간으로 즐기는 룸 매치</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(56,189,248,0.2)', color: '#38BDF8', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>라이브 채팅</span>
                <span>경기 도중 응원 및 감정 표현을 주고받는 실시간 채팅 오버레이</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(56,189,248,0.2)', color: '#38BDF8', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>랭킹 리더보드</span>
                <span>승패 전적 및 레이팅 점수를 기반으로 한 명예의 전당</span>
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
              💡 아래 화면에서 실제 온테트리스 웹게임을 바로 플레이할 수 있습니다.
            </span>
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              style={{
                color: '#38BDF8',
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
            border: '2px solid rgba(56, 189, 248, 0.3)',
            backgroundColor: '#10141E',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <iframe 
              src={liveUrl} 
              title="OnTetris Game"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay"
            />
          </div>
        </div>
      )}

      {/* Tab 3: Battle System */}
      {activeTab === 'battle' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38BDF8', marginBottom: '0.5rem' }}>
              💥 라인 공격 & 방어 카운터
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              2줄 이상의 동시 라인 클리어, T-스핀, 콤보 발생 시 상대방의 화면 하단으로 방해 블록을 전송하여 역전의 긴장감을 선사합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#91EDCC', marginBottom: '0.5rem' }}>
              📱 모바일 터치 가상 D-패드
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              스마트폰 터치 환경을 고려하여 하드드롭, 소프트드롭, 좌우 회전, 홀드 버튼을 인체공학적 터치 레이아웃으로 완벽 배치했습니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#818CF8', marginBottom: '0.5rem' }}>
              💬 실시간 인게임 채팅 오버레이
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              경기 관전 및 플레이 중 게임 화면을 방해하지 않는 깔끔한 토스트 스타일의 실시간 대화창을 지원합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F472B6', marginBottom: '0.5rem' }}>
              🏆 전적 및 티어 랭킹 리포트
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              승률, 평균 클리어 라인 수, APM(Actions Per Minute) 등 정밀한 전적 지표를 분석하여 플레이어의 랭킹 티어를 부여합니다.
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
              <div style={{ color: '#38BDF8', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>React &amp; Vite Engine</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>컴포넌트 기반 아키텍처와 경량 번들링을 통한 초고속 렌더링 및 모바일 뷰포트 완벽 적응</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#91EDCC', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Realtime Protocol</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>서버-클라이언트 간 블록 낙하 상태 및 공격 패킷 지연 없는 초저지연 양방향 동기화</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#818CF8', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>SRS Guideline System</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>국제 테트리스 표준 가이드라인(Super Rotation System) 블록 회전 및 킥(Kick) 알고리즘 적용</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#F472B6', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Vercel Edge Global</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>Vercel 배포를 통한 무중단 글로벌 엣지 서빙 및 즉각적인 HTTPS 보안 연결 제공</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
