export interface Profile {
  name: string;
  age: number;
  description: string;
  interests: string[];
  icons: string[];
  image: string;
}

export const ME: Profile = {
  name: "Skadi",
  age: 26,
  description:
    "Hello, I'm a project manager from Korea, and I'm a fan of Shohei Ohtani.",
  interests: ["DeFi", "RWA", "Trading"],
  icons: ["/assets/icon1.png", "/assets/icon2.png", "/assets/icon3.png"],
  image: "/assets/DALLE.png",
};

const PROFILES: Profile[] = [
  {
    name: "Skadi",
    age: 26,
    description:
      "Hi, I'm Skadi. I'm passionate about realizing universal basic income using crypto.",
    interests: ["DeFi", "RWA", "Trading"],
    icons: ["/assets/icon1.png", "/assets/icon2.png", "/assets/icon3.png"],
    image: "/assets/DALLE.png"
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

export default PROFILES;
