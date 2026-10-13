import React from 'react';

export const TrafficReportShowcase: React.FC = () => {
  const openStandalonePage = () => {
    window.open('/ax_monthly_report.html', '_blank');
  };

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
        backgroundColor: 'rgba(31, 58, 99, 0.35)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ 
            backgroundColor: 'rgba(242, 140, 40, 0.2)', 
            color: '#F28C28', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '999px', 
            fontSize: '0.75rem', 
            fontWeight: 700 
          }}>
            AX 과제 완결
          </span>
          <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
            LG유플러스 서부기술지원팀 1인 수행
          </span>
        </div>

        <button 
          onClick={openStandalonePage}
          style={{
            backgroundColor: '#F28C28',
            color: '#0B1321',
            border: 'none',
            borderRadius: '8px',
            padding: '0.55rem 1.25rem',
            fontSize: '0.85rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(242, 140, 40, 0.3)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFA64D')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F28C28')}
        >
          <span>🌐 1페이지 단일 HTML 보고서 새 창 열기</span>
          <span style={{ fontSize: '1rem' }}>↗</span>
        </button>
      </div>

      {/* 1. Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '3rem 1.5rem 2.5rem',
        background: 'radial-gradient(circle at 50% 15%, rgba(31, 58, 99, 0.7) 0%, rgba(10, 17, 30, 0.95) 75%)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '2.5rem'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          backgroundColor: 'rgba(242, 140, 40, 0.15)',
          color: '#FFA64D',
          borderRadius: '999px',
          fontSize: '0.82rem',
          fontWeight: 700,
          marginBottom: '1rem',
          border: '1px solid rgba(242, 140, 40, 0.3)'
        }}>
          ⚡ IPNMS부터 AI 요약·메일 발송까지 무인 자동화
        </div>

        <h1 style={{ 
          fontSize: '2.4rem', 
          fontWeight: 900, 
          letterSpacing: '-0.03em', 
          marginBottom: '0.75rem',
          lineHeight: '1.25'
        }}>
          고객 월간 트래픽 보고서 <span style={{ color: '#F28C28' }}>자동화 (AX 과제)</span>
        </h1>

        <p style={{ 
          fontSize: '1.1rem', 
          color: '#CBD5E1', 
          maxWidth: '750px', 
          margin: '0 auto 1.5rem',
          fontWeight: 300,
          lineHeight: '1.6'
        }}>
          IPNMS 데이터 수집부터 보고서 생성, AI 요약, 자동 메일 발송까지 무인 자동화
        </p>

        {/* Slogan */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(19, 138, 114, 0.25)',
          color: '#3DD8B8',
          padding: '0.5rem 1.5rem',
          borderRadius: '10px',
          fontSize: '0.95rem',
          fontWeight: 700,
          marginBottom: '2rem',
          border: '1px solid rgba(19, 138, 114, 0.4)'
        }}>
          "반복은 줄이고, 가치는 높입니다"
        </div>

        {/* 4 KPI Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.85)',
            padding: '1.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderTop: '3px solid #FFA64D'
          }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFA64D', lineHeight: 1 }}>325</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.5rem' }}>월간 자동 조회 회선</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>총 3종 보고서 회선 전수</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.85)',
            padding: '1.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderTop: '3px solid #138A72'
          }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#3DD8B8', lineHeight: 1 }}>0단계</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.5rem' }}>수작업 개입 단계</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>실행~발송 100% 무인화</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.85)',
            padding: '1.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderTop: '3px solid #6A3FA0'
          }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#BFA0F4', lineHeight: 1 }}>12개</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.5rem' }}>자동 생성 산출물</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>3종 보고서 × 4종 포맷</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.85)',
            padding: '1.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderTop: '3px solid #F28C28'
          }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#F28C28', lineHeight: 1 }}>119시간</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.5rem' }}>연간 업무 절감</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>월 약 10시간 소요 공수</div>
          </div>
        </div>
      </div>

      {/* 2. Overview: 배경(문제) -> 목표 -> 결과 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#F28C28' }}>■</span> 프로젝트 개요
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {/* 배경(문제) */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.75rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#F87171', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                배경 (문제)
              </span>
              <strong style={{ fontSize: '1.05rem' }}>수작업 절차의 한계</strong>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '1rem' }}>
              고객사 회선의 월간 트래픽 보고서를 매월 수작업으로 작성하여 반복 작업 부담이 크고 수치 입력 오류 가능성이 존재했습니다.
            </p>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.8rem', color: '#94A3B8', lineHeight: '1.7' }}>
              사내 시스템 로그인 → IPNMS 접속 → 성능 메뉴 진입 → 서비스·가입번호 조회 → MRTG 그래프 다운로드 → 입력/출력 평균·최대값 기록 → 엑셀 보고서 작성 → 메일 발송
            </div>
          </div>

          {/* 목표 */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.75rem',
            borderRadius: '14px',
            border: '1px solid rgba(19, 138, 114, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ backgroundColor: 'rgba(19, 138, 114, 0.25)', color: '#3DD8B8', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                프로젝트 목표
              </span>
              <strong style={{ fontSize: '1.05rem' }}>전 과정 완전 무인화</strong>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#3DD8B8', fontWeight: 600, lineHeight: '1.6', marginBottom: '0.75rem' }}>
              수집 → 보고서 생성 → 분석 요약 → 메일 발송 전 과정을 사람 개입 없이 매월 자동 수행
            </p>
            <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
              <li>사내 DRM 문서보안 제약 코드 수준 우회</li>
              <li>다양한 보고서 포맷(XLSX·HTML·PPTX·TXT) 원터치 산출</li>
              <li>생성형 AI(AI Builder GPT) 기반 트래픽 자연어 분석</li>
            </ul>
          </div>

          {/* 결과 */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.75rem',
            borderRadius: '14px',
            border: '1px solid rgba(242, 140, 40, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ backgroundColor: 'rgba(242, 140, 40, 0.25)', color: '#FFA64D', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                도출 결과
              </span>
              <strong style={{ fontSize: '1.05rem' }}>1인 수행 성공 구축</strong>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#FFA64D', fontWeight: 600, lineHeight: '1.6', marginBottom: '0.75rem' }}>
              실행부터 메일 발송까지 수작업 0단계 전환
            </p>
            <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
              <li>매월 2일 정해진 시각에 325회선 데이터 자동 수집</li>
              <li>월 10시간 소요 공수를 수 초 단위 생성으로 단축</li>
              <li>오류 없는 정밀 수치 통일 및 무인 이메일 발송 실현</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. 자동화 대상 보고서 3종 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#138A72' }}>■</span> 자동화 대상 보고서 (매월 3종, 총 325회선)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.25rem' }}>
          {/* 한국중부발전 */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.75rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>한국중부발전</h4>
              <span style={{ color: '#FFA64D', fontWeight: 700, fontSize: '0.88rem' }}>전용회선</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', margin: '0.75rem 0', backgroundColor: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: '8px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>대상 규모</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>51회선</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>시트 구성</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>상위국 5개 시트</div>
              </div>
            </div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: '#38BDF8', backgroundColor: '#0B1321', padding: '0.5rem', borderRadius: '6px' }}>
              스크립트: 00_KOMIFO_Bot.py
            </div>
          </div>

          {/* 신용보증재단 인터넷망 */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.75rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>신용보증재단</h4>
              <span style={{ color: '#3DD8B8', fontWeight: 700, fontSize: '0.88rem' }}>인터넷망</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', margin: '0.75rem 0', backgroundColor: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: '8px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>대상 규모</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>137회선</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>시트 구성</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>재단 16개 시트</div>
              </div>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
              서비스: 비즈온 133, 비즈넷 2, 오피스넷 1, 공공인터넷 1
            </div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: '#38BDF8', backgroundColor: '#0B1321', padding: '0.5rem', borderRadius: '6px' }}>
              스크립트: 00_SINBO_Bot.py
            </div>
          </div>

          {/* 신용보증재단 전용회선(MVP) */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.75rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>신용보증재단</h4>
              <span style={{ color: '#BFA0F4', fontWeight: 700, fontSize: '0.88rem' }}>전용회선 (MVP)</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', margin: '0.75rem 0', backgroundColor: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: '8px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>대상 규모</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>137회선</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>시트 구성</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>지역 18개 시트</div>
              </div>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
              전국 MVP 주요 거점 지점별 정밀 트래픽 분석
            </div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: '#38BDF8', backgroundColor: '#0B1321', padding: '0.5rem', borderRadius: '6px' }}>
              스크립트: 00_SINBO_MVP_Bot.py
            </div>
          </div>
        </div>
      </div>

      {/* 4. 전체 자동화 흐름 6단계 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#6A3FA0' }}>■</span> 전체 자동화 흐름 (6단계)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
          {/* Step 1 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: '#F28C28', fontWeight: 900, fontSize: '1.25rem' }}>01</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.4rem 0' }}>작업 스케줄러</div>
            <div style={{ fontSize: '0.78rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              매월 2일 새벽, Python 봇 3종 자동 실행 (사람 개입 없음)
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: '#F28C28', fontWeight: 900, fontSize: '1.25rem' }}>02</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.4rem 0' }}>Python 수집 봇</div>
            <div style={{ fontSize: '0.78rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              IPNMS에서 입/출력 최대·평균 조회, MRTG 그래프 수집
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: '#F28C28', fontWeight: 900, fontSize: '1.25rem' }}>03</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.4rem 0' }}>보고서 자동 생성</div>
            <div style={{ fontSize: '0.78rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              보고서별 XLSX · HTML · PPTX · TXT 4종 생성
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: '#F28C28', fontWeight: 900, fontSize: '1.25rem' }}>04</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.4rem 0' }}>OneDrive 저장</div>
            <div style={{ fontSize: '0.78rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              전월 폴더 자동 생성 (예: 2026년\9월\), 월별 누적 보관
            </div>
          </div>

          {/* Step 5 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: '#F28C28', fontWeight: 900, fontSize: '1.25rem' }}>05</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.4rem 0' }}>Power Automate</div>
            <div style={{ fontSize: '0.78rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              07:10 흐름 실행, 요약 TXT를 AI Builder(GPT)로 분석
            </div>
          </div>

          {/* Step 6 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: '#F28C28', fontWeight: 900, fontSize: '1.25rem' }}>06</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0.4rem 0' }}>Outlook 자동 메일</div>
            <div style={{ fontSize: '0.78rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              AI 요약 본문 삽입 및 파일 첨부 후 고객 담당자 발송
            </div>
          </div>
        </div>
      </div>

      {/* 5. 단계별 상세 설명 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#F28C28' }}>■</span> 단계별 상세 구현
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* 모듈 1: Python 수집 봇 */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.5rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#60A5FA', marginBottom: '0.75rem' }}>
              [Python 수집 봇] 핵심 로직
            </h4>
            <ul style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.7', paddingLeft: '1.2rem' }}>
              <li><strong>회선 목록 코드 내장:</strong> DRM 문서보안 적용 엑셀을 열지 않고 바로 조회하여 무인 스케줄링 완결</li>
              <li><strong>전 회선 조회 + 재조회:</strong> 실패 회선 자동 재조회 수행, 최종 미응답 시 '수집불가'로 명확히 표시</li>
              <li><strong>단위 자동 변환:</strong> MRTG 값(bps·k·M·G)을 파싱하여 일관된 <strong>Mbps</strong> 단위로 통일</li>
              <li><strong>대역폭 최대 사용률 연산:</strong> [최대 트래픽(입력/출력 중 큰 값) ÷ 신청 대역폭 × 100], 80% 이상 경고 표시</li>
              <li><strong>목록 정비 반영:</strong> 해지 회선 자동 제외 및 신규 회선 추가 반영</li>
            </ul>
          </div>

          {/* 모듈 2: 보고서 산출물 및 OneDrive */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.5rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#3DD8B8', marginBottom: '0.75rem' }}>
              [보고서 산출물 4종 & OneDrive 연/월 저장]
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '0.5rem' }}>
              매월 3종 보고서마다 4형식(XLSX, HTML, PPTX, TXT) 총 12개 파일을 자동 생성합니다.
            </p>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#94A3B8' }}>
              실행월 기준 전월 폴더 동적 생성 (예: <code>02_월간자동보고서\SINBO_Out\2026년\9월\</code>)으로 기존 데이터 덮어쓰기 없이 월별 누적 보관
            </div>
          </div>

          {/* 모듈 3: Power Automate 클라우드 흐름 */}
          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.7)',
            padding: '1.5rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#BFA0F4', marginBottom: '0.75rem' }}>
              [Power Automate 클라우드 흐름 & AI Builder]
            </h4>
            <ul style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.7', paddingLeft: '1.2rem' }}>
              <li><strong>트리거:</strong> 되풀이 (매월 2일 07:10, 서울 표준시)</li>
              <li><strong>변수 계산식:</strong> 대상 연/월(오늘 - 1개월, 한국시간 기준)을 식으로 계산해 폴더 경로·파일명 자동 조립</li>
              <li><strong>파일 콘텐츠 수집:</strong> OneDrive '경로를 사용하여 파일 콘텐츠 가져오기' 액션으로 안전하게 취합</li>
              <li><strong>AI Builder 공용 프롬프트:</strong> 인터넷망과 전용회선 흐름이 1개 공용 프롬프트를 사용하며 TXT 첫 줄로 망 자동 구분</li>
              <li><strong>메일 본문 서식:</strong> HTML 서식 (기본 인사말 + 굵은 갈색 'AI 분석 - 트래픽 종합 요약' + 문장별 줄바꿈)</li>
              <li><strong>첨부파일명 정리:</strong> 예) <code>2026년_9월_인터넷망트래픽.xlsx</code> (불필요한 디렉터리 경로 분리)</li>
              <li><strong>확장성:</strong> 흐름 복제를 통해 폴더·파일명 변수만 변경하여 새로운 보고서 신속 확장 가능</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 6. 산출물 4종 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#138A72' }}>■</span> 보고서 산출물 4종 (매월 12개 파일)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>
          {/* XLSX */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#34D399', marginBottom: '0.25rem' }}>XLSX</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>고객 보고용 엑셀</div>
            <ul style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.6', paddingLeft: '1.1rem' }}>
              <li>기관/지역별 시트 자동 분리</li>
              <li>회선별 MRTG 그래프 내장</li>
              <li>입/출력 트래픽 수치 블록</li>
            </ul>
          </div>

          {/* HTML 대시보드 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#F97316', marginBottom: '0.25rem' }}>HTML</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>웹 대시보드</div>
            <ul style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.6', paddingLeft: '1.1rem' }}>
              <li>요약 카드 및 전체 상태 표</li>
              <li>그래프 클릭 시 확대 팝업</li>
              <li>마우스 오버 시 날짜 표시 및 검색</li>
            </ul>
          </div>

          {/* PPTX */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FB923C', marginBottom: '0.25rem' }}>PPTX</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>보고용 슬라이드</div>
            <ul style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.6', paddingLeft: '1.1rem' }}>
              <li>세로형 보고 표준 슬라이드</li>
              <li>장당 4회선 카드 그리드 배치</li>
              <li>브리핑 및 인쇄 최적화</li>
            </ul>
          </div>

          {/* TXT */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#C084FC', marginBottom: '0.25rem' }}>TXT</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>AI 분석 입력용</div>
            <ul style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.6', paddingLeft: '1.1rem' }}>
              <li>전체/정상/수집불가 건수</li>
              <li>사용률 상위 회선 데이터</li>
              <li>지역별 현황 구조화 요약</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 7. 기술 스택 (로고/이미지 인라인 SVG 포함) */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#F28C28' }}>■</span> 기술 스택
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {/* Python */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M11.9 2C6.7 2 7 4.2 7 4.2V6.5H12.2V7.3H3.6S1 7 1 12.2C1 17.4 3.2 17.2 3.2 17.2H5V14.8C5 12 7.3 12 7.3 12H12.5C14.7 12 14.8 10 14.8 10V4.2C14.8 4.2 15.1 2 11.9 2ZM9.3 3.6C9.9 3.6 10.3 4 10.3 4.6C10.3 5.2 9.9 5.6 9.3 5.6C8.7 5.6 8.3 5.2 8.3 4.6C8.3 4 8.7 3.6 9.3 3.6Z" fill="#387EB8"/>
                <path d="M12.1 22C17.3 22 17 19.8 17 19.8V17.5H11.8V16.7H20.4S23 17 23 11.8C23 6.6 20.8 6.8 20.8 6.8H19V9.2C19 12 16.7 12 16.7 12H11.5C9.3 12 9.2 14 9.2 14V19.8C9.2 19.8 8.9 22 12.1 22ZM14.7 20.4C14.1 20.4 13.7 20 13.7 19.4C13.7 18.8 14.1 18.4 14.7 18.4C15.3 18.4 15.7 18.8 15.7 19.4C15.7 20 15.3 20.4 14.7 20.4Z" fill="#FFE052"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Python</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>데이터 수집 및 엑셀/PPT/HTML 생성</div>
            </div>
          </div>

          {/* Windows 작업 스케줄러 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="9" height="9" fill="#0078D4"/>
                <rect x="13" y="2" width="9" height="9" fill="#0078D4"/>
                <rect x="2" y="13" width="9" height="9" fill="#0078D4"/>
                <rect x="13" y="13" width="9" height="9" fill="#0078D4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Windows 작업 스케줄러</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>매월 2일 새벽 무인 스케줄링</div>
            </div>
          </div>

          {/* OneDrive for Business */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#0078D4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>OneDrive for Business</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>연/월 누적 클라우드 보관</div>
            </div>
          </div>

          {/* Power Automate */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 14L10 8L16 14L22 8V16L16 22L10 16L4 22V14Z" fill="#0066FF"/>
                <path d="M4 8L10 2L16 8L10 14L4 8Z" fill="#0078D4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Power Automate</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>클라우드 흐름 무인 제어</div>
            </div>
          </div>

          {/* AI Builder */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#8E54E9" stroke-width="2"/>
                <path d="M8 12L11 15L16 9" stroke="#FFA64D" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>AI Builder (GPT 프롬프트)</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>요약 TXT 기반 트래픽 자연어 분석</div>
            </div>
          </div>

          {/* Outlook */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" fill="#0078D4"/>
                <path d="M2 6L12 13L22 6" stroke="#FFFFFF" stroke-width="1.5"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Outlook (Office 365)</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>HTML 메일 및 파일 첨부 자동 발송</div>
            </div>
          </div>

          {/* IPNMS / MRTG */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="14" rx="2" stroke="#138A72" stroke-width="2"/>
                <polyline points="6,12 9,8 13,13 18,7" stroke="#3DD8B8" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>IPNMS / MRTG</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>사내망 트래픽 성능 및 월간 그래프</div>
            </div>
          </div>

          {/* Excel / XLSX */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="#107C41"/>
                <path d="M8 8L16 16M16 8L8 16" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Microsoft Excel</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>고객 보고용 기관별 엑셀 시트</div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. 주요 트러블슈팅 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#F28C28' }}>■</span> 주요 트러블슈팅 (문제 → 원인 → 해결)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
          {/* 1. 단위 파싱 오류 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F87171', marginBottom: '0.5rem' }}>1. 단위 파싱 오류</div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              <div><strong>문제:</strong> '322'를 Mbps로 오인해 100만 배 과대계산</div>
              <div style={{ color: '#6EE7B7', marginTop: '0.25rem' }}><strong>해결:</strong> 단위 접미사(bps·k·M·G) 기반 변환으로 322bps(0.000322Mbps) 정확 처리</div>
            </div>
          </div>

          {/* 2. DRM 엑셀 읽기 실패 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F87171', marginBottom: '0.5rem' }}>2. DRM 엑셀 읽기 실패</div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              <div><strong>문제:</strong> 문서보안으로 파이썬이 원본을 못 읽음</div>
              <div style={{ color: '#6EE7B7', marginTop: '0.25rem' }}><strong>해결:</strong> 회선 목록 코드 내장 방식으로 전환</div>
            </div>
          </div>

          {/* 3. 월별 폴더 파일 매칭 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F87171', marginBottom: '0.5rem' }}>3. 월별 폴더 파일 매칭</div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              <div><strong>문제:</strong> 폴더가 매월 바뀜</div>
              <div style={{ color: '#6EE7B7', marginTop: '0.25rem' }}><strong>해결:</strong> 전월 연/월 계산식으로 경로 자동 조립</div>
            </div>
          </div>

          {/* 4. Power Automate 'Invalid fileId' */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F87171', marginBottom: '0.5rem' }}>4. Power Automate 'Invalid fileId'</div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              <div><strong>문제:</strong> ID 방식 액션에 경로 입력하여 에러</div>
              <div style={{ color: '#6EE7B7', marginTop: '0.25rem' }}><strong>해결:</strong> '경로를 사용하여 파일 콘텐츠 가져오기'로 교체</div>
            </div>
          </div>

          {/* 5. AI 입력 식 오류 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F87171', marginBottom: '0.5rem' }}>5. AI 입력 식 오류</div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              <div><strong>문제:</strong> TXT가 문자열로 반환되어 $content 참조 실패</div>
              <div style={{ color: '#6EE7B7', marginTop: '0.25rem' }}><strong>해결:</strong> string(body(...))로 명시적 수정</div>
            </div>
          </div>

          {/* 6. 첨부파일명에 경로 포함 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F87171', marginBottom: '0.5rem' }}>6. 첨부파일명에 경로 포함</div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              <div><strong>문제:</strong> 첨부파일명에 디렉터리 경로 포함 노출</div>
              <div style={{ color: '#6EE7B7', marginTop: '0.25rem' }}><strong>해결:</strong> 이름 식에서 폴더 경로 제거</div>
            </div>
          </div>

          {/* 7. 그래프 겹침 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.75)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', gridColumn: 'span 2' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F87171', marginBottom: '0.5rem' }}>7. 그래프 겹침 현상</div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.5' }}>
              <div><strong>문제:</strong> 보고서 렌더링 시 그래프 이미지와 수치 블록이 중첩</div>
              <div style={{ color: '#6EE7B7', marginTop: '0.25rem' }}><strong>해결:</strong> 이미지 크기 및 시트/슬라이드 레이아웃 최적화</div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Before / After 비교 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#138A72' }}>■</span> Before / After 비교
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {/* Before */}
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1.75rem', borderRadius: '14px' }}>
            <div style={{ color: '#F87171', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
              AS-IS (수작업)
            </div>
            <ul style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.8', listStyle: 'none', paddingLeft: 0 }}>
              <li>❌ <strong>수작업 100%:</strong> 단계별 사람 손이 필요</li>
              <li>❌ <strong>월 약 10시간 소요:</strong> 반복적 데이터 취합 부담</li>
              <li>❌ <strong>오류 위험:</strong> 수치 입력 오기 가능성 존재</li>
              <li>❌ <strong>일정 편차:</strong> 담당자 업무에 따른 발송 시점 변동</li>
            </ul>
          </div>

          {/* After */}
          <div style={{ backgroundColor: 'rgba(19, 138, 114, 0.12)', border: '1px solid rgba(19, 138, 114, 0.4)', padding: '1.75rem', borderRadius: '14px' }}>
            <div style={{ color: '#3DD8B8', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
              TO-BE (자동화)
            </div>
            <ul style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.8', listStyle: 'none', paddingLeft: 0 }}>
              <li>✅ <strong>수작업 0단계:</strong> 실행~메일 발송 전 과정 무인화</li>
              <li>✅ <strong>수 초 단위 생성:</strong> 12개 파일 고속 렌더링</li>
              <li>✅ <strong>100% 무결점:</strong> 단위 통일 및 AI 자연어 분석</li>
              <li>✅ <strong>정시 자동 발송:</strong> 매월 2일 07:10 정해진 시각 발송</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 10. 성과 및 향후 계획 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#F28C28' }}>■</span> 성과 및 향후 계획
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {/* 정량 성과 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.7)', padding: '1.75rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFA64D', marginBottom: '1rem' }}>
              정량 성과 (월 기준)
            </h4>
            <ul style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
              <li><strong>325회선</strong> 자동 조회</li>
              <li><strong>12개 파일</strong> 자동 생성</li>
              <li><strong>3개 보고서</strong>(고객사 2곳) 자동 발송</li>
              <li><strong>수작업 단계 0</strong> 달성</li>
              <li style={{ color: '#FFA64D', fontWeight: 700 }}><strong>연간 약 119시간</strong> 업무 절감 (월 약 10시간 기준)</li>
            </ul>
          </div>

          {/* 향후 계획 */}
          <div style={{ backgroundColor: 'rgba(19, 30, 48, 0.7)', padding: '1.75rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#3DD8B8', marginBottom: '1rem' }}>
              향후 계획 (Next Steps)
            </h4>
            <ul style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
              <li><strong>대상 고객/회선 확대:</strong> 신규 고객사 및 관리 회선 지속 편입</li>
              <li><strong>이상 징후 자동 알림:</strong> 고사용률(80%+) 및 수집불가 회선 조기 경보</li>
              <li><strong>추이 기반 예측 분석 고도화:</strong> 트래픽 패턴 기반 증설 필요성 선제 진단</li>
              <li><strong>대시보드 실시간 모니터링 연계:</strong> 웹 관제 화면과의 직접 연계</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 11. Footer */}
      <div style={{
        textAlign: 'center',
        padding: '2.5rem 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#94A3B8',
        fontSize: '0.88rem'
      }}>
        <div style={{ fontWeight: 700, color: '#CBD5E1', marginBottom: '0.3rem' }}>
          LG유플러스 서부기술지원팀 · 월간 자동보고서 자동화 프로젝트
        </div>
        <div>
          "반복은 줄이고, 가치는 높입니다"
        </div>
      </div>

    </div>
  );
};
