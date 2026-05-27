import React, { useState } from 'react';

interface Rung {
  col: number;      // Column index (0 to N-2) where it starts
  level: number;    // Height level index (0 to levels-1)
}

interface PathPoint {
  x: number;
  y: number;
}

export const LadderGame: React.FC = () => {
  // Game states
  const [participants, setParticipants] = useState<string[]>([
    '김민우 대리', '이서연 과장', '박준서 사원', '최지아 팀장', '정태양 대리'
  ]);
  const [menus, setMenus] = useState<string[]>([
    '김치찌개', '돈까스', '짜장면', '샌드위치', '초밥'
  ]);
  
  const [newName, setNewName] = useState('');
  const [newMenu, setNewMenu] = useState('');
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup');
  const [rungs, setRungs] = useState<Rung[]>([]);
  const [animationPoints, setAnimationPoints] = useState<PathPoint[]>([]);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [highlightedPaths, setHighlightedPaths] = useState<{ [col: number]: string }>({});

  const levels = 8; // Height subdivisions
  const svgWidth = 700;
  const svgHeight = 450;
  const paddingX = 60;
  const paddingY = 40;

  // Generate rungs based on the number of participants
  const generateLadder = () => {
    const n = participants.length;
    if (n < 2) return;

    const generatedRungs: Rung[] = [];
    // For each level, try to place horizontal bars randomly
    for (let level = 0; level < levels; level++) {
      for (let col = 0; col < n - 1; col++) {
        // Randomly place a rung, avoiding adjacent overlapping rungs at the same level
        const hasLeftRung = col > 0 && generatedRungs.some(r => r.level === level && r.col === col - 1);
        if (!hasLeftRung && Math.random() > 0.45) {
          generatedRungs.push({ col, level });
        }
      }
    }
    setRungs(generatedRungs);
    setAnimationPoints([]);
    setAnimatingIndex(null);
    setHighlightedPaths({});
    setGameState('playing');
  };

  // Trace the path from a starting column to the bottom menu index
  const tracePath = (startCol: number, currentRungs: Rung[]): number => {
    let currCol = startCol;
    for (let lvl = 0; lvl < levels; lvl++) {
      // Find if there's a rung going right from currCol at this level
      const rightRung = currentRungs.find(r => r.level === lvl && r.col === currCol);
      // Find if there's a rung going left to currCol at this level (meaning col starts at currCol - 1)
      const leftRung = currentRungs.find(r => r.level === lvl && r.col === currCol - 1);

      if (rightRung) {
        currCol++;
      } else if (leftRung) {
        currCol--;
      }
    }
    return currCol;
  };

  // Generate the full trace points for drawing the path SVG
  const getPathPoints = (startCol: number, currentRungs: Rung[]): PathPoint[] => {
    const colCount = participants.length;
    const spacing = (svgWidth - paddingX * 2) / (colCount - 1);
    const lvlHeight = (svgHeight - paddingY * 2) / levels;
    
    const points: PathPoint[] = [];
    let currCol = startCol;
    
    // Start point
    points.push({ x: paddingX + currCol * spacing, y: paddingY });

    for (let lvl = 0; lvl < levels; lvl++) {
      const yVal = paddingY + lvl * lvlHeight;
      
      const rightRung = currentRungs.find(r => r.level === lvl && r.col === currCol);
      const leftRung = currentRungs.find(r => r.level === lvl && r.col === currCol - 1);

      if (rightRung) {
        points.push({ x: paddingX + currCol * spacing, y: yVal + lvlHeight / 2 });
        currCol++;
        points.push({ x: paddingX + currCol * spacing, y: yVal + lvlHeight / 2 });
      } else if (leftRung) {
        points.push({ x: paddingX + currCol * spacing, y: yVal + lvlHeight / 2 });
        currCol--;
        points.push({ x: paddingX + currCol * spacing, y: yVal + lvlHeight / 2 });
      }
    }
    
    // End point
    points.push({ x: paddingX + currCol * spacing, y: svgHeight - paddingY });
    return points;
  };

  // Animate a single column's path
  const handleColumnClick = (colIdx: number) => {
    if (gameState !== 'playing') return;
    
    const path = getPathPoints(colIdx, rungs);
    setAnimationPoints(path);
    setAnimatingIndex(colIdx);
    
    // Choose a random color for the path
    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
    const selectedColor = colors[colIdx % colors.length];

    setTimeout(() => {
      setHighlightedPaths(prev => ({
        ...prev,
        [colIdx]: selectedColor
      }));
      setAnimatingIndex(null);
    }, 1500); // Animation duration
  };

  // Reset to setup state
  const handleReset = () => {
    setGameState('setup');
    setRungs([]);
    setAnimationPoints([]);
    setAnimatingIndex(null);
    setHighlightedPaths({});
  };

  // Add participant
  const addParticipant = () => {
    if (newName.trim() && participants.length < 8) {
      setParticipants([...participants, newName.trim()]);
      // Pair with a default menu or copy new menu if given
      const defaultMenus = ['짬뽕', '피자', '햄버거', '쌀국수', '마라탕', '굶기', '삼겹살'];
      const nextMenu = newMenu.trim() || defaultMenus[Math.floor(Math.random() * defaultMenus.length)];
      setMenus([...menus, nextMenu]);
      setNewName('');
      setNewMenu('');
    }
  };

  // Remove participant
  const removeParticipant = (index: number) => {
    if (participants.length > 2) {
      const newParticipants = [...participants];
      newParticipants.splice(index, 1);
      const newMenus = [...menus];
      newMenus.splice(index, 1);
      setParticipants(newParticipants);
      setMenus(newMenus);
    }
  };

  // Edit value in array
  const editParticipant = (index: number, val: string) => {
    const updated = [...participants];
    updated[index] = val;
    setParticipants(updated);
  };

  const editMenu = (index: number, val: string) => {
    const updated = [...menus];
    updated[index] = val;
    setMenus(updated);
  };

  const showAllResults = () => {
    // Reveal all paths instantly
    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f43f5e'];
    const updatedPaths: { [col: number]: string } = {};
    participants.forEach((_, idx) => {
      updatedPaths[idx] = colors[idx % colors.length];
    });
    setHighlightedPaths(updatedPaths);
    setGameState('result');
  };

  // Column calculations
  const colCount = participants.length;
  const spacing = (svgWidth - paddingX * 2) / (colCount - 1);
  const lvlHeight = (svgHeight - paddingY * 2) / levels;

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <span className="tag tag-warm" style={{ marginBottom: '0.5rem' }}>Interactive Web Tool</span>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-headings)' }}>🍽️ 점심 메뉴 선택 사다리타기</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            매일 점심 메뉴 고르기가 고민되시나요? 동료들과 이름을 적고 사다리를 타보세요!
          </p>
        </div>
        {gameState !== 'setup' && (
          <button className="btn btn-secondary" onClick={handleReset}>
            ⚙️ 사다리 설정 수정
          </button>
        )}
      </div>

      {gameState === 'setup' ? (
        /* Setup Phase Card */
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', fontFamily: 'var(--font-headings)' }}>
            1단계: 참여자와 점심 후보 입력 (최대 8명)
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                참여자 이름
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {participants.map((p, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', minWidth: '20px' }}>{idx + 1}</span>
                    <input
                      type="text"
                      className="form-control"
                      value={p}
                      onChange={(e) => editParticipant(idx, e.target.value)}
                      style={{
                        flex: 1,
                        padding: '0.5rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem'
                      }}
                    />
                    {participants.length > 2 && (
                      <button 
                        onClick={() => removeParticipant(idx)} 
                        style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.1rem', color: '#ef4444' }}
                        title="제거"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                점심 메뉴 결과 리스트
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {menus.map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="text"
                      className="form-control"
                      value={m}
                      onChange={(e) => editMenu(idx, e.target.value)}
                      style={{
                        flex: 1,
                        padding: '0.5rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Input Bar */}
          {participants.length < 8 && (
            <div style={{ display: 'flex', gap: '1rem', backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
              <input
                type="text"
                placeholder="새 참여자 이름"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                style={{ flex: 1, padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '6px' }}
                onKeyDown={(e) => e.key === 'Enter' && addParticipant()}
              />
              <input
                type="text"
                placeholder="결과 메뉴 (미입력시 무작위)"
                value={newMenu}
                onChange={(e) => setNewMenu(e.target.value)}
                style={{ flex: 1, padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '6px' }}
                onKeyDown={(e) => e.key === 'Enter' && addParticipant()}
              />
              <button className="btn btn-secondary" onClick={addParticipant} style={{ padding: '0.5rem 1rem' }}>
                ➕ 추가
              </button>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={generateLadder} style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              사다리 만들기 ⚡
            </button>
          </div>
        </div>
      ) : (
        /* Active Game SVG View */
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          
          <div className="card span-12" style={{ width: '100%', maxWidth: '850px', padding: '1.5rem', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', width: '100%', justifyContent: 'center' }}>
              {gameState === 'playing' ? (
                <>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    💡 <strong>이름을 클릭</strong>하면 해당 참여자의 사다리 경로가 부드럽게 그려집니다!
                  </span>
                  <button className="btn btn-primary" onClick={showAllResults} style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                    전체 결과 한눈에 보기
                  </button>
                </>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '1.1rem', color: '#10b981', fontWeight: 600 }}>🎉 사다리 타기 결과 완료! 아래 요약을 확인하세요.</span>
                </div>
              )}
            </div>

            {/* SVG Ladder Container */}
            <div style={{ position: 'relative', width: '100%', maxWidth: `${svgWidth}px`, height: `${svgHeight}px`, overflow: 'visible' }}>
              
              <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`} style={{ overflow: 'visible' }}>
                {/* 1. Base Vertical Lines */}
                {participants.map((_, idx) => {
                  const x = paddingX + idx * spacing;
                  const isHighlighted = highlightedPaths[idx] !== undefined;
                  return (
                    <line
                      key={`v-${idx}`}
                      x1={x}
                      y1={paddingY}
                      x2={x}
                      y2={svgHeight - paddingY}
                      stroke={isHighlighted ? highlightedPaths[idx] : 'var(--border-color)'}
                      strokeWidth={isHighlighted ? 4 : 2}
                      strokeDasharray={isHighlighted ? undefined : '4,4'}
                      opacity={isHighlighted ? 0.35 : 0.8}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                  );
                })}

                {/* 2. Base Horizontal Rungs */}
                {rungs.map((rung, idx) => {
                  const x1 = paddingX + rung.col * spacing;
                  const x2 = paddingX + (rung.col + 1) * spacing;
                  const y = paddingY + rung.level * lvlHeight + lvlHeight / 2;
                  
                  // Check if this rung is highlighted by any active paths
                  let rungColor = 'var(--border-color)';
                  let rungWidth = 2;
                  let isRungHighlighted = false;
                  
                  participants.forEach((_, startCol) => {
                    const pathColor = highlightedPaths[startCol];
                    if (pathColor) {
                      const path = getPathPoints(startCol, rungs);
                      for (let i = 0; i < path.length - 1; i++) {
                        const pt1 = path[i];
                        const pt2 = path[i+1];
                        // If path connects these two columns at this exact height
                        if (Math.abs(pt1.y - y) < 2 && Math.abs(pt2.y - y) < 2 && 
                            ((Math.abs(pt1.x - x1) < 2 && Math.abs(pt2.x - x2) < 2) || 
                             (Math.abs(pt1.x - x2) < 2 && Math.abs(pt2.x - x1) < 2))) {
                          rungColor = pathColor;
                          rungWidth = 4;
                          isRungHighlighted = true;
                        }
                      }
                    }
                  });

                  return (
                    <line
                      key={`h-${idx}`}
                      x1={x1}
                      y1={y}
                      x2={x2}
                      y2={y}
                      stroke={rungColor}
                      strokeWidth={rungWidth}
                      opacity={isRungHighlighted ? 1 : 0.7}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                  );
                })}

                {/* 3. Path Animation Drawer (Sleek trace crawler) */}
                {animatingIndex !== null && animationPoints.length > 0 && (
                  <path
                    d={`M ${animationPoints.map(p => `${p.x},${p.y}`).join(' L ')}`}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth={5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    style={{
                      animation: 'drawPath 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                    }}
                  />
                )}

                {/* 4. Permanently Highlighted Complete Paths */}
                {Object.keys(highlightedPaths).map((colStr) => {
                  const colIdx = parseInt(colStr);
                  const path = getPathPoints(colIdx, rungs);
                  return (
                    <path
                      key={`highlighted-path-${colIdx}`}
                      d={`M ${path.map(p => `${p.x},${p.y}`).join(' L ')}`}
                      fill="none"
                      stroke={highlightedPaths[colIdx]}
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={0.85}
                    />
                  );
                })}
              </svg>

              {/* 5. Names on top (Interactable Nodes) */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: `0 ${paddingX - 40}px` }}>
                {participants.map((name, idx) => (
                  <button
                    key={`name-${idx}`}
                    onClick={() => handleColumnClick(idx)}
                    disabled={animatingIndex !== null}
                    style={{
                      width: '80px',
                      background: highlightedPaths[idx] ? highlightedPaths[idx] : 'white',
                      color: highlightedPaths[idx] ? 'white' : 'var(--text-primary)',
                      border: `1px solid ${highlightedPaths[idx] ? 'transparent' : 'var(--border-color)'}`,
                      borderRadius: '8px',
                      padding: '0.4rem 0.2rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: animatingIndex !== null ? 'not-allowed' : 'pointer',
                      textAlign: 'center',
                      boxShadow: 'var(--shadow-sm)',
                      transform: animatingIndex === idx ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                      zIndex: 10
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>

              {/* 6. Menus on bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: `0 ${paddingX - 40}px` }}>
                {menus.map((menu, idx) => {
                  // Find if any column has traced to this menu index
                  let menuColor = 'white';
                  let textColor = 'var(--text-primary)';
                  let isLinked = false;
                  
                  participants.forEach((_, startCol) => {
                    const targetMenuIdx = tracePath(startCol, rungs);
                    if (targetMenuIdx === idx && highlightedPaths[startCol]) {
                      menuColor = highlightedPaths[startCol];
                      textColor = 'white';
                      isLinked = true;
                    }
                  });

                  return (
                    <div
                      key={`menu-${idx}`}
                      style={{
                        width: '80px',
                        background: menuColor,
                        color: textColor,
                        border: `1px solid ${isLinked ? 'transparent' : 'var(--border-color)'}`,
                        borderRadius: '8px',
                        padding: '0.4rem 0.2rem',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'all 0.3s ease',
                        zIndex: 10
                      }}
                    >
                      {menu}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Custom keyframes injection inside component */}
            <style>{`
              @keyframes drawPath {
                to {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </div>

          {/* Results Summary Box */}
          {Object.keys(highlightedPaths).length > 0 && (
            <div className="card" style={{ width: '100%', maxWidth: '850px', backgroundColor: 'var(--bg-secondary)', animation: 'fadeIn 0.4s ease-out' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-headings)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                📋 사다리 결과 매칭표
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {participants.map((name, idx) => {
                  const targetMenuIndex = tracePath(idx, rungs);
                  const isRevealed = highlightedPaths[idx] !== undefined;
                  return (
                    <div
                      key={`res-card-${idx}`}
                      style={{
                        padding: '0.85rem 1.25rem',
                        backgroundColor: isRevealed ? 'var(--accent-light)' : 'var(--bg-primary)',
                        border: `1px solid ${isRevealed ? '#bfdbfe' : 'var(--border-color)'}`,
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{name}</span>
                      <span style={{ fontWeight: 800, color: isRevealed ? 'var(--accent-primary)' : 'var(--text-tertiary)', fontSize: '0.95rem' }}>
                        {isRevealed ? menus[targetMenuIndex] : '❓ 확인 전'}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button className="btn btn-secondary" onClick={handleReset}>
                  ❌ 전체 초기화
                </button>
                <button className="btn btn-primary" onClick={generateLadder}>
                  🔄 사다리 재정렬
                </button>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
