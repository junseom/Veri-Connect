import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const router = useRouter();

  const onSign = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await signIn("worldcoin"); // when worldcoin is the only provider
    router.push("/setup1");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <img
        src="/assets/logo.png"
        alt="Veri-Connect Logo"
        className="w-full max-w-md mb-20"
      />
      <p className="text-sm text-gray-500 text-center mb-10">
        Would you like to network with people in the crypto industry? <br />
        Connect with great individuals based on the verification of your assets.
      </p>

      <button
        onClick={onSign}
        className="bg-black text-white p-3 rounded-lg flex items-center justify-center w-full max-w-md hover:bg-gray-800 transition-colors"
      >
        <Image
          width={24}
          height={24}
          src="/assets/worldcoinlogo.png"
          alt="World ID icon"
          className="mr-2"
        />
        Continue with World ID
      </button>
    </div>
  );
}
