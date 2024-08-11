import { cn } from "@/utils/cn";
import Image from "next/image";
import { Message } from "@/utils/use-chat";
import Markdown from "react-markdown";

interface ChatMessageProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ChatMessages({
  messages,
  isLoading,
}: ChatMessageProps) {
  return (
    <div className="flex flex-col h-full w-full justify-start items-center overflow-y-auto">
      {messages?.map((message, index) => (
        <MessageBLock key={index} message={message} />
      ))}
      {isLoading && (
        <MessageBLock message={{ role: "assistant", content: "" }} isLoading />
      )}
    </div>
  );
}

function MessageBLock({
  message,
  isLoading = false,
}: {
  message: Message;
  isLoading?: boolean;
}) {
  return (
    <div
      className={cn(
        "text-white bg-background-chat px-4 py-8 w-full flex justify-center",
        message.role === "user" && "bg-background-light"
      )}
    >
      <div className="w-full max-w-[833px] flex">
        <Image
          alt={message.role}
          src={`/images/${message.role}-icon.svg`}
          width={36}
          height={36}
          className="mr-4 self-start"
        />
        {isLoading ? (
          <Image
            src={"/images/loading.svg"}
            width={36}
            height={36}
            alt="whatever"
            className="mr-4"
          />
        ) : (
          <div className="flex flex-col gap-4">
            <Markdown>{message.content}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
