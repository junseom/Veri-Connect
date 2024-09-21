import { useRouter } from "next/router";

function ProfileDetail() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <img
        src="/assets/ProfileDetail.png"
        alt="Profile Detail"
        className="w-full object-cover max-w-md mb-2"
      />
      <button
        onClick={() => router.push("/connectList")}
        className="w-full max-w-md bg-white text-black text-xs p-1.5 rounded-lg border border-black hover:bg-gray-100 transition-colors"
      >
        Connect list
      </button>
    </div>
  );
}

export default ProfileDetail;
