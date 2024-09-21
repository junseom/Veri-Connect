import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

interface TextFieldProps {
  send: (text: string) => void;
}
export const TextField = ({ send }: TextFieldProps) => {

  const [text, setText] = useState("");
  const onChageText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSend = () => {
    if (!text) return;
    send(text);
    setText("");
  };

  const onSendGM = () => {
    send("GM");
  };

  const onSendNamecard = () => {
    send(`namecard`);
  };

  return (
    <div className="p-6 w-full flex items-center gap-3">
      <div className="px-4 flex flex-1 items-center border-2 border-black rounded-full h-12">
        <input
          value={text}
          onChange={onChageText}
          placeholder="Type a message"
          className="outline-none flex-1 justify-between "
        />
        <RiSendPlaneFill onClick={onSend} size={24} />
      </div>

      <button
        onClick={onSendGM}
        className="bg-white px-6 h-12 text-black border-2 border-black rounded-lg"
      >
        GM
      </button>
      <button
        onClick={onSendNamecard}
        className="bg-black px-6 h-12 text-white rounded-lg"
      >
        Send Card
      </button>
    </div>
  );
};
