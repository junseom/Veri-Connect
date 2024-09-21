import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Setup2 = () => {
  const router = useRouter();
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/setup3");
  };
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleHobbyClick = (hobby: string) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-sm text-gray-400 mb-2">
        <span className="text-black font-bold">2</span>/3
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">Make your Profile</h1>

      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-500 mb-2">
            Select your Profile Picture
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
              <Image
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

        <div className="mb-4">
          <label className="block text-gray-500 mb-2">
            Select your Interest
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[
              "NFT",
              "DAO",
              "Trading",
              "DeFi",
              "Macro",
              "RWA",
              "Currency",
              "Airdrop",
            ].map((hobby) => (
              <button
                key={hobby}
                type="button"
                onClick={() => handleHobbyClick(hobby)}
                className={`p-2 border rounded-lg ${
                  selectedHobbies.includes(hobby)
                    ? "border-black text-black"
                    : "border-gray-300 text-gray-500"
                }`}
              >
                {hobby}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-500 mb-2">
            What kind of person are you?
          </label>
          <div className="flex space-x-4">
            {["Builder", "Invester", "Other"].map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() => handleGenderClick(gender)}
                className={`flex-1 p-3 border rounded-lg ${
                  selectedGender === gender
                    ? "border-black text-black"
                    : "border-gray-300 text-gray-500"
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Setup2;
