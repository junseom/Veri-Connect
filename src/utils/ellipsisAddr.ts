import { getAddress } from "ethers";

export const ellipsisAddr = (
  address: string,
  head: number = 6,
  tail: number = 4
) => {
  return getAddress(address).slice(0, head) + "..." + address.slice(-tail);
};
