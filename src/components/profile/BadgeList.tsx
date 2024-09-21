import { WorldCoinBadgeModal } from "./WorldCoinBadgeModal";
import BADGES from "./badges.config";
import Container from "../layout/Container";

interface BadgeListProps {
  onSelect: (badge: string) => void;
  isSelected: (badge: string) => boolean;
  onConfirm: () => void;

  isModalOpen: boolean;
  closeModal: () => void;
}
export const BadgeList = ({
  isModalOpen,
  closeModal,
  onSelect,
  isSelected,
  onConfirm,
}: BadgeListProps) => {
  const toWorldcoin = () => {
    closeModal();
    onSelect("World ID Badge");
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center mx-auto min-h-screen bg-white px-4">
        <div className="text-sm text-gray-400 mb-2">
          <span className="text-black font-bold mr-1">3</span>/ 3
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Make your Profile
        </h1>
        <h2 className="text-xl text-gray-500 mb-6 text-center">
          Mint Your Badge
        </h2>
        <div className="flex flex-col w-full max-w-2xl items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            {BADGES.map((badge, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4"
                onClick={() => onSelect(badge.title)}
              >
                <img
                  src={`${badge.image}${
                    isSelected(badge.title) ? "color" : "black"
                  }.png`}
                  alt={badge.title}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-bold text-lg">{badge.title}</h3>
                  <p className="text-gray-500 text-sm">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onConfirm}
            className="w-full max-w-md bg-black text-white p-3 rounded-lg mt-6 hover:bg-gray-800 transition-colors"
          >
            Next
          </button>
        </div>

        {isModalOpen && <WorldCoinBadgeModal onClose={toWorldcoin} />}
      </div>
    </Container>
  );
};
