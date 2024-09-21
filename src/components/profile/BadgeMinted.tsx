interface BadgeMintedProps {
    badge: string
    onSave: () => void
}
export const BadgeMinted = ({badge, onSave}: BadgeMintedProps) => {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-2xl font-bold mb-10 text-center text-gray-500">
        You Get Badge!
      </h1>

      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold mb-6">{badge}</h2>
        <div className="w-40 h-40 bg-gray-300 rounded-full mb-10"></div>
        {/* <img
                  src="/path_to_success_image"
                  alt={selectedBadge!}
                  className="w-40 h-40 object-contain mb-4"
                /> 이미지 나중에 추가하기 */}
      </div>

      <button
        className="w-full max-w-md bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
        onClick={onSave}
      >
        Save
      </button>
    </div>
  );
};
