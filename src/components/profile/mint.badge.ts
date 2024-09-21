import { SignProtocolClient, SpMode, EvmChains } from "@ethsign/sp-sdk";
import { Signer } from "ethers";

const Schema = [
  { name: "address", type: "address" },
  { name: "createdAt", type: "uint256" },
  { name: "name", type: "string" },
  { name: "badge", type: "string" },
];
const schemaId = "0x5c"; // Replace with your actual schema ID

export const mintBadge = async (badgeName: string, signer: Signer) => {
  const client = new SignProtocolClient(SpMode.OnChain, {
    chain: EvmChains.polygonAmoy, // Adjust chain if needed
  });

  // Extract the signer’s address
  const address = await signer.getAddress();

  const createAttestationRes = await client.createAttestation({
    schemaId: schemaId,
    data: {
      address: address, // Signer’s address
      createdAt: Math.floor(Date.now() / 1000), // Use the current timestamp as createdAt
      name: "AwesomeHacker", // Replace this with actual user name, can pass as parameter if needed
      badge: badgeName, // Replace with actual badge information
    },
    indexingValue: address, // Use signer’s address for indexing
  });

  return createAttestationRes;
};
