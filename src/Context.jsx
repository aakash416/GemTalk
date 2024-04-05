import { createContext } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";




export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_API_KEY);
    const getAnsweredText = async (question) => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(question);
        const response = await result.response;
        return response.text();
    }

    return <Context.Provider value={{ getAnsweredText }}>{children}</Context.Provider>;
};

