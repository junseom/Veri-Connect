import Container from "@/components/layout/Container";
import { ChatHeader } from "@/components/chat/Header";
import { Messages, MSG } from "@/components/chat/Messages";
import { TextField } from "@/components/chat/TextField";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Chat() {
  const router = useRouter();
  const { address } = router.query; // URL 파라미터 추출

  const [msgs, setMsgs] = useState<MSG[]>([]);

  const onSend = (text: string) => {
    setMsgs((prev) => [...prev, { from: "me", text }]);
  };

  if (!address || typeof address !== "string") return null;
  return (
    <Container>
      <div className="w-full flex-1 h-full">
        <ChatHeader address={address} />
        <div className="relative h-6 flex items-center">
          <div className="h-px bg-neutral-100 w-full" />
          <div className="absolute inset-0 flex justify-center">
            <p className="text-sm text-neutral-400 px-6 bg-white">
              Today, 22 SEP 2024
            </p>
          </div>
        </div>

        <Messages friendAddr={address} messages={msgs} />

        <div className="absolute bottom-0 left-0 right-0">
          <TextField send={onSend} />
        </div>
      </div>
    </Container>
  );
}
