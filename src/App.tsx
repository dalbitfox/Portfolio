import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LadderGame } from './components/LadderGame';
import { NetboxShowcase } from './components/NetboxShowcase';
import { ResourceHub } from './components/ResourceHub';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'ladder':
        return <LadderGame />;
      case 'netbox':
        return <NetboxShowcase />;
      case 'resources':
        return <ResourceHub />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      {/* Premium Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo-section" onClick={() => setActiveTab('home')}>
            <div className="logo-icon">P</div>
            <span className="logo-text">Portfolio Portal</span>
            <span className="logo-tag">Workplace</span>
          </div>

          <nav>
            <ul className="nav-menu">
              <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('home')}>🏠 대시보드</button>
              </li>
              <li className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('resources')}>📁 업무 자료실</button>
              </li>
              <li className={`nav-item ${activeTab === 'ladder' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('ladder')}>🎯 점심 사다리타기</button>
              </li>
              <li className={`nav-item ${activeTab === 'netbox' ? 'active' : ''}`}>
                <button onClick={() => setActiveTab('netbox')}>🌐 Netbox 쇼케이스</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Premium Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>© 2026 Portfolio & Work Portal.</strong> Built for high-efficiency team collaboration.
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
            <span>Vercel 배포 연동 완료</span>
            <span>|</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}
            >
              GitHub 저장소
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
