import { useState } from 'react';
import GemCustomizer from './components/GemCustomizer';
import GemCard from './components/GemCard';
import { gems } from './data/gems';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="vibe-badge">
            <span className="vibe-coding">VIBE CODING</span>
            <span className="arrow">→</span>
            <span className="vibe-scaling">VIBE SCALING</span>
          </div>
          
          <h1 className="hero-title">LaunchPack</h1>
          
          <p className="hero-tagline">
            From Vibe Coding to Vibe Scaling
          </p>
          
          <p className="hero-subtitle">
            10 Launch Gems for Google's AI Stack
          </p>
          
          <div className="hero-ctas">
            <a href="#try-it" className="cta-primary">
              Try It Live →
            </a>
            <a href="https://github.com/yourusername/launchpack" className="cta-secondary" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          
          <div className="google-badges">
            <span className="badge">🏗️ Built with AI Studio</span>
            <span className="badge">⚡ Powered by Gemini 2.5</span>
            <span className="badge">☁️ Deployed on Cloud Run</span>
            <span className="badge">🎯 Optimized for Pomelli</span>
          </div>
        </div>
      </header>

      {/* The Stack Flow */}
      <section className="stack-section">
        <h2 className="section-title">Connecting Google's AI Stack</h2>
        
        <div className="stack-flow">
          <div className="flow-stage">
            <div className="stage-icon">🏗️</div>
            <div className="stage-label">AI STUDIO</div>
            <div className="stage-desc">Build</div>
          </div>
          
          <div className="connector">
            <svg className="arrow-svg" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 L90 10 L85 5 M90 10 L85 15" stroke="#ff6b35" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <div className="flow-stage">
            <div className="stage-icon">☁️</div>
            <div className="stage-label">CLOUD RUN</div>
            <div className="stage-desc">Deploy</div>
          </div>
          
          <div className="connector active">
            <svg className="arrow-svg glow" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 L90 10 L85 5 M90 10 L85 15" stroke="#ff6b35" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          
          <div className="flow-stage highlight">
            <div className="stage-icon">🚀</div>
            <div className="stage-label">LAUNCHPACK</div>
            <div className="stage-desc">Market</div>
          </div>
          
          <div className="connector">
            <svg className="arrow-svg" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 L90 10 L85 5 M90 10 L85 15" stroke="#ff6b35" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <div className="flow-stage">
            <div className="stage-icon">📊</div>
            <div className="stage-label">POMELLI</div>
            <div className="stage-desc">Scale</div>
          </div>
          
          <div className="connector">
            <svg className="arrow-svg" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 L90 10 L85 5 M90 10 L85 15" stroke="#34a853" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <div className="flow-stage">
            <div className="stage-icon">💰</div>
            <div className="stage-label">CUSTOMERS</div>
            <div className="stage-desc">Grow</div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="comparison-section">
        <h2 className="section-title">Why Vibe Scaling?</h2>
        
        <div className="comparison-grid">
          <div className="comparison-card without">
            <h3>❌ Without LaunchPack</h3>
            <ul>
              <li>Vibe code your app: <strong>2 hours</strong></li>
              <li>Write marketing copy: <strong>2 weeks</strong></li>
              <li>Plan launch strategy: <strong>1 week</strong></li>
              <li>Create content calendar: <strong>1 week</strong></li>
              <li>Set up analytics: <strong>3 days</strong></li>
            </ul>
            <div className="total">Total: <strong>6+ weeks</strong></div>
          </div>
          
          <div className="comparison-card with">
            <h3>✅ With LaunchPack</h3>
            <ul>
              <li>Vibe code your app: <strong>2 hours</strong></li>
              <li>Vibe scale to market: <strong>2 hours</strong></li>
              <li>All 10 Gems ready: <strong>instant</strong></li>
              <li>Pomelli-optimized: <strong>built-in</strong></li>
              <li>Launch strategy: <strong>copy/paste</strong></li>
            </ul>
            <div className="total success">Total: <strong>4 hours</strong></div>
          </div>
        </div>
      </section>

      {/* Interactive Customizer */}
      <section id="try-it" className="customizer-section">
        <GemCustomizer />
      </section>

      {/* All 10 Gems */}
      <section className="gems-section">
        <h2 className="section-title">The 10 Launch Gems</h2>
        <p className="section-subtitle">
          Expert AI assistants for every stage of your launch journey
        </p>

        <div className="gems-grid">
          {gems.map((gem) => (
            <GemCard key={gem.id} gem={gem} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">Inspired by Google Leaders</h2>
        
        <div className="testimonials-grid">
          <blockquote className="testimonial">
            <p>"Focus on what happens after the app is built. That's where the real opportunity is."</p>
            <cite>— Paige Bailey, Google DeepMind</cite>
          </blockquote>
          
          <blockquote className="testimonial">
            <p>"Gemini Gems are powerful persistent prompts that act as custom AI assistants."</p>
            <cite>— Yuval Passov, Head of Google for Startups</cite>
          </blockquote>
        </div>
        
        <p className="testimonials-note">
          LaunchPack combines both insights: Post-build tools powered by Gemini Gems
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-branding">
            <h3>LaunchPack</h3>
            <p>From Vibe Coding to Vibe Scaling</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/yourusername/launchpack" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#try-it">Try It Live</a>
            <a href="https://labs.google.com/pomelli" target="_blank" rel="noopener noreferrer">Pomelli</a>
          </div>
          
          <div className="footer-meta">
            <p>Built at Google Vibe Coding Hackathon • November 2025</p>
            <p>Open Source • MIT License</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
