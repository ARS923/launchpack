from google import genai

# Initialize the client
client = genai.Client()

# Generate content using Gemini 2.5 Flash
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain how AI works in a few words",
)

print(response.text)

