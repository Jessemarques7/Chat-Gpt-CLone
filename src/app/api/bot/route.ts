import openai from "@/utils/openai";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";
import { title } from "process";

export async function POST(req: Request): Promise<NextResponse> {
  const { key, chat } = await req.json();
  const { messages } = chat;
  const chatCompletion = await openai(key).chat.completions.create({
    messages,
    model: "llama3-8b-8192",
  });

  const message = chatCompletion.choices[0].message;

  let newTitle = chat.title;

  if (chat.title === "Nova conversa") {
    const chatCompletionTitle = await openai(key).chat.completions.create({
      messages: [
        ...messages,
        message,
        {
          role: "user",
          content:
            "Retorne um títulode até 25 caractere para o chat acima. Retorne apenas o título e nada mais",
        },
      ],
      model: "llama3-8b-8192",
    });

    newTitle = chatCompletionTitle.choices[0].message.content;
  }
  return NextResponse.json(
    { ...chat, title: newTitle, messages: messages.concat(message) },
    { status: HttpStatusCode.Ok }
  );
}
