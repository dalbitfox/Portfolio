import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { ProjectsPage } from './components/ProjectsPage';
import { LadderGame } from './components/LadderGame';
import { NetboxShowcase } from './components/NetboxShowcase';
import { ResourceHub } from './components/ResourceHub';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard setActiveTab={setActiveTab} />;
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

  const isHome = activeTab === 'home';

  return (
    <div className={`app-container ${isHome ? 'dark-theme' : ''}`}>
      {/* chronark.com Dynamic Header (Dark on Home, Light on Inner Pages) */}
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
              <li className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('projects')}>Projects</button>
              </li>
              <li className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('resources')}>Resource Hub</button>
              </li>
              <li className={`nav-item ${activeTab === 'ladder' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('ladder')}>Ladder Game</button>
              </li>
              <li className={`nav-item ${activeTab === 'netbox' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('netbox')}>Netbox</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Dynamic Footer (Dark on Home, Light on Inner Pages) */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>© 2026 SeobuTech.</strong> Built with premium craftsmanship.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: isHome ? '#ffffff' : '#3b82f6' }}></span>
            <span>Vercel Deploy Auto-sync</span>
            <span>|</span>
            <a 
              href="https://github.com/dalbitfox/Portfolio" 
              target="_blank" 
              rel="noreferrer" 
              style={{ textDecoration: 'none', fontWeight: 600, color: isHome ? '#ffffff' : 'var(--text-secondary)' }}
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
