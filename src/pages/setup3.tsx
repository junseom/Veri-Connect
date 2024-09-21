import { useState } from "react";
import { useRouter } from "next/router";

const Setup3 = () => {
  const [step, setStep] = useState(0); // 0: 배지 선택(3), 1: 배지 민팅(3-1), 2: 민팅 완료(3-2)
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [mintedBadges, setMintedBadges] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  const handleBadgeClick = (badge: string) => {
    setSelectedBadge(badge);
    setStep(1);
  };

  const handleSaveClick = () => {
    setStep(0);
    setMintedBadges([...mintedBadges, selectedBadge!]);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("upload")?.click();
  };

  const handleNavigateToSearch = (e: any) => {
    e.preventDefault();
    router.push("/search");
  };

  const renderStep0 = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-sm text-gray-400 mb-2">
        <span className="text-black font-bold">3</span>/3
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">Make your Profile</h1>
      <h2 className="text-xl text-gray-500 mb-6 text-center">
        Mint Your Badge
      </h2>
      <div className="flex flex-col w-full max-w-xl items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "World ID Badge",
              description:
                "Receive this badge by verifying your humanity with World ID.",
            },
            {
              title: "BITMax Badge",
              description:
                "Earned when more than 50% of your portfolio is in Bitcoin.",
            },
            {
              title: "KYC Verification Badge",
              description:
                "Granted when you verify your identity with a passport.",
            },
            {
              title: "ETHMax Badge",
              description:
                "Granted to those with over 50% of their portfolio in Ethereum.",
            },
            {
              title: "ETHSingapore Badge",
              description: "Awarded for attending ETHSingapore.",
            },
            {
              title: "ETHGlobal Badge",
              description:
                "Given to those who participated in global blockchain innovation.",
            },
          ].map((badge, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4"
              onClick={() => handleBadgeClick(badge.title)}
            >
              <div
                className={`w-5 h-5 rounded-full ${
                  mintedBadges.includes(badge.title)
                    ? "bg-black"
                    : "bg-gray-200"
                }`}
              ></div>
              <div>
                <h3 className="font-bold text-lg">{badge.title}</h3>
                <p className="text-gray-500 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setStep(3)}
          className="w-full max-w-md bg-black text-white p-3 rounded-lg mt-6 hover:bg-gray-800 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full flex justify-start">
        <button onClick={() => setStep(0)} className="text-gray-500 mb-4">
          &larr; Back
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-center text-gray-500">
        Mint Your Badge
      </h1>

      <div className="flex flex-col items-center">
        <div className="w-40 h-40 bg-gray-300 rounded-full mb-4"></div>
        <h2 className="text-lg font-bold mb-6">{selectedBadge}</h2>
      </div>

      <div className="w-full max-w-md mb-6">
        <label className="block text-gray-500 mb-2">
          Upload Passport Picture
        </label>
        <div className="border border-gray-300 rounded-lg p-8 flex justify-center items-center w-full h-48">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="upload"
          />
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Selected Preview"
              className="w-full h-full object-cover rounded-lg"
              onClick={handleImageClick}
            />
          ) : (
            <label
              htmlFor="upload"
              className="cursor-pointer text-gray-500 flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11a4 4 0 01-8 0 4 4 0 118 0z"
                />
              </svg>
            </label>
          )}
        </div>
      </div>

      <button
        className="w-full max-w-md bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
        onClick={() => setStep(2)}
      >
        Mint
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-2xl font-bold mb-10 text-center text-gray-500">
        You Get Badge!
      </h1>

      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold mb-6">{selectedBadge}</h2>
        <div className="w-40 h-40 bg-gray-300 rounded-full mb-10"></div>
        {/* <img
          src="/path_to_success_image"
          alt={selectedBadge!}
          className="w-40 h-40 object-contain mb-4"
        /> 이미지 나중에 추가하기 */}
      </div>

      <button
        className="w-full max-w-md bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
        onClick={handleSaveClick}
      >
        Save
      </button>
    </div>
  );

  const renderStep3 = () => (
    <div className="relative flex flex-col items-center justify-center min-h-screen max-w-xl bg-white mx-auto">
      <h1 className="text-4xl font-bold text-black mt-12 mb-12 z-10">
        Your profile is complete
      </h1>

      <div className="relative max-w-sm z-10">
        <img
          src="src\assets\DALLE.png"
          alt="DALLE"
          className="object-contain w-full h-auto mb-4 rounded-lg"
        />
        <div className="absolute bottom-4 flex p-2 space-x-3">
          <div className="flex flex-col bg-black bg-opacity-50 border border-gray-300 text-white p-4 rounded-2xl z-20">
            <div className="text-lg font-bold mb-2">Ohsho • 26</div>

            <div className="flex space-x-2 mb-2">
              <img src="" alt="icon" className="w-6 h-6" />
              <img src="" alt="icon" className="w-6 h-6" />
              <img src="" alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex space-x-3">
              <span>DeFi</span>
              <span>NFT</span>
              <span>Trading</span>
            </div>
          </div>

          <div className="flex items-center bg-black bg-opacity-50 border border-gray-300 text-white p-4 rounded-2xl z-20">
            <div className="mb-2 text-sm">
              Hello, I'm a project manager from Korea, and I'm a fan of Shohei
              Ohtani.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-3/5 bg-gray-100 rounded-t-full z-0" />

      <button
        onClick={handleNavigateToSearch}
        className="w-full max-w-md bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors z-10"
      >
        Let's Meet People! 👀
      </button>
    </div>
  );

  if (step === 0) {
    return renderStep0();
  } else if (step === 1) {
    return renderStep1();
  } else if (step === 2) {
    return renderStep2();
  } else {
    return renderStep3();
  }
};

export default Setup3;
