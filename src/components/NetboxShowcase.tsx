import React, { useState } from 'react';

export const NetboxShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'mockup'>('overview');

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Title */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="tag tag-blue" style={{ marginBottom: '0.5rem' }}>Portfolio Showcase</span>
        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-headings)', fontWeight: 800 }}>🌐 Netbox Network Controller</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.25rem' }}>
          네트워크 인프라의 복잡한 연결 장치들을 단일 화면에서 조회, 관리, 시뮬레이션할 수 있는 자동화 플랫폼
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2.5rem' }}>
        <button
          onClick={() => setActiveTab('overview')}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontFamily: 'var(--font-headings)',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'overview' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            borderBottom: activeTab === 'overview' ? '3px solid var(--accent-primary)' : '3px solid transparent',
            transition: 'var(--transition-smooth)'
          }}
        >
          🔍 프로젝트 개요
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontFamily: 'var(--font-headings)',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'architecture' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            borderBottom: activeTab === 'architecture' ? '3px solid var(--accent-primary)' : '3px solid transparent',
            transition: 'var(--transition-smooth)'
          }}
        >
          ⚙️ 시스템 아키텍처
        </button>
        <button
          onClick={() => setActiveTab('mockup')}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontFamily: 'var(--font-headings)',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'mockup' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            borderBottom: activeTab === 'mockup' ? '3px solid var(--accent-primary)' : '3px solid transparent',
            transition: 'var(--transition-smooth)'
          }}
        >
          📱 대시보드 미리보기 (Mockup)
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="editorial-grid">
          {/* Main info */}
          <div className="card span-8">
            <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.4rem', marginBottom: '1rem' }}>
              💡 왜 Netbox가 탄생했는가?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              서로 다른 네트워크 스위치, 라우터, 그리고 IP 할당 내역들을 수동 엑셀 파일이나 낙후된 시스템으로 관리할 때 생기는 **동기화 문제와 휴먼 에러**를 해결하기 위해 설계되었습니다.
              스마트한 데이터 유효성 검증과 자동화 API 스케줄링을 통해, 모든 팀원이 동일하고 정확한 실시간 네트워크 상태를 공유받을 수 있도록 도와줍니다.
            </p>
            <div className="divider"></div>
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              ✨ 주요 강점
            </h4>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>IPAM (IP 주소 관리):</strong> IP v4/v6 주소의 완벽한 맵핑 및 가용 범위 분석</li>
              <li><strong>랙 캐비닛 시뮬레이션:</strong> 물리 장비실의 랙 보드 실시간 높이 및 공간 상태 시각화</li>
              <li><strong>강력한 RESTful API:</strong> 외부 장비 스캔 스크립트와 높은 호환성 및 자동 갱신</li>
              <li><strong>조직 간편 공유:</strong> 네트워크 장비 변경 기록에 대한 이력 보존 및 팀 채널 알림 발송</li>
            </ul>
          </div>

          {/* Quick specs */}
          <div className="card span-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.25rem', marginBottom: '1rem' }}>
              🛠️ Technical Spec
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>FRONTEND</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>React.js & TailwindCSS</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>BACKEND</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Django REST Framework</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>DATABASE</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>PostgreSQL & Redis (Caching)</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>INFRASTRUCTURE</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Docker & Nginx & AWS EC2</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Architecture Tab */}
      {activeTab === 'architecture' && (
        <div className="magic-card span-12" style={{ border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            ⚙️ Netbox 데이터 및 자동화 흐름도
          </h3>
          
          {/* Custom Pure CSS Diagram */}
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', padding: '2rem 0' }}>
            {/* Box 1 */}
            <div style={{ width: '200px', padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ fontSize: '1.5rem' }}>🖥️</span>
              <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', fontFamily: 'var(--font-headings)' }}>스마트 클라이언트</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>React SPA 기반 실시간 모니터링 대시보드</p>
            </div>

            <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>➔</div>

            {/* Box 2 */}
            <div style={{ width: '220px', padding: '1.5rem', backgroundColor: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '12px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ fontSize: '1.5rem' }}>🛡️</span>
              <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', fontFamily: 'var(--font-headings)', color: '#60a5fa' }}>자동화 백엔드 API</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Django REST Framework 토큰 기반 권한 관리 및 통신</p>
            </div>

            <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>➔</div>

            {/* Box 3 */}
            <div style={{ width: '200px', padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ fontSize: '1.5rem' }}>💾</span>
              <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', fontFamily: 'var(--font-headings)' }}>분산 관계형 DB</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>PostgreSQL 유효 데이터 및 Redis 캐시 서버 분리</p>
            </div>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', marginTop: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
              💡 핵심 시뮬레이션 메커니즘
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              사용자가 물리 스위치 연결선을 포털에 드로잉하면, 시스템은 백엔드 트리거를 실행하여 해당 랙 높이 공간 유효성과 케이블 길이를 자동 계산합니다.
              만약 정격 허용 범위를 넘거나 빈 포트가 존재하지 않으면 **실시간 트랜잭션 차단 시스템**을 가동해 데이터 훼손을 근본적으로 방지하도록 설계되었습니다.
            </p>
          </div>
        </div>
      )}

      {/* Mockup Tab */}
      {activeTab === 'mockup' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Beautiful Mockup Dashboard */}
          <div className="card span-12" style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '1.5rem' }}>
            {/* Dark Top bar mockup */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                <strong style={{ marginLeft: '0.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-headings)', color: '#94a3b8' }}>Netbox Controller v2.1 (Live Admin Console)</strong>
              </div>
              <span className="tag" style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7' }}>CONNECTED</span>
            </div>

            {/* Grid mockup */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1.5rem' }}>
              {/* Left sidebar mockup */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderRight: '1px solid #1e293b', paddingRight: '1rem' }}>
                <div style={{ padding: '0.5rem', backgroundColor: '#1e293b', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 600, color: '#38bdf8' }}>📊 대시보드 홈</div>
                <div style={{ padding: '0.5rem', fontSize: '0.82rem', color: '#94a3b8' }}>🌐 IPAM 주소 관리</div>
                <div style={{ padding: '0.5rem', fontSize: '0.82rem', color: '#94a3b8' }}>📁 스위치 & 포트 정보</div>
                <div style={{ padding: '0.5rem', fontSize: '0.82rem', color: '#94a3b8' }}>⚙️ 시스템 자동화 로그</div>
              </div>

              {/* Right main area mockup */}
              <div>
                {/* Stats cards in mockup */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>전체 라우팅 IP</span>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.25rem', color: '#38bdf8' }}>1,024 / 2,048</h4>
                  </div>
                  <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>연결 스위치 수</span>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.25rem', color: '#10b981' }}>12 Units</h4>
                  </div>
                  <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>랙 캐비닛 사용률</span>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.25rem', color: '#f59e0b' }}>78.5%</h4>
                  </div>
                </div>

                {/* Switch mock drawing list */}
                <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                  <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.75rem' }}>스위치 포트 현황판 (Switch Stack #1)</h4>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundColor: i % 5 === 0 ? '#ef4444' : i % 3 === 0 ? '#1e293b' : '#10b981',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.65rem',
                          fontWeight: 'bold',
                          color: '#fff',
                          cursor: 'pointer',
                          border: '1px solid #475569'
                        }}
                        title={`Port ${i+1}: ${i % 5 === 0 ? '장애' : i % 3 === 0 ? '유휴' : '연결됨'}`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '0.7rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '2px' }}></span> 정상 동작</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '2px' }}></span> 긴급 체크</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '8px', height: '8px', backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '2px' }}></span> 비활성</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
            ※ 위 어드민 콘솔 대시보드는 Netbox 프로젝트의 실제 구동 화면 레이아웃을 순수 CSS/HTML 기반으로 정교하게 제작한 컴포넌트입니다.
          </span>
        </div>
      )}
    </div>
  );
};
