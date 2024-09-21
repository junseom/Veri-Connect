import CONTRACTS from "@/configs";
import { VeriConnect__factory } from "@/typechain";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { getSigner } from "@dynamic-labs/ethers-v6";
interface GivePermissionMsgProps {
  friendAddr: string;
}
export const SendNamecardMsg = ({ friendAddr }: GivePermissionMsgProps) => {
  const { primaryWallet } = useDynamicContext();
  const onSendCard = async () => {
    if (!primaryWallet) return;
    const signer = await getSigner(primaryWallet);
    const vericonnect = VeriConnect__factory.connect(
      CONTRACTS.VERICONNECT,
      signer
    );
    const tx = await vericonnect.mintCardToFriend(friendAddr);
  };

  return (
    <div>
      <p className="text-left">
        Please sign on your wallet to mint your name card NFT to your friend.
      </p>

      <button
        onClick={onSendCard}
        className="bg-white text-black rounded-lg w-full h-10 mt-4"
      >
        Confirm
      </button>
    </div>
  );
};
