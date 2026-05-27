import React, { useEffect, useRef } from 'react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // High-fidelity Starry Night Canvas Particle System (chronark.com style)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Star representations
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      alpha: number;
      vx: number;
      vy: number;
      twinkleSpeed: number;
    }> = [];

    const starCount = Math.min(80, Math.floor((width * height) / 15000));

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.7 + 0.1,
        vx: (Math.random() - 0.5) * 0.05, // very slow drift
        vy: (Math.random() - 0.5) * 0.05,
        twinkleSpeed: Math.random() * 0.01 + 0.002,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Draw faint grid-like intersecting lines in deep background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)';
      ctx.lineWidth = 0.5;
      const gridSize = 100;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw starry particles
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Star drift
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle alpha calculation
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.85 || star.alpha < 0.1) {
          star.twinkleSpeed *= -1;
        }

        // Draw soft glow star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, star.alpha)})`;
        ctx.fill();

        // Ambient glow around larger stars
        if (star.size > 0.9) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.15})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      style={{ 
        position: 'relative', 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem 1rem',
        animation: 'fadeIn 0.8s ease-out'
      }}
    >
      {/* Starry Night Canvas Overlay */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />

      {/* Floating Mini Menu (chronark.com Style in White text) */}
      <nav 
        style={{ 
          display: 'flex', 
          gap: '2.5rem', 
          marginBottom: '3.5rem',
          fontSize: '0.9rem',
          fontFamily: 'var(--font-headings)',
          letterSpacing: '0.08em',
          fontWeight: 500,
          zIndex: 10
        }}
      >
        <button 
          onClick={() => setActiveTab('projects')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255, 255, 255, 0.45)', transition: 'var(--transition-smooth)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)'}
        >
          PROJECTS
        </button>
        <button 
          onClick={() => setActiveTab('resources')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255, 255, 255, 0.45)', transition: 'var(--transition-smooth)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)'}
        >
          RESOURCE HUB
        </button>
        <a 
          href="https://github.com/dalbitfox/Portfolio" 
          target="_blank" 
          rel="noreferrer"
          style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.45)', transition: 'var(--transition-smooth)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)'}
        >
          GITHUB
        </a>
      </nav>

      {/* Hero Content */}
      <div style={{ maxWidth: '650px', zIndex: 10 }}>
        {/* Large Central Title in Chronark Font Style */}
        <h1 
          style={{ 
            fontSize: '5rem', 
            fontWeight: 800, 
            fontFamily: 'var(--font-headings)', 
            letterSpacing: '-0.05em',
            lineHeight: '1',
            color: '#ffffff',
            textShadow: '0 0 40px rgba(255,255,255,0.08)',
            marginBottom: '2rem'
          }}
        >
          SeobuTech
        </h1>

        {/* Minimal Subtitle Description */}
        <p 
          style={{ 
            fontSize: '1.05rem', 
            color: 'rgba(255, 255, 255, 0.55)', 
            fontWeight: 300, 
            lineHeight: '1.8', 
            marginBottom: '2.5rem',
            fontFamily: 'var(--font-body)'
          }}
        >
          서부기술(SeobuTech)의 인프라 효율과 협업 속도를 끌어올리기 위한 자동화 포털입니다. 네트워크 유틸리티 통합 스위트인 **netbox**와 **점심 메뉴 사다리타기** 등의 생산성 도구를 설계합니다.
        </p>

        {/* Secondary Navigation Indicators */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="btn" 
            onClick={() => setActiveTab('projects')}
            style={{ padding: '0.85rem 2.25rem', fontSize: '0.88rem', backgroundColor: '#ffffff', color: '#000000' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.85)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
          >
            프로젝트 리스트 →
          </button>
          <button 
            className="btn" 
            onClick={() => setActiveTab('resources')}
            style={{ padding: '0.85rem 2.25rem', fontSize: '0.88rem', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
          >
            업무 자료실
          </button>
        </div>
      </div>
    </div>
  );
};
