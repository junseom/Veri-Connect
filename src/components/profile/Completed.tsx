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

      <Namecard profile={ME} />

      <div className="absolute bottom-0 w-full h-3/5 bg-gray-100 rounded-t-full z-0" />

      <button
        onClick={handleNavigateToSearch}
        className="w-full max-w-md bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors z-10"
      >
        Let&rsquo;s Meet People! 👀
      </button>
    </div>
  );
};
