"use client";

import { cn } from "@/utils/cn";
import { Chats } from "@/utils/use-chat";
import Image from "next/image";
import { useState } from "react";

interface SideBarProps {
  isVisible: boolean;
  chats: Chats;
  selectedChat: string | null;
  selectChat: (chatId: string) => void;
  deleteChat: (chatId: string) => void;
}

export default function SideBar({
  isVisible,
  selectedChat,
  selectChat,
  chats,
  deleteChat,
}: SideBarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true); // window.innerWidth > 768

  function handleClick() {
    setIsOpen((e) => !e);
  }

  function handleChatClick(chatIndex: string) {
    selectChat(chatIndex);
  }

  function handleDeleteClick(
    ev: React.MouseEvent<HTMLButtonElement>,
    chatIndex: string
  ) {
    ev.stopPropagation();
    deleteChat(chatIndex);
  }
  return (
    <>
      {isVisible && (
        <>
          {" "}
          <button
            onClick={handleClick}
            className="z-10 absolute bg-background-dark border border-border p-2 rounded-md flex items-cente justify-center left-4 top-4 "
          >
            <Image
              width={25}
              height={16}
              alt="abrir barra"
              src={"/images/open-menu.svg"}
            />
          </button>
          <div
            className={cn(
              "bg-black/60 w-screen h-screen fixed visible md:hidden transition-all duration-300 opacity-0",
              isOpen && "opacity-100"
            )}
          ></div>
          <nav
            className={cn(
              "fixed z-10 w-0 md:relative h-screen bg-background-dark p-0 transition-all duration-300 flex-col flex overflow-hidden",
              isOpen && "visible w-[288px] md:w-[377px] p-4 opacity-100"
            )}
          >
            <div className="flex justify-between gap-4">
              <h3 className="border border-border p-2 rounded-md text-base text-gray basis-4/5 text-center font-semibold">
                Lista de conversas
              </h3>
              <button
                onClick={handleClick}
                className=" bg-background-dark border border-border p-2 rounded-md basis-1/5 flex items-cente justify-center left-4 top-4 "
              >
                <Image
                  width={25}
                  height={16}
                  alt="abrir barra"
                  src={"/images/open-menu.svg"}
                />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {Object.keys(chats).map((chatIndex) => (
                <div
                  key={chatIndex}
                  onClick={() => handleChatClick(chatIndex)}
                  className={cn(
                    "flex justify-between items-center py-2 px-3 bg-background-light rounded-lg cursor-pointer",
                    selectedChat === chatIndex && "border-border border-2"
                  )}
                >
                  <div className=" flex items-center gap-3 mr-2">
                    <Image
                      alt=""
                      src={"/images/balloon.svg"}
                      width={17}
                      height={18}
                    />
                    <span className="text-white truncate text-ellipsis max-w-[100px]">
                      {chats[chatIndex].title}
                    </span>
                  </div>
                  <button
                    className="disabled:invisible"
                    disabled={Object.keys(chats).length === 1}
                    onClick={(ev) => handleDeleteClick(ev, chatIndex)}
                  >
                    <Image
                      alt=""
                      src={"/images/trash.svg"}
                      width={13}
                      height={18}
                    />
                  </button>
                </div>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
