import { useState, useEffect, useRef } from 'react';
import { Dashboard } from './components/Dashboard';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { LadderGame } from './components/LadderGame';
import { NetboxShowcase } from './components/NetboxShowcase';
import { HelperShowcase } from './components/HelperShowcase';
function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Global High-Fidelity Starry Night Canvas Particle System (Antigravity Physics Engine)
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
      baseVx: number;
      baseVy: number;
      twinkleSpeed: number;
    }> = [];

    const starCount = Math.min(100, Math.floor((width * height) / 11000));

    for (let i = 0; i < starCount; i++) {
      // Base float slightly tilted upwards to simulate anti-gravity vertical drift!
      const baseVx = (Math.random() - 0.5) * 0.05;
      const baseVy = Math.random() * -0.15 - 0.05; // Slow drift upwards
      
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.7 + 0.1,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        twinkleSpeed: Math.random() * 0.008 + 0.002,
      });
    }

    // Mouse interactive capture
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
      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, width, height);

      // Draw faint blueprint grid lines in background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)';
      ctx.lineWidth = 0.5;
      const gridSize = 80;
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

      // Draw and calculate physics for starry particles
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Apply friction/damping
        star.vx *= 0.97;
        star.vy *= 0.97;

        // Apply gentle return force to base drift
        star.vx += (star.baseVx - star.vx) * 0.03;
        star.vy += (star.baseVy - star.vy) * 0.03;

        // Apply Antigravity Interactive Gravitational Magnetic Forces
        if (isMouseActive) {
          const dx = mouseX - star.x;
          const dy = mouseY - star.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 220) {
            const pull = (220 - dist) / 220;
            
            // 1. Magnetic pull towards cursor
            star.vx += (dx / dist) * pull * 0.22;
            star.vy += (dy / dist) * pull * 0.22;

            // 2. Swirling orbit component (gently rotates around cursor)
            const perpX = -dy / dist;
            const perpY = dx / dist;
            star.vx += perpX * pull * 0.08;
            star.vy += perpY * pull * 0.08;

            // 3. Prevent clumping close to cursor (attract-repel bounce)
            if (dist < 40) {
              const push = (40 - dist) / 40;
              star.vx -= (dx / dist) * push * 0.65;
              star.vy -= (dy / dist) * push * 0.65;
            }
          }
        }

        // Apply position updates
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen bounds (including a 10px buffer)
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;
        if (star.y < -10) star.y = height + 10;
        if (star.y > height + 10) star.y = -10;

        // Twinkle calculation
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.85 || star.alpha < 0.15) {
          star.twinkleSpeed *= -1;
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.12, star.alpha)})`;
        ctx.fill();

        // Soft halo glow around larger stars
        if (star.size > 0.95) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.08})`;
          ctx.fill();
        }

        // Draw glowing connection lines (constellation network centered on active cursor)
        for (let j = i + 1; j < stars.length; j++) {
          const star2 = stars[j];
          const dist2 = Math.hypot(star.x - star2.x, star.y - star2.y);
          
          if (dist2 < 90) {
            if (isMouseActive) {
              const d1 = Math.hypot(mouseX - star.x, mouseY - star.y);
              const d2 = Math.hypot(mouseX - star2.x, mouseY - star2.y);
              
              if (d1 < 170 && d2 < 170) {
                const alpha = (1 - dist2 / 90) * 0.1 * Math.min(star.alpha, star2.alpha);
                ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`; // premium royal blue glow
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(star2.x, star2.y);
                ctx.stroke();
              }
            }
          }
        }

        // Draw faint glowing thread from mouse to nearest stars
        if (isMouseActive) {
          const mDist = Math.hypot(star.x - mouseX, star.y - mouseY);
          if (mDist < 150) {
            const mAlpha = (1 - mDist / 150) * 0.12 * star.alpha;
            ctx.strokeStyle = `rgba(255, 255, 255, ${mAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }

      // Draw ambient mouse gravity aura glow & aesthetic micro-dot
      if (isMouseActive) {
        ctx.beginPath();
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 180);
        mouseGlow.addColorStop(0, 'rgba(59, 130, 246, 0.08)'); // Premium soft blue glow
        mouseGlow.addColorStop(0.5, 'rgba(96, 165, 250, 0.02)');
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.arc(mouseX, mouseY, 180, 0, Math.PI * 2);
        ctx.fill();

        // Draw a delicate physical micro-center
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
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

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage setActiveTab={setActiveTab} />;
      case 'roulette':
        return <LadderGame gameType="roulette" />;
      case 'dart':
        return <LadderGame gameType="dart" />;
      case 'ladder':
        return <LadderGame gameType="ladder" />;
      case 'netbox':
        return <NetboxShowcase />;
      case 'helper':
        return <HelperShowcase />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      {/* Global starry night canvas in background */}
      <canvas ref={canvasRef} className="starry-canvas-global" />

      {/* chronark.com / magic-portfolio.com Dynamic Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo-section" onClick={() => setActiveTab('home')}>
            SeobuTech <span className="logo-dot"></span>
          </div>

          <nav>
            <ul className="nav-menu">
              <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('home')}>Home</button>
              </li>
              <li className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('about')}>ABOUT</button>
              </li>
              <li className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('projects')}>PROJECTS</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Render a navigation back breadcrumb if we are in a sub-tool */}
        {['roulette', 'dart', 'ladder', 'netbox', 'helper'].includes(activeTab) && (
          <div style={{ marginBottom: '2rem', animation: 'fadeIn 0.4s ease-out' }}>
            <button 
              onClick={() => setActiveTab('projects')}
              style={{
                background: 'none',
                border: 'none',
                color: '#3b82f6',
                fontFamily: 'var(--font-headings)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              ← PROJECTS 목록으로 돌아가기
            </button>
          </div>
        )}
        
        {renderContent()}
      </main>

      {/* Premium Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>© 2026 SeobuTech.</strong> Built for premium performance.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></span>
            <span>Vercel Deploy Auto-sync</span>
            <span>|</span>
            <a 
              href="https://github.com/dalbitfox/Portfolio" 
              target="_blank" 
              rel="noreferrer" 
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
