import CONTRACTS from "@/configs";
import { VeriConnect__factory } from "@/typechain";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { getSigner } from "@dynamic-labs/ethers-v6";
import { Namecard } from "../Namecard";
import { ME } from "@/configs/profiles";
import { useState } from "react";
interface GivePermissionMsgProps {
  friendAddr: string;
}
export const SendNamecardMsg = ({ friendAddr }: GivePermissionMsgProps) => {
  const { primaryWallet } = useDynamicContext();
  const [txHash, setTxHash] = useState<string | null>(null);

  const onSendCard = async () => {
    if (!primaryWallet) return;
    const signer = await getSigner(primaryWallet);
    const vericonnect = VeriConnect__factory.connect(
      CONTRACTS.VERICONNECT,
      signer
    );
    const tx = await vericonnect.mintCardToFriend(friendAddr);
    await tx.wait();
    setTxHash(tx.hash);
  };

  return (
    <div className="p-2">
      <p className="text-left text-lg">
        Please sign on your wallet to mint your name card NFT to your friend.
      </p>

      <div className="my-4">
        <Namecard profile={ME} />
      </div>

      {txHash ? (
        <a
          target="_blank"
          href={`https://explorer-holesky.morphl2.io/tx/${txHash}`}
        >
          <button className="bg-blue-500 text-white rounded-lg w-full h-10 mt-2">
            View on Explorer
          </button>
        </a>
      ) : (
        <button
          onClick={onSendCard}
          className="bg-white text-black rounded-lg w-full h-10 mt-2"
        >
          Confirm
        </button>
      )}
    </div>
  );
};
