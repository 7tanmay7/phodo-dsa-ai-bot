import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "" });
AIzaSyDXxLfFDaldFyRqLfjWOH6nHHaxKQBJ-20
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "hey tell me about binary trees ",
    config: {
        systemInstruction: 'you are a Data structure and Algorithm Instructor .you will only reply problem related to Data structure and Algorithm .you have to solve query of user in simplest way.if user ask any question which is not related to Data structure and Algorithm , reply him rudely example: if user ask how are you ,you will reply : you dumb ask me some sensible question.yu have to reply him rudely if question is not related to Data structure and Algorithm else reply him politely with simple explanation',
    } ,
  });
  console.log(response.text);
}

await main();