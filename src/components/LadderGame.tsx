import React, { useState } from 'react';

type GameType = 'roulette' | 'dart' | 'ladder';

interface LadderGameProps {
  gameType?: GameType;
}

export const LadderGame: React.FC<LadderGameProps> = ({ gameType = 'ladder' }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const gameInfo = {
    ladder: {
      name: '사다리 타기 (Ladder Game)',
      icon: '🪜',
      url: 'https://dalbitfox.github.io/food/ladder.html',
      description: '참여자들과 메뉴를 입력하고 사다리 선을 타며 당첨 결과를 확인하는 클래식 사다리타기 게임입니다.',
      tag: 'Ladder Game',
      height: '950px'
    },
    roulette: {
      name: '점심 룰렛 (Lunch Roulette)',
      icon: '🎡',
      url: 'https://dalbitfox.github.io/food',
      description: '다양한 음식 카테고리를 룰렛으로 돌려 빠르고 직관적으로 오늘 점심 메뉴를 무작위 선택합니다.',
      tag: 'Lunch Roulette',
      height: '950px'
    },
    dart: {
      name: '다트 게임 (Dart Game)',
      icon: '🎯',
      url: 'https://dalbitfox.github.io/food/dart.html',
      description: '회전하는 다트 과녁을 향해 다트를 던져 점심값 당첨자나 오늘의 점심 메뉴를 고르는 미니 게임입니다.',
      tag: 'Dart Game',
      height: '950px'
    }
  }[gameType];

  // Adjust loading state when gameType changes (React docs recommended pattern)
  const [prevGameType, setPrevGameType] = useState<GameType>(gameType);
  if (gameType !== prevGameType) {
    setPrevGameType(gameType);
    setLoading(true);
  }

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Title Header */}
      <div style={{ marginBottom: '2rem' }}>
        <span className="tag tag-orange" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>
          {gameInfo.tag}
        </span>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-headings)', letterSpacing: '-0.03em', color: '#ffffff' }}>
          {gameInfo.icon} {gameInfo.name}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 300, marginTop: '0.4rem' }}>
          {gameInfo.description}
        </p>
      </div>

      {/* Action Bar */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '1.5rem',
          backgroundColor: 'rgba(9, 9, 11, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '1rem 1.5rem',
          borderRadius: '10px',
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '0.82rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Interactive Web Play
          </span>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0.2rem 0 0 0', fontWeight: 300, lineHeight: '1.5' }}>
            브라우저 내에서 즉시 플레이가 가능하며, 화면이 좁거나 동작이 어색할 경우 새 창에서 단독으로 플레이할 수도 있습니다.
          </p>
        </div>
        <div>
          <button
            onClick={() => window.open(gameInfo.url, '_blank')}
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              backgroundColor: 'transparent',
              color: '#f97316',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              fontFamily: 'var(--font-headings)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(249, 115, 22, 0.08)';
              e.currentTarget.style.borderColor = '#f97316';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.3)';
            }}
          >
            새 창에서 열기 ↗
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: gameInfo.height,
          backgroundColor: '#141414',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          overflow: 'hidden'
        }}
      >
        {/* Loading Spinner */}
        {loading && (
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center', 
              backgroundColor: 'rgba(20, 20, 20, 0.95)',
              zIndex: 5,
              gap: '1rem'
            }}
          >
            <div 
              style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                border: '3px solid rgba(249, 115, 22, 0.1)', 
                borderTopColor: '#f97316', 
                animation: 'spin 1s linear infinite'
              }}
            />
            <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-headings)' }}>
              웹 애플리케이션을 불러오는 중입니다...
            </span>
          </div>
        )}

        {/* Embedded Iframe */}
        <iframe
          src={gameInfo.url}
          title={gameInfo.name}
          onLoad={() => setLoading(false)}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            backgroundColor: 'transparent'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Local Spin CSS */}
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};
