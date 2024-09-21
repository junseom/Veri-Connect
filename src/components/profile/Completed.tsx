import { ME } from "@/configs/profiles";
import { useRouter } from "next/router";
import { Namecard } from "../Namecard";

export const Completed = () => {
  const router = useRouter();
  const handleNavigateToSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/search");
  };

  const myProfile = ME;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen max-w-xl bg-white mx-auto">
      <h1 className="text-4xl font-bold text-black mb-6 z-10">
        Your profile is complete
      </h1>

      <div className="max-w-md mx-auto">
        <Namecard profile={ME} />
      </div>

      <button
        onClick={handleNavigateToSearch}
        className="mt-8 w-full max-w-md bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors z-10"
      >
        Let&rsquo;s Meet People! 👀
      </button>
    </div>
  );
};
