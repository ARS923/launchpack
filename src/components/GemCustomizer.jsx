import { useState } from 'react';
import { generateCustomGem } from '../utils/gemini';
import './GemCustomizer.css';

const GEM_TEMPLATES = {
  'landing-page': {
    name: 'Landing Page Copywriter',
    template: `**Persona:**
You are a conversion copywriter specializing in AI-powered products.

**Task:**
Create landing page copy optimized for Google Pomelli analysis.

**Context:**
The user built an app in Google AI Studio and deployed it to Cloud Run. They need website copy that establishes clear brand voice and converts visitors.

**Format:**
Provide:
- Hero section (headline, subheadline, CTA)
- Features (3-5 key benefits)
- How it works (3-4 steps)
- Social proof section
- Brand voice guide
- Color palette suggestions`
  },
  'product-hunt': {
    name: 'Product Hunt Launch Strategist',
    template: `**Persona:**
You are a Product Hunt launch expert with 50+ successful launches.

**Task:**
Create complete Product Hunt launch strategy and copy.

**Context:**
The user is launching their AI Studio app on Product Hunt. They need tagline, description, first comment, and strategy.

**Format:**
Provide:
- Tagline (60 chars, mentions Google tech)
- Description (260 chars)
- Maker's first comment
- Launch day timeline
- Gallery image descriptions`
  },
  'pricing': {
    name: 'Pricing Strategy Designer',
    template: `**Persona:**
You are a SaaS pricing strategist specializing in AI products.

**Task:**
Design complete pricing strategy with tiers, psychology, and copy.

**Context:**
The user has an AI Studio app on Cloud Run using Gemini API. They need pricing that covers costs plus margin while accelerating growth.

**Format:**
Provide:
- 3-4 pricing tiers (Free, Pro, Business, Enterprise)
- Price points with reasoning
- Feature allocation per tier
- Pricing page copy
- Psychology strategies`
  }
};

export default function GemCustomizer() {
  const [selectedGem, setSelectedGem] = useState('landing-page');
  const [appDescription, setAppDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [customizedGem, setCustomizedGem] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!appDescription.trim()) {
      setError('Please describe your app first');
      return;
    }

    setLoading(true);
    setError('');
    setCustomizedGem('');

    try {
      const template = GEM_TEMPLATES[selectedGem];
      const result = await generateCustomGem(template.template, appDescription);
      setCustomizedGem(result);
    } catch (err) {
      setError('Failed to generate. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(customizedGem);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="gem-customizer">
      <div className="customizer-header">
        <h2>Try LaunchPack Live</h2>
        <p>Generate a custom Launch Gem for your app in 30 seconds</p>
      </div>

      <div className="customizer-form">
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="gem-select">Choose a Gem Template</label>
            <select
              id="gem-select"
              value={selectedGem}
              onChange={(e) => setSelectedGem(e.target.value)}
              className="gem-select"
            >
              {Object.entries(GEM_TEMPLATES).map(([key, { name }]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="app-desc">Describe Your App</label>
            <textarea
              id="app-desc"
              value={appDescription}
              onChange={(e) => setAppDescription(e.target.value)}
              placeholder="Example: A recipe sharing platform built with Next.js and Supabase. Users can create, share, and rate recipes. Uses Gemini for AI-powered recipe recommendations."
              rows={4}
              className="app-input"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !appDescription.trim()}
            className="generate-btn"
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <span>Generate Custom Gem →</span>
              </>
            )}
          </button>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </div>
      </div>

      {customizedGem && (
        <div className="customizer-output">
          <div className="output-header">
            <h3>Your Customized Gem</h3>
            <button
              onClick={handleCopy}
              className="copy-output-btn"
            >
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
          </div>
          
          <pre className="gem-output">
            {customizedGem}
          </pre>

          <div className="next-steps">
            <div className="next-steps-header">Next Steps</div>
            <ol>
              <li>Copy this Gem ☝️</li>
              <li>Go to <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">gemini.google.com</a></li>
              <li>Click "Gems" → "Create new Gem"</li>
              <li>Paste these instructions</li>
              <li>Name it and use it! 🚀</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
