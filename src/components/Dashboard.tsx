import React, { useEffect, useRef } from 'react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // High-fidelity Floating Particle Network (chronark.com style)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Fewer particles for a highly elegant, non-intrusive minimal feel
    const particleCount = Math.min(40, Math.floor((width * height) / 30000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isMouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseActive = true;
    };

    const handleMouseLeave = () => {
      isMouseActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Drift particles gently
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off walls
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.15)';
        ctx.fill();

        // Connect particles close to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08;
            ctx.strokeStyle = `rgba(15, 23, 42, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Pull lines toward mouse cursor for premium interactive feel
        if (isMouseActive) {
          const mDist = Math.hypot(p1.x - mouseX, p1.y - mouseY);
          if (mDist < 180) {
            const mAlpha = (1 - mDist / 180) * 0.12;
            ctx.strokeStyle = `rgba(59, 130, 246, ${mAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          pointerEvents: 'none'
        }}
      />

      {/* Floating Mini Menu (chronark.com Style) */}
      <nav 
        style={{ 
          display: 'flex', 
          gap: '2.5rem', 
          marginBottom: '3.5rem',
          fontSize: '0.95rem',
          fontFamily: 'var(--font-headings)',
          letterSpacing: '0.05em',
          fontWeight: 500,
          zIndex: 10
        }}
      >
        <button 
          onClick={() => setActiveTab('projects')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          PROJECTS
        </button>
        <button 
          onClick={() => setActiveTab('resources')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          RESOURCE HUB
        </button>
        <a 
          href="https://github.com/dalbitfox/Portfolio" 
          target="_blank" 
          rel="noreferrer"
          style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          GITHUB
        </a>
      </nav>

      {/* Hero Content */}
      <div style={{ maxWidth: '650px', zIndex: 10 }}>
        {/* Large Central Title */}
        <h1 
          style={{ 
            fontSize: '4.5rem', 
            fontWeight: 800, 
            fontFamily: 'var(--font-headings)', 
            letterSpacing: '-0.05em',
            lineHeight: '1.05',
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #0f172a, #475569)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            marginBottom: '2rem'
          }}
        >
          dalbitfox
        </h1>

        {/* Minimal Subtitle Description */}
        <p 
          style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            fontWeight: 300, 
            lineHeight: '1.75', 
            marginBottom: '2.5rem',
            fontFamily: 'var(--font-body)'
          }}
        >
          네트워크 자동화 어드민 플랫폼 **Netbox** 구축, 실시간 인터랙티브 **점심 사다리타기 게임**을 개발하는 엔지니어입니다. 팀 업무 협업 속도를 높이기 위한 **전용 자료실**을 설계하고 운영합니다.
        </p>

        {/* Secondary Navigation Indicators */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => setActiveTab('projects')}
            style={{ padding: '0.85rem 2rem', fontSize: '0.88rem' }}
          >
            프로젝트 피드백 모음 →
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => setActiveTab('resources')}
            style={{ padding: '0.85rem 2rem', fontSize: '0.88rem' }}
          >
            자료실 탐색
          </button>
        </div>
      </div>
    </div>
  );
};
