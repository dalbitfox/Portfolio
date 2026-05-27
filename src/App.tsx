import { useState, useEffect, useRef } from 'react';
import { Dashboard } from './components/Dashboard';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { LadderGame } from './components/LadderGame';
import { NetboxShowcase } from './components/NetboxShowcase';
import { ResourceHub } from './components/ResourceHub';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Global High-Fidelity Starry Night Canvas Particle System
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

    const starCount = Math.min(100, Math.floor((width * height) / 12000));

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.3 + 0.3,
        alpha: Math.random() * 0.7 + 0.1,
        vx: (Math.random() - 0.5) * 0.06, // extremely slow cosmic drift
        vy: (Math.random() - 0.5) * 0.06,
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

      // Draw starry particles
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.85 || star.alpha < 0.15) {
          star.twinkleSpeed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, star.alpha)})`;
        ctx.fill();

        if (star.size > 0.95) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.1})`;
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

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage setActiveTab={setActiveTab} />;
      case 'resources':
        return <ResourceHub />;
      case 'ladder':
        return <LadderGame />;
      case 'netbox':
        return <NetboxShowcase />;
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
        {['resources', 'ladder', 'netbox'].includes(activeTab) && (
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
