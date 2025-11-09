const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent';

export async function generateCustomGem(gemTemplate, userAppDescription) {
  const prompt = `You are an expert at creating custom Gemini Gems for founders.

TEMPLATE GEM:

${gemTemplate}

USER'S APP:

${userAppDescription}

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
      console.error('API Error Response:', errorText);
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message || 'API returned an error');
    }
    
    if (data.candidates && data.candidates[0]) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('No response from Gemini');
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}
