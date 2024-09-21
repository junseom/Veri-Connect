import { GoChevronLeft } from "react-icons/go";
import { ellipsisAddr } from "@/utils/ellipsisAddr";
import { isAddress } from "ethers";

interface ChatHeaderProps {
  address: string;
}

export const ChatHeader = ({ address }: ChatHeaderProps) => {
  return (
    <div className="w-full -mb-2 h-16 flex items-center px-4 gap-3">
      <GoChevronLeft size={24} color="#909090" />
      {isAddress(address) ? ellipsisAddr(address) : address}
    </div>
  );
};
