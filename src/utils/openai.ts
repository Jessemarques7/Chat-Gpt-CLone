// import OpenAI from "openai";

// // USE A OPENAI API KEY PARA CRIAR UMA NOVA INSTÂNCIA
// const openai = (key: string): OpenAI =>
//   new OpenAI({
//     apiKey: key,
//   });

// export default openai;

import Groq from "groq-sdk";

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   // Print the completion returned by the LLM.
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }

// export async function getGroqChatCompletion() {
//   return groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: "Explain the importance of fast language models",
//       },
//     ],
//     model: "llama3-8b-8192",
//   });
// }

const openai = (key: string): Groq =>
  new Groq({
    apiKey: key,
  });

export default openai;
