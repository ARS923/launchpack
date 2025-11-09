# Gemini API Setup

## Installation

```bash
pip install google-genai
```

## Usage

Make sure you have your Google API key set up. You can either:

1. Set it as an environment variable:
```bash
export GOOGLE_API_KEY="your-api-key-here"
```

2. Or pass it directly to the client:
```python
from google import genai

client = genai.Client(api_key="your-api-key-here")
```

## Test the API

Run the test script:
```bash
python test_gemini.py
```

## Integration Options

### Option 1: Backend API (Recommended)
Create a Node.js/Express or Python/Flask backend to handle Gemini API calls securely (keeps API keys on server).

### Option 2: Frontend Integration
Use `@google/generative-ai` npm package for direct frontend integration (requires exposing API key - less secure).

### Option 3: Serverless Functions
Use Vercel/Netlify serverless functions to proxy Gemini API calls.

