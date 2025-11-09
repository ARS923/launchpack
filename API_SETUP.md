# API Setup for Customize Gem Feature

## Environment Variable Setup

### For Local Development:

1. Create a `.env` file in the `launchpack` directory:
```bash
GEMINI_API_KEY=your_api_key_here
```

2. Get your API key from: https://aistudio.google.com/app/apikey

3. The `.env` file is already in `.gitignore` so it won't be committed

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `GEMINI_API_KEY` (without VITE_ prefix - this is for serverless functions)
   - **Value:** Your Google AI API key
   - **Environment:** Production, Preview, Development (select all)
4. Save and redeploy

## How It Works

1. User selects a Gem type and describes their app
2. Frontend calls `/api/generate-gem` (Vercel serverless function)
3. Serverless function calls Gemini API with the template + user's app description
4. Gemini returns customized Gem instructions
5. User can copy the customized instructions

## Testing

The API endpoint is at: `/api/generate-gem`

Test it locally:
```bash
npm run dev
# Then test the "Customize a Gem Live" section on the website
```

## Troubleshooting

- **"API key not configured"**: Make sure `GEMINI_API_KEY` is set in Vercel environment variables
- **CORS errors**: The API route includes CORS headers
- **Rate limits**: Google AI API has rate limits - check your quota
- **"Failed to generate"**: Check that your API key is valid and has access to the Gemini API

