import { useState } from "react";
import { useRouter } from "next/router";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

function Setup1() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const router = useRouter();
  const { setShowAuthFlow, handleLogOut, primaryWallet } = useDynamicContext();

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleWalletConnect = () => {
    setShowAuthFlow(true);
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/setup2");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-sm text-gray-400 mb-2">
        <span className="text-black font-bold">1</span>/3
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">Make your Profile</h1>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-500 mb-2">
            Connect your wallet
          </label>
          {primaryWallet ? (
            <button
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={handleLogOut}
            >
              Log out
            </button>
          ) : (
            <button
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={handleWalletConnect}
            >
              Connect with Dynamic
            </button>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 mb-2">
            What’s your Nickname?
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Ohsho"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 mb-2">
            What’s your affiliation?
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Student at Korea University in South Korea"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 mb-2">Choose your Gender</label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => handleGenderSelect("Woman")}
              className={`flex-1 p-3 border rounded-lg ${
                selectedGender === "Woman"
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              Woman
            </button>
            <button
              type="button"
              onClick={() => handleGenderSelect("Man")}
              className={`flex-1 p-3 border rounded-lg ${
                selectedGender === "Man"
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              Man
            </button>
            <button
              type="button"
              onClick={() => handleGenderSelect("Nonbinary")}
              className={`flex-1 p-3 border rounded-lg ${
                selectedGender === "Nonbinary"
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              Nonbinary
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-500 mb-2">
            Introduce yourself in 180 characters
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg placeholder:text-xs"
            placeholder="Hello, I'm a project manager from Korea, and a big fan of Shohei Ohtani."
          />
        </div>

        <button
          type="submit"
          onClick={handleNext}
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Setup1;
