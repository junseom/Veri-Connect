import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const router = useRouter();

  const onSign = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // await signIn("worldcoin"); // when worldcoin is the only provider

    router.push("/setup1")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-7xl font-black text-black mb-10">Veri-Connect</h1>
      <p className="text-sm text-gray-500 text-center mb-20">
        Would you like to network with people in the crypto industry? <br />
        Connect with great individuals based on the verification of your assets.
      </p>
      <button
        onClick={onSign}
        className="bg-black text-white p-3 rounded-lg flex items-center justify-center w-full max-w-md hover:bg-gray-800 transition-colors"
      >
        <img
          src="https://www.worldcoin.org/_next/image?url=%2Fassets%2Fworld-id%2Ficon%2Fworld-id-white.svg&w=256&q=75"
          alt="World ID icon"
          className="h-6 w-6 mr-2"
        />
        Continue with World ID
      </button>
    </div>
  );
}
