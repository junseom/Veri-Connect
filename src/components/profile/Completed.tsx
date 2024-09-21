import { useRouter } from "next/router";

export const Completed = () => {
  const router = useRouter();
  const handleNavigateToSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/search");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen max-w-xl bg-white mx-auto">
      <h1 className="text-4xl font-bold text-black mb-6 z-10">
        Your profile is complete
      </h1>

      <div className="relative max-w-md z-10">
        <img
          src="/assets/DALLE.png"
          alt="DALLE"
          width={500}
          height={800}
          className="object-contain w-full h-auto mb-4 rounded-lg"
        />
        <div className="absolute bottom-4 flex p-2 space-x-3">
          <div className="flex flex-col bg-black bg-opacity-50 border border-gray-300 text-white p-4 rounded-2xl z-20">
            <div className="text-lg font-bold mb-2">Ohsho • 26</div>

            <div className="flex space-x-2 mb-2">
              <img src="" alt="icon" className="w-6 h-6" />
              <img src="" alt="icon" className="w-6 h-6" />
              <img src="" alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex space-x-3 text-sm">
              <span className="border p-2 rounded-full">DeFi</span>
              <span className="border p-2 rounded-full">NFT</span>
              <span className="border p-2 rounded-full">Trading</span>
            </div>
          </div>

          <div className="flex items-center bg-black bg-opacity-50 border border-gray-300 text-white p-4 rounded-2xl z-20">
            <div className="mb-2 text-sm">
              Hello, I&rsquo;m a project manager from Korea, and I&rsquo;m a fan
              of Shohei Ohtani.
            </div>
          </div>
        </div>
      </div>

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
