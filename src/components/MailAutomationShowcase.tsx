import React, { useState } from 'react';

export const MailAutomationShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const openStandalonePage = () => {
    window.open('/nw_work_mail_automation.html', '_blank');
  };

  const sampleOrgs = [
    { no: '01', name: '중소벤처기업진흥공단', type: '공공기관', status: '정상 매칭', note: '전국 지사망 관리' },
    { no: '02', name: '한국농어촌공사', type: '공기업', status: '정상 매칭', note: '본사 및 지사망' },
    { no: '03', name: '한국철도공사', type: '공기업', status: '정상 매칭', note: '주요 역무 인프라' },
    { no: '04', name: '신용보증기금', type: '준정부기관', status: '정상 매칭', note: '영업점 회선망' },
    { no: '05', name: '소상공인시장진흥공단', type: '공공기관', status: '정상 매칭', note: '센터 및 본부' },
    { no: '06', name: '한국환경공단', type: '준정부기관', status: '정상 매칭', note: '지역본부 네트워크' },
    { no: '07', name: '한국수자원공사', type: '공기업', status: '정상 매칭', note: '수계별 사업단' },
    { no: '08', name: '도로교통공단', type: '준정부기관', status: '정상 매칭', note: '지부 및 방송국' },
  ];

  const filteredOrgs = sampleOrgs.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        backgroundColor: 'rgba(31, 58, 99, 0.45)',
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
            AX 과제 완료 · 운영 중
          </span>
          <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
            LG유플러스 서부기술지원팀 · Power Automate & AI Builder
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
        padding: '3.5rem 1.5rem 2.5rem',
        background: 'radial-gradient(circle at 50% 15%, rgba(31, 58, 99, 0.8) 0%, rgba(11, 20, 38, 0.95) 75%)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        marginBottom: '2.5rem'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          backgroundColor: 'rgba(106, 63, 160, 0.2)',
          color: '#D8B4FE',
          borderRadius: '999px',
          fontSize: '0.82rem',
          fontWeight: 700,
          marginBottom: '1rem',
          border: '1px solid rgba(106, 63, 160, 0.4)'
        }}>
          ⚡ AI-Powered Network Work Coordination Automation
        </div>

        <h1 style={{ 
          fontSize: '2.3rem', 
          fontWeight: 900, 
          letterSpacing: '-0.03em', 
          marginBottom: '0.75rem',
          lineHeight: '1.25'
        }}>
          NW 작업협의 <span style={{ color: '#F28C28' }}>고객 메일 자동화 시스템</span>
        </h1>

        <p style={{ 
          fontSize: '1.15rem', 
          fontWeight: 600,
          color: '#FFFFFF', 
          maxWidth: '820px', 
          margin: '0 auto 1rem',
          lineHeight: '1.5'
        }}>
          "공문 한 장이 들어오면, AI가 읽고 담당자를 찾고 고객에게 전달합니다."
        </p>

        <p style={{ 
          fontSize: '0.95rem', 
          color: '#CBD5E1', 
          maxWidth: '820px', 
          margin: '0 auto 1.5rem',
          fontWeight: 300,
          lineHeight: '1.6'
        }}>
          공용메일로 접수되는 네트워크 작업협의 공문을 OCR과 AI가 자동으로 분석하고, 기관별 고객·영업·기술지원 담당자를 자동 매칭하여 고객 협의 메일을 생성·발송한 뒤, 처리 결과까지 자동으로 기록하고 모니터링하는 Microsoft 365 기반 업무 자동화 시스템.
        </p>

        {/* Emphasis Banner */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(242, 140, 40, 0.15)',
          color: '#FFA64D',
          padding: '0.5rem 1.5rem',
          borderRadius: '10px',
          fontSize: '0.95rem',
          fontWeight: 700,
          marginBottom: '2rem',
          border: '1px solid rgba(242, 140, 40, 0.3)'
        }}>
          ✉ 1개의 "+협의" 메일이 전체 Workflow를 시작합니다.
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
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFA64D', lineHeight: 1 }}>200+</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.5rem' }}>MONTHLY DOCUMENTS</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>월 평균 약 200건 무인 처리</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.85)',
            padding: '1.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderTop: '3px solid #6A3FA0'
          }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#D8B4FE', lineHeight: 1 }}>30 SEC</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.5rem' }}>AUTOMATED PROCESSING</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>5~10분 → 30초 내 발송</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.85)',
            padding: '1.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderTop: '3px solid #138A72'
          }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#5EEAD4', lineHeight: 1 }}>23.5 H</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.5rem' }}>MONTHLY TIME SAVED</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>월 25h → 모니터링 1.5h</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(19, 30, 48, 0.85)',
            padding: '1.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderTop: '3px solid #F28C28'
          }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#F28C28', lineHeight: 1 }}>94%</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.5rem' }}>TIME REDUCTION</div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>24시간 야간·휴일 자동 가동</div>
          </div>
        </div>
      </div>

      {/* 2. Before / After */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#F28C28' }}>■</span> Before → After 프로세스 혁신
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {/* AS-IS */}
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            padding: '1.75rem',
            borderRadius: '14px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: '#F87171', fontWeight: 800, fontSize: '1.1rem' }}>AS-IS (기존 수작업)</span>
              <span style={{ fontSize: '0.75rem', color: '#F87171', padding: '2px 8px', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.2)' }}>수작업 13단계</span>
            </div>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.78rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '1rem' }}>
              공문 수신 → PDF 열기 → 내용 확인 → 기관명 확인 → 고객/영업/기술지원 담당자 검색 → 메일 제목/본문 작성 → 수신/참조 입력 → 공문 첨부 → 발송 → 이력 관리
            </div>
            <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.7', paddingLeft: '1.2rem' }}>
              <li>반복적인 문서 열람 및 확인 부담</li>
              <li>주소록 수기 검색 및 수신/참조자 입력 오류 위험</li>
              <li>휴가·외근·야간·휴일 상황 시 즉각 대응 한계</li>
              <li>업무 담당자의 경험과 기억에 의존</li>
            </ul>
          </div>

          {/* TO-BE */}
          <div style={{
            backgroundColor: 'rgba(19, 138, 114, 0.12)',
            border: '1px solid rgba(19, 138, 114, 0.4)',
            padding: '1.75rem',
            borderRadius: '14px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: '#3DD8B8', fontWeight: 800, fontSize: '1.1rem' }}>TO-BE (AX 무인 자동화)</span>
              <span style={{ fontSize: '0.75rem', color: '#3DD8B8', padding: '2px 8px', borderRadius: '4px', background: 'rgba(19, 138, 114, 0.25)' }}>사람 개입 0단계</span>
            </div>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.78rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '1rem' }}>
              +협의 메일 → 첨부 검증 → SharePoint 저장 → OCR → AI Builder 분석 → 데이터 구조화 → 기관 식별 → Excel 매칭 → TO/CC 구성 → 안전 검증 → 메일 생성/발송 → 로그/대시보드
            </div>
            <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.7', paddingLeft: '1.2rem' }}>
              <li>비정형 PDF 문서를 OCR과 AI Builder가 자동 판독</li>
              <li>Master DB 매칭을 통한 고객/영업/기술 담당자 자동 라우팅</li>
              <li>15단계 오발송 방지 Fail-Safe Gate 통과 시에만 발송</li>
              <li>22:00 정기 운영 대시보드 리포트로 가시성 100% 확보</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. 12단계 End-to-End Architecture Flow */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#6A3FA0' }}>■</span> 전체 자동화 Architecture (12단계)
        </h3>

        <div style={{
          backgroundColor: '#0F1E36',
          borderRadius: '16px',
          padding: '2rem 1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '0.75rem'
          }}>
            {[
              { step: '01', title: 'INPUT', desc: 'Outlook 공용메일 "+협의" 접수' },
              { step: '02', title: 'VALIDATE', desc: '첨부파일 및 단일 PDF 검증' },
              { step: '03', title: 'STORE', desc: 'SharePoint 원본 안전 저장' },
              { step: '04', title: 'AI READ', desc: 'OCR 문서 텍스트 추출' },
              { step: '05', title: 'AI UNDERSTAND', desc: 'AI Builder Prompt 분석' },
              { step: '06', title: 'STRUCTURE', desc: '업무 변수 및 JSON 구조화' },
              { step: '07', title: 'MATCH', desc: 'Excel 담당자 Master DB 매칭' },
              { step: '08', title: 'ROUTING', desc: 'TO / CC 자동 분류 구성' },
              { step: '09', title: 'SAFETY', desc: '오발송 방지 15단계 검증' },
              { step: '10', title: 'SEND', desc: 'Outlook 고객 협의 메일 발송' },
              { step: '11', title: 'LOG', desc: 'Excel 처리 결과 로그 저장' },
              { step: '12', title: 'MONITORING', desc: '22시 Office Script 운영 보고' }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1rem 0.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '130px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FFA64D' }}>{item.step}</span>
                  <span style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 700 }}>{item.title}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.4', marginTop: '0.5rem' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: '#94A3B8' }}>
            <span style={{ color: '#F28C28', fontWeight: 700 }}>READ → UNDERSTAND → MATCH → VERIFY → SEND → MONITOR</span>
          </div>
        </div>
      </div>

      {/* 4. Safety Gate & 15대 검증 규칙 */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#D9534F' }}>■</span> Safety Gate &amp; 오발송 방지 체계
        </h3>

        <div style={{
          backgroundColor: 'rgba(217, 83, 79, 0.08)',
          border: '1px solid rgba(217, 83, 79, 0.3)',
          borderRadius: '16px',
          padding: '1.75rem',
          marginBottom: '1.25rem'
        }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FCA5A5', marginBottom: '0.5rem' }}>
            "AI가 판단하더라도 안전 검증을 통과하지 못하면 메일은 발송되지 않는다."
          </h4>
          <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '1rem' }}>
            자동화에서 가장 중요한 것은 빠른 발송이 아니라 안전한 발송입니다. 다음과 같은 15가지 예외 상황을 다층 차단합니다.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0.75rem',
            fontSize: '0.8rem',
            color: '#CBD5E1'
          }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.6rem 0.8rem', borderRadius: '6px' }}>
              • <strong>첨부 없음 / 비PDF:</strong> 자동 발송 금지 및 재요청 안내
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.6rem 0.8rem', borderRadius: '6px' }}>
              • <strong>PDF 2개 이상:</strong> 다수 파일 감지 시 1개씩 발송 안내
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.6rem 0.8rem', borderRadius: '6px' }}>
              • <strong>기관 식별 실패:</strong> 임의 추정 금지 및 발송 차단
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.6rem 0.8rem', borderRadius: '6px' }}>
              • <strong>담당자 매칭 실패:</strong> 잘못된 수신인 발송 방지
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.6rem 0.8rem', borderRadius: '6px' }}>
              • <strong>수신인 15명 초과:</strong> 대량 오발송 위험 감지 시 즉시 BLOCK
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.6rem 0.8rem', borderRadius: '6px' }}>
              • <strong>중복 주소 정리:</strong> TO/CC 내 동일 이메일 자동 정제
            </div>
          </div>
        </div>
      </div>

      {/* 5. 22시 운영 대시보드 & Self-Service Bot */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {/* 대시보드 */}
        <div style={{
          backgroundColor: 'rgba(19, 30, 48, 0.7)',
          padding: '1.75rem',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38BDF8', marginBottom: '0.75rem' }}>
            📊 22:00 KST 운영 대시보드 리포팅
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '1rem' }}>
            매일 22시 Office Script가 Excel 로그를 자동 집계하여 당일 처리 현황, 어제 대비 추이, 7일 트렌드, 기관별 순위 리포트를 팀원 앞 이메일로 자동 발행합니다.
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.8rem', color: '#94A3B8' }}>
            • 일간 리포트: 매일 22시 자동 발송<br />
            • 주간 리포트: 매주 일요일 주간 누적 통계 발송
          </div>
        </div>

        {/* Self-Service Bot */}
        <div style={{
          backgroundColor: 'rgba(19, 30, 48, 0.7)',
          padding: '1.75rem',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFA64D', marginBottom: '0.75rem' }}>
            🤖 메일 기반 Self-Service Bot 명령어
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '1rem' }}>
            별도 시스템 로그인 없이 메일 제목에 명령어만 입력하면 봇이 즉시 대응합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '6px' }}>
              <strong style={{ color: '#D8B4FE' }}>+협의:</strong> 자동화 파이프라인 가동
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '6px' }}>
              <strong style={{ color: '#D8B4FE' }}>+방법:</strong> 발송 가이드 회신
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '6px' }}>
              <strong style={{ color: '#D8B4FE' }}>+리스트:</strong> 기관 목록 HTML 회신
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '6px' }}>
              <strong style={{ color: '#D8B4FE' }}>몰라:</strong> 전체 도움말 회신
            </div>
          </div>
        </div>
      </div>

      {/* 6. 실시간 기관 검색 시뮬레이터 */}
      <div style={{
        backgroundColor: 'rgba(19, 30, 48, 0.7)',
        padding: '1.75rem',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '3rem'
      }}>
        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.75rem', color: '#5EEAD4' }}>
          🔍 실시간 기관 검색 Master (+리스트 연계)
        </h4>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="기관명을 입력해 검색해보세요 (예: 공단, 공사, 진흥원)..."
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: '#0B1426',
            color: '#FFFFFF',
            fontSize: '0.9rem',
            marginBottom: '1rem',
            outline: 'none'
          }}
        />

        <div style={{ maxHeight: '220px', overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8' }}>
                <th style={{ padding: '0.5rem' }}>No</th>
                <th style={{ padding: '0.5rem' }}>기관명</th>
                <th style={{ padding: '0.5rem' }}>유형</th>
                <th style={{ padding: '0.5rem' }}>상태</th>
                <th style={{ padding: '0.5rem' }}>비고</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrgs.map((org, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '0.5rem', color: '#94A3B8' }}>{org.no}</td>
                  <td style={{ padding: '0.5rem', fontWeight: 700, color: '#FFFFFF' }}>{org.name}</td>
                  <td style={{ padding: '0.5rem', color: '#CBD5E1' }}>{org.type}</td>
                  <td style={{ padding: '0.5rem', color: '#5EEAD4' }}>● {org.status}</td>
                  <td style={{ padding: '0.5rem', color: '#94A3B8' }}>{org.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 7. AX VALUE & Footer */}
      <div style={{
        textAlign: 'center',
        padding: '2.5rem 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#94A3B8',
        fontSize: '0.88rem'
      }}>
        <div style={{ fontWeight: 800, color: '#CBD5E1', fontSize: '1rem', marginBottom: '0.3rem' }}>
          LG유플러스 서부기술지원팀 · NW 작업협의 고객 메일 자동화 시스템
        </div>
        <div>
          Microsoft Power Automate · AI Builder · Microsoft 365 AX Automation Project · 2026
        </div>
        <div style={{ marginTop: '0.5rem', color: '#FFA64D', fontWeight: 600 }}>
          "반복 업무는 자동화하고, 사람은 고객 대응에 집중합니다."
        </div>
      </div>

    </div>
  );
};
