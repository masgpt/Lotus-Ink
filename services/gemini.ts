
import { GoogleGenAI, Type } from "@google/genai";

export async function getBookRecommendations(userPreference: string) {
  // Always create a new instance right before making an API call to ensure it always uses the most up-to-date API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest 3 books by Asian American authors based on this preference: "${userPreference}". 
      Return the data in a friendly tone as a helpful bookseller in Los Angeles.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            intro: { type: Type.STRING },
            books: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  author: { type: Type.STRING },
                  reason: { type: Type.STRING }
                },
                required: ["title", "author", "reason"]
              }
            }
          },
          required: ["intro", "books"]
        }
      }
    });

    // Directly access the .text property
    const text = response.text;
    if (!text) {
      throw new Error("Empty response from model");
    }

    // Clean potential markdown formatting if the model includes it despite the mimeType
    const jsonString = text.trim().replace(/^```json\n?/, '').replace(/\n?```$/, '');
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Gemini recommendation error:", error);
    return null;
  }
}
