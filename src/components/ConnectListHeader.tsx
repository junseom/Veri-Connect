import { GoChevronLeft } from "react-icons/go";
import { useRouter } from "next/router";

export const ConnectListHeader = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto bg-white h-12 items-center px-4 z-50">
      <div className="flex w-full mb-2">
        <GoChevronLeft
          className=" left-0"
          size={24}
          color="#000"
          onClick={() => router.back()}
        />
        <h1 className="flex-grow text-center text-lg font-semibold">
          Connect List
        </h1>
      </div>
      <div className="h-px bg-neutral-100 w-full" />
    </div>
  );
};
