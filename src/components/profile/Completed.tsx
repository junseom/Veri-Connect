import CONTRACTS from "@/configs";
import { ME } from "@/configs/profiles";
import { useRouter } from "next/router";
import { Namecard } from "../Namecard";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { getSigner } from "@dynamic-labs/ethers-v6";
import { VeriConnect__factory } from "@/typechain";
import { useState } from "react";
import { Modal } from "../Modal";

export const Completed = () => {
  const router = useRouter();
  const { primaryWallet } = useDynamicContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  const onRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!primaryWallet) return;
    setIsModalOpen(true);
    setIsLoading(true);

    const signer = await getSigner(primaryWallet);
    const vericonnect = VeriConnect__factory.connect(
      CONTRACTS.VERICONNECT,
      signer
    );
    const tx = await vericonnect.registerCard();

    const receipt = await tx.wait();
    setIsLoading(false);
    setTxHash(receipt?.hash ?? "");
  };

  const onConfirm = () => {
    router.push("/search");
  };


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen max-w-xl bg-white mx-auto">
      <h1 className="text-4xl font-bold text-black mb-6 z-10">
        Your profile is complete
      </h1>

      <div className="max-w-md mx-auto">
        <Namecard profile={ME} />
      </div>

      <button
        onClick={onRegister}
        className="mt-8 w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors z-10"
      >
        Register My Namecard
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          {isLoading ? (
            <div>
              <div className="my-8">
                <p className="text-center text-xl font-semibold">Loading...</p>
              </div>
              <button
                onClick={onConfirm}
                disabled
                className="w-full bg-neutral-200 text-neutral-700 p-3 rounded-lg"
              >
                Please wait...
              </button>
            </div>
          ) : (
            <div>
              <div className="my-8">
                <p className="text-center text-xl font-semibold">
                  Registered! 🎊
                </p>
              </div>
              <button
                onClick={onConfirm}
                className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {"Let's Meet People!  👀"}
              </button>
              <button className="w-full bg-white text-black p-3 rounded-lg border-[1.5px] border-black mt-3">
                <a
                  href={`https://amoy.polygonscan.com/tx/${txHash}`}
                  target="_blank"
                >
                  View on Explorer
                </a>
              </button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};
