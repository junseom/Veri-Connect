import { useState } from "react";
import { mintBadge } from "./mint.badge";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { getSigner } from "@dynamic-labs/ethers-v6";

interface BadgeDetailsProps {
  selectedBadge: string;
  onBack: () => void;
  onMint: () => void;
}

export const BadgeDetails = ({
  selectedBadge,
  onBack,
  onMint,
}: BadgeDetailsProps) => {
  const { primaryWallet } = useDynamicContext();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
    // reset image
    setImagePreview(null);
  };

  const mint = async () => {
    if (!primaryWallet) return;
    const signer = await getSigner(primaryWallet);
    console.log(signer);

    // TODO: 준성!!!!!
    const res = await mintBadge(selectedBadge, signer);
    if(res.txHash){
      // todo: https://amoy.polygonscan.com/tx/0x48f751551673c0a839a0f4b2584ac09e370bcccba2103ff6760d6b72ef789988
      //res.txHash
    }
    onMint();
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full h-16 flex items-center">
        <button onClick={onBack} className="text-gray-500 mb-4">
          &larr; Back
        </button>
      </div>

      <div className="flex flex-col flex-1 mx-auto w-[600px]">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-500">
          Mint Your Badge
        </h1>

        <div className="flex flex-col items-center">
          <div className="w-40 h-40 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="text-lg font-bold mb-6">{selectedBadge}</h2>
        </div>

        <div className="w-full mb-6">
          <label className="block text-gray-500 mb-2">
            Upload Passport Picture
          </label>
          <div className="border border-gray-300 rounded-lg flex justify-center items-center w-full h-72">
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
                className="m-8 cursor-pointer text-gray-500 flex flex-col items-center"
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
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={mint}
        >
          Mint
        </button>
      </div>
    </div>
  );
};
