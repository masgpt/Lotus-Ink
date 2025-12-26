
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getBookRecommendations(userPreference: string) {
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

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini recommendation error:", error);
    return null;
  }
}
