"use client";

import { ReactElement, useState } from "react";
import KeyInstructions from "../app/_Components/KeyInstructions";
import ChatInput from "./_Components/ChatInput";
import SideBar from "./_Components/SideBar";
import ChatMessages from "./_Components/ChatMessages";

import { useChat } from "@/utils/use-chat";

function Home(): ReactElement {
  const [openAiKey, setOpenAiKey] = useState<string>(
    "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"
  );
  const {
    chats,
    isLoading,
    selectedChat,
    addUserMessage,
    selectChat,
    deleteChat,
  } = useChat(openAiKey);

  const placeholder = !!openAiKey ? "Digite um Oi" : "Digite sua chave de API";

  function handleSubmitMessage(message: string) {
    addUserMessage(selectedChat, message);
  }

  const handleChatSubmit = !!openAiKey ? handleSubmitMessage : setOpenAiKey;

  return (
    <div className="flex">
      <SideBar
        isVisible={!!openAiKey}
        selectedChat={selectedChat}
        selectChat={selectChat}
        deleteChat={deleteChat}
        chats={chats}
      />
      <main className="w-full h-screen pt-10 flex flex-col justify-between">
        <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center">
          CloneGPT
        </h1>
        {!!openAiKey ? (
          <ChatMessages
            messages={chats[selectedChat].messages}
            isLoading={isLoading}
          />
        ) : (
          <KeyInstructions />
        )}
        <ChatInput
          onSubmitMessage={handleChatSubmit}
          placeholder={placeholder}
        />
      </main>
    </div>
  );
}

export default Home;
