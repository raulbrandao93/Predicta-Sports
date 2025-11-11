
import { GoogleGenAI } from "@google/genai";

// Fix: Replaced mock implementation with a real Gemini API call.
// This uses the @google/genai SDK as recommended.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getChatResponse = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            // Per guidelines, basic text tasks should use 'gemini-2.5-flash'.
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: 'Você é o assistente da Predicta Sports. Seu público é brasileiro e fã de futebol. Seja amigável, conciso e ajude com análises e estatísticas para previsões esportivas.',
            }
        });

        // Per guidelines, access the text property directly for the response.
        return response.text;
    } catch (error) {
        console.error("Error getting response from Gemini API:", error);
        // Re-throw the error so it can be handled by the UI component.
        // The component will display a user-friendly message.
        throw new Error("Failed to get response from AI service.");
    }
};
