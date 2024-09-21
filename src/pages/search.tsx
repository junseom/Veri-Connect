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
    <div className="relative w-full max-w-sm mx-auto rounded-xl shadow-lg text-white overflow-hidden">
      <img
        src="src\assets\DALLE.png"
        // src={image}
        alt={`${name}'s profile`}
        className="w-full object-cover rounded-xl"
      />
  
      <div className="absolute bottom-1 flex p-2 space-x-3">
        <div className="flex flex-col bg-black bg-opacity-50 border border-gray-300 text-white p-3 rounded-2xl z-20">
          <div className="text-lg font-bold mb-2">
            {name} • {age}
          </div>
  
          <div className="flex space-x-2 mb-2">
            {icons.map((icon, index) => (
              <img key={index} src={icon} alt="icon" className="w-6 h-6" />
            ))}
          </div>
          <div className="flex space-x-3">
            {interests.map((interest, index) => (
              <span key={index}>
                {interest}
              </span>
            ))}
          </div>
        </div>
  
        <div className="flex items-center bg-black bg-opacity-50 border border-gray-300 text-white p-3 rounded-2xl z-20">
          <div className="mb-2 text-sm">{description}</div>
        </div>
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
        icons: [
          "src/assets/icon1.png",
          "src/assets/icon2.png",
          "src/assets/icon3.png",
        ],
        image: "src/assets/profile1.jpg",
      },
      {
        name: "Ohsho",
        age: 26,
        description:
          "Hello, I'm a project manager from Korea, and I'm a fan of Shohei Ohtani.",
        interests: ["DeFi", "NFT", "Trading"],
        icons: [
          "src/assets/icon1.png",
          "src/assets/icon2.png",
          "src/assets/icon3.png",
        ],
        image: "src/assets/profile2.jpg",
      },
      {
        name: "Satoshi",
        age: 35,
        description: "I'm a blockchain enthusiast and a fan of decentralization.",
        interests: ["Crypto", "Blockchain", "Trading"],
        icons: [
          "src/assets/icon1.png",
          "src/assets/icon2.png",
          "src/assets/icon3.png",
        ],
        image: "src/assets/profile3.jpg",
      },
    ];
  
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen max-w-md bg-gray-50 mx-auto">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`absolute w-full z-${10 + index * 10} transform
              rotate-${index * 2}`}
          >
            <Card {...profile} />
          </div>
        ))}
  
        <div className="absolute bottom-12 flex space-x-8 z-50">
          <button className="bg-gray-200 p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button className="bg-black p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  export default Search;
  