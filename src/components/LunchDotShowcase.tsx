import React, { useState } from 'react';

export const LunchDotShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'play' | 'system' | 'tech'>('overview');
  const liveUrl = 'https://lunchdot.netlify.app';

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
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderRadius: '12px',
        border: '1px solid rgba(249, 115, 22, 0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ 
            backgroundColor: 'rgba(249, 115, 22, 0.2)', 
            color: '#F97316', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '999px', 
            fontSize: '0.75rem', 
            fontWeight: 700 
          }}>
            Office Decision Tool
          </span>
          <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
            대전무역회관 점심 메뉴 다트 룰렛 (Lunch Dart)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button 
            onClick={() => setActiveTab('play')}
            style={{
              backgroundColor: '#F97316',
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
              boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
            }}
          >
            <span>🎯 지금 다트 던지러 가기</span>
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
        background: 'radial-gradient(circle at 50% 20%, rgba(249, 115, 22, 0.25) 0%, rgba(15, 23, 42, 0.95) 75%)',
        borderRadius: '20px',
        border: '1px solid rgba(249, 115, 22, 0.2)',
        marginBottom: '2.5rem'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          backgroundColor: 'rgba(249, 115, 22, 0.15)',
          color: '#FDBA74',
          borderRadius: '999px',
          fontSize: '0.82rem',
          fontWeight: 700,
          marginBottom: '1rem',
          border: '1px solid rgba(249, 115, 22, 0.3)'
        }}>
          🎯 월평동 직장인을 위한 점심 메뉴 결정 솔루션
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 900, 
          letterSpacing: '-0.03em', 
          marginBottom: '0.75rem',
          lineHeight: '1.25'
        }}>
          대전무역회관 <span style={{ color: '#F97316' }}>점심 메뉴 다트 룰렛</span>
        </h1>

        <p style={{ 
          fontSize: '1.15rem', 
          color: '#F8FAFC', 
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          Lunch Dart Roulette · Daejeon Trade Center Edition
        </p>

        <p style={{ 
          fontSize: '0.95rem', 
          color: '#CBD5E1', 
          maxWidth: '780px', 
          margin: '0 auto 1.5rem',
          fontWeight: 300,
          lineHeight: '1.6'
        }}>
          "오늘 점심 뭐 먹지?" 매일 반복되는 직장인들의 최대 고민을 회전 다트 과녁판과 동료 명단 점수판(Ledger)으로 유쾌하고 공정하게 해결해주는 스마트 의사결정 도구입니다.
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
            borderTop: '3px solid #F97316'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#F97316' }}>3 SPEEDS</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>바람의 다트 고속 회전 난이도</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #10B981'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#10B981' }}>SCORECARD</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>실시간 멤버 점수판 (Ledger)</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #38BDF8'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#38BDF8' }}>MAP SYNC</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>월평동 식당 실좌표 연계</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #FCD34D'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FCD34D' }}>FAIR PLAY</div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.3rem' }}>점심값 내기 복불복 모드</div>
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
          { id: 'play', label: '🎯 인게임 라이브 플레이' },
          { id: 'system', label: '📊 다트 & 멤버 시스템' },
          { id: 'tech', label: '⚙️ 기술 아키텍처' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.75rem 1.25rem',
              color: activeTab === tab.id ? '#F97316' : '#94A3B8',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab.id ? 700 : 500,
              cursor: 'pointer',
              borderBottom: activeTab === tab.id ? '3px solid #F97316' : '3px solid transparent',
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
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: '#F97316' }}>
              🏢 월평동 상권 맞춤 기획
            </h3>
            <p style={{ color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
              대전무역회관 및 인근 오피스 빌딩 직장인들이 매일 점심 시간마다 겪는 결정 장애를 해결하고자, <strong>실제 반경 내 실존하는 맛집 데이터</strong>를 다트판에 매핑했습니다.
            </p>
            <p style={{ color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.95rem' }}>
              단순 랜덤 추첨을 넘어, 동료들의 이름을 등록하여 턴제 다트 시합을 진행하고 <strong>'오늘의 밥값 지불자'</strong>나 <strong>'오늘의 메뉴'</strong>를 공정하게 가립니다.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: '#10B981' }}>
              🎯 핵심 워크플로우
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(249,115,22,0.2)', color: '#F97316', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>STEP 1</span>
                <span>회전 속도 설정 (느림 / 보통 / 바람의 다트)</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(249,115,22,0.2)', color: '#F97316', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>STEP 2</span>
                <span>함께 식사할 동료 이름 입력 및 태그 추가</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(249,115,22,0.2)', color: '#F97316', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>STEP 3</span>
                <span>회전 과녁판을 향해 조준 후 타이밍에 맞춰 다트 투척</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'rgba(249,115,22,0.2)', color: '#F97316', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>STEP 4</span>
                <span>적중 식당 팝업 및 점수판(Ledger) 자동 기록</span>
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
              💡 아래 화면에서 실제 다트를 조준하고 던질 수 있습니다!
            </span>
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              style={{
                color: '#F97316',
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
            border: '2px solid rgba(249, 115, 22, 0.3)',
            backgroundColor: '#0F172A',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <iframe 
              src={liveUrl} 
              title="Lunch Dart Roulette Game"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay"
            />
          </div>
        </div>
      )}

      {/* Tab 3: System */}
      {activeTab === 'system' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F97316', marginBottom: '0.5rem' }}>
              🎯 각도 & 속도 물리학 캔버스
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              각 섹터별로 균등 배치된 식당 슬롯이 회전 각속도 공식에 따라 회전하며, 클릭 순간 궤적 계산을 통해 정밀한 좌표 적중 여부를 판정합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>
              📋 다트 점수판 (Scorecard Ledger)
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              참여 멤버별 투척 순서, 과녁 중앙/외곽 적중 점수, 그리고 최종 결정된 식당 이름을 테이블에 순차 적재하여 기록 유실 없이 팀 결과를 확정합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38BDF8', marginBottom: '0.5rem' }}>
              👥 동료 태그 클라우드
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              이름 입력 즉시 동적 뱃지 태그로 렌더링되며, 클릭 시 손쉽게 제외하거나 추가할 수 있어 그룹별 식사 인원 변동에 민첩하게 대응합니다.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FCD34D', marginBottom: '0.5rem' }}>
              ✨ 파티클 축하 이펙트
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6' }}>
              다트 적중 시 폭죽 파티클 효과와 함께 적중 사운드가 동시 재생되어 지루한 점심 메뉴 선정을 유쾌한 오피스 엔터테인먼트로 전환합니다.
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
              <div style={{ color: '#F97316', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Rotational Physics</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>Canvas 삼각함수(sin/cos)를 이용한 원형 과녁 렌더링 및 각속도 감속 관성 엔진</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#10B981', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>State Ledger Pattern</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>인게임 라운드 진행 상태와 멤버별 스코어를 불변 데이터 객체로 기록 및 롤백</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#38BDF8', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>DOM Particle Engine</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>경량 CSS 키프레임과 자바스크립트 버스트 좌표 연동을 통한 무지연 파티클 효과</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ color: '#FCD34D', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>Netlify Global Deploy</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>CDN 캐싱 기반 초고속 응답속도 및 사내 네트워크 데스크톱/태블릿 완벽 호환</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
