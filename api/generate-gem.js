export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { template, userApp } = req.body;

  // API key is stored securely in Vercel env vars (without VITE_ prefix)
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not configured');
    return res.status(500).json({ error: 'API key not configured. Please contact support.' });
  }

  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

  const prompt = `You are an expert at creating custom Gemini Gems for founders.

TEMPLATE GEM:

${template}

USER'S APP:

${userApp}

TASK:

Customize the template above specifically for the user's app. Keep the same structure (Persona, Task, Context, Format) but make every example and detail relevant to their specific app and tech stack.

Be specific. Use their actual app details. Make it immediately useful.

Return ONLY the customized Gem instructions, ready to paste into Gemini.`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error Response:', errorText);
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || 'API returned an error');
    }

    if (data.candidates && data.candidates[0]) {
      return res.status(200).json({
        gem: data.candidates[0].content.parts[0].text
      });
    } else {
      throw new Error('No response from Gemini');
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: 'Failed to generate custom gem. Please try again.' });
  }
}
