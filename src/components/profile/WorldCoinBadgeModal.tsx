interface WorldCoinBadgeModalProps {
  onClose: () => void;
}

export const WorldCoinBadgeModal = ({ onClose }: WorldCoinBadgeModalProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="mt-6 flex flex-col items-center">
        <img
          src="/assets/DALLE.png"
          alt="Badge Image"
          width={100}
          height={100}
          className="mb-4"
        />
        <h2 className="text-xl font-bold">You got world ID Badge!</h2>
        <p className="mt-1 text-xs text-gray-500 mb-6">
          You verified humanity with World ID.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-black text-white px-4 py-3 rounded-full"
        >
          OK
        </button>
      </div>
    </div>
  </div>
);
