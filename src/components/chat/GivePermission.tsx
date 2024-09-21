import CONTRACTS from "@/configs";
import { VeriConnect__factory } from "@/typechain";

interface GivePermissionMsgProps {
    friendAddr: string
}
export const GivePermissionMsg = ({friendAddr}: GivePermissionMsgProps) => {
  const onGivePermission = async () => {
    // TODO: Signer
    const vericonnect = VeriConnect__factory.connect(CONTRACTS.VERICONNECT);
    await vericonnect.giveMintPermission(friendAddr);
  };

  return (
    <div>
      <p className="text-left">
        Please sign on your wallet to give permission to your friend.
      </p>

      <button
        onClick={onGivePermission}
        className="bg-white text-black rounded-lg w-full h-10 mt-4"
      >
        Confirm
      </button>
    </div>
  );
};
