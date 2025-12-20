
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userPrompt: string) => {
  if (!API_KEY) {
    return "I'm sorry, I cannot process your request because the API key is not configured.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are an AI ambassador for TEOS Egypt. Your goal is to explain the TEOS (Transforming Governance with Civic-First Blockchain Solutions) framework. Use terms like 'Sovereign Governance Core', 'Pharaoh Portal', 'AI Guard', and 'ERT Layer'. Emphasize that TEOS is non-speculative, compliance-ready, and sovereignty-preserving for governments. Keep answers concise, professional, and patriotic towards Egyptian digital modernization.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with the TEOS AI Core. Please try again later.";
  }
};
