import { useState } from "react";
import Image from "next/image";

interface ProfileProp {
  name: string;
  age: number;
  description: string;
  interests: string[];
  icons: string[];
  image: string;
}

const Card = ({
  name,
  age,
  description,
  interests,
  icons,
  image,
}: ProfileProp) => (
  <div className="relative w-full max-w-md mx-auto rounded-xl shadow-lg text-white overflow-hidden">
    <Image
      // src={image}
      src="/assets/DALLE.png"
      alt={`${name}'s profile`}
      width={300}
      height={300}
      className="w-full object-cover rounded-xl border border-black border-rounded-xl"
    />

    <div className="absolute bottom-1 flex p-2 space-x-3">
      <div className="flex flex-col bg-black bg-opacity-50 border border-gray-300 text-white p-3 rounded-2xl z-20">
        <div className="text-lg font-bold mb-2">
          {name} • {age}
        </div>

        <div className="flex space-x-2 mb-2">
          {icons.map((icon, index) => (
            <Image
              key={index}
              src="/assets/DALLE.png"
              // src={icon}
              alt="icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          ))}
        </div>
        <div className="flex space-x-3">
          {interests.map((interest, index) => (
            <span key={index}>{interest}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center bg-black bg-opacity-50 border border-gray-300 text-white p-3 rounded-2xl z-20">
        <div className="mb-2 text-sm">{description}</div>
      </div>
    </div>
  </div>
);

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
  const profiles = [
    {
      name: "Skadi",
      age: 26,
      description:
        "Hi, I'm Skadi. I'm passionate about realizing universal basic income using crypto.",
      interests: ["DeFi", "RWA", "Trading"],
      icons: ["/assets/icon1.png", "/assets/icon2.png", "/assets/icon3.png"],
      image: "/assets/profile1.jpg",
    },
    {
      name: "Ohsho",
      age: 26,
      description:
        "Hello, I'm a project manager from Korea, and I'm a fan of Shohei Ohtani.",
      interests: ["DeFi", "NFT", "Trading"],
      icons: ["/assets/icon1.png", "/assets/icon2.png", "/assets/icon3.png"],
      image: "/assets/profile2.jpg",
    },
    {
      name: "Satoshi",
      age: 35,
      description: "I'm a blockchain enthusiast and a fan of decentralization.",
      interests: ["Crypto", "Blockchain", "Trading"],
      icons: ["/assets/icon1.png", "/assets/icon2.png", "/assets/icon3.png"],
      image: "/assets/profile3.jpg",
    },
  ];

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleNextProfile = () => {
    setCurrentProfileIndex((prevIndex) =>
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-black mb-6 z-10">
        Meet Crypto People!
      </h1>

      <div className="relative flex flex-col items-center justify-center w-full mb-6">
        <Card {...currentProfile} />
      </div>

      <div className="grid grid-cols-2 w-full max-w-md gap-4 z-50">
        <button
          className="bg-white text-sm p-2 rounded-xl border border-black w-full"
          onClick={handleNextProfile}
        >
          Meet other people 👀
        </button>
        <button className="bg-black text-white text-sm p-2 rounded-xl w-full">
          Connect 🤝
        </button>
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}

    </div>
  );
};

export default Search;
