import { GivePermissionMsg } from "./GivePermission";

export interface MSG {
  from: "me" | "you";
  text: string;
}

interface MessagesProps {
  friendAddr: string;
  messages: MSG[];
}

export const Messages = ({ friendAddr, messages }: MessagesProps) => {
  return (
    <div className="max-h-[calc(100vh-180px)] overflow-y-scroll pb-24">
      {messages.map((msg) => (
        <div
          key={msg.text}
          className={`px-4 py-2 ${msg.from === "me" ? "text-right" : ""}`}
        >
          <div
            className={`rounded-lg p-3 inline-block max-w-[400px] ${
              msg.from === "me" ? "bg-black text-white" : "bg-neutral-100"
            }`}
          >
            {msg.text === "namecard" ? (
              <GivePermissionMsg friendAddr={friendAddr} />
            ) : (
              <div>{msg.text}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
