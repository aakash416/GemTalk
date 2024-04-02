import { createContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [inputText, setInputText] = useState('');


    const genAI = new GoogleGenerativeAI("Apikey");
    const getAnsweredText = async (question) => {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = question

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    }

    return <Context.Provider value={{ inputText, setInputText, getAnsweredText }}>{children}</Context.Provider>;
};

