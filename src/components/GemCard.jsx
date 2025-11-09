import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GemCard({ gem }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(gem.fullInstructions);
      setCopied(true);
      
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#9333ea', '#a855f7', '#c084fc', '#d8b4fe']
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Website': return 'bg-purple-100 text-purple-800';
      case 'Launch': return 'bg-green-100 text-green-800';
      case 'Growth': return 'bg-blue-100 text-blue-800';
      case 'Deployment': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{gem.icon}</span>
            <h3 className="text-xl font-semibold text-gray-900">{gem.name}</h3>
          </div>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(gem.category)}`}>
            {gem.category}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{gem.description}</p>
      
      <div className="space-y-2">
        <button
          onClick={copyToClipboard}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
        >
          {copied ? (
            <>
              <Check className="h-5 w-5" />
              ✓ Copied!
            </>
          ) : (
            <>
              📋 Copy Gem
            </>
          )}
        </button>
        
        <button
          onClick={() => {
            const gemText = encodeURIComponent(gem.fullInstructions);
            window.open(`https://gemini.google.com/`, '_blank');
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
        >
          <ExternalLink className="h-5 w-5" />
          Try This Gem in Gemini →
        </button>
        
        <button
          onClick={toggleExpand}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-200 font-medium"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-5 w-5" />
              Hide Instructions
            </>
          ) : (
            <>
              <ChevronDown className="h-5 w-5" />
              Show Instructions
            </>
          )}
        </button>
      </div>
      
      {expanded && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono overflow-x-auto">
            {gem.fullInstructions}
          </pre>
        </div>
      )}
    </div>
  );
}

