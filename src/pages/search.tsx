import { useState } from "react";
import PROFILES, { Profile } from "@/configs/profiles";
import { Namecard } from "@/components/Namecard";
import { useRouter } from "next/router";

const Modal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center">
      <button className="absolute top-2 right-4 text-black" onClick={onClose}>
        &times;
      </button>
      <h2 className="text-xl font-bold mb-4">Connect 🤝 Crypto People!</h2>
      <p className="text-xs text-gray-700 mb-4">
        You can exchange NFT business cards! And if you want, you can meet
        people without even attending the event.
      </p>
      <ul className="text-xs text-left list-disc list-inside mb-6">
        <li>Get 30 people recommended to you daily.</li>
        <li>
          With the Pro Plan, receive unlimited recommendations for your
          preferred type of person (Builder or Investor).
        </li>
      </ul>
      <button
        className="w-full bg-black text-white text-sm py-2 px-4 rounded-full"
        onClick={onClose}
      >
        OK
      </button>
    </div>
  </div>
);

const Search = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();

  const handleNextProfile = () => {
    setCurrentProfileIndex((prevIndex) =>
      prevIndex === PROFILES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProfile = PROFILES[currentProfileIndex];

  const onChat = () => {
    router.push(`/chat/0xAA289325d1afc4AA040281b10dD9f10A8560D296`);
  };
  return currentProfile ? (
    <div className="relative flex flex-col items-center justify-center min-h-screen max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-black mb-6 z-10">
        Meet Crypto People!
      </h1>

      <div className="relative flex flex-col max-w-md items-center justify-center w-full mb-6">
        <Namecard profile={currentProfile} />
      </div>

      <div className="max-w-md grid grid-cols-2 w-full gap-4 z-50">
        <button
          className="bg-white text-sm px-2 h-10 rounded-xl border border-black w-full"
          onClick={handleNextProfile}
        >
          Meet other people 👀
        </button>
        <button
          onClick={onChat}
          className="bg-black text-white text-sm px-2 h-10 rounded-xl w-full"
        >
          Connect 🤝
        </button>
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  ) : null;
};

export default Search;
