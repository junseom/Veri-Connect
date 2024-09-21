import { useState } from "react";
import { WorldCoinBadgeModal } from "./WorldCoinBadgeModal";
import BADGES from "./badges.config";

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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-sm text-gray-400 mb-2">
        <span className="text-black font-bold">3</span>/3
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">Make your Profile</h1>
      <h2 className="text-xl text-gray-500 mb-6 text-center">
        Mint Your Badge
      </h2>
      <div className="flex flex-col w-full max-w-xl items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          {BADGES.map((badge, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4"
              onClick={() => onSelect(badge.title)}
            >
              <div
                className={`w-5 h-5 rounded-full ${
                  isSelected(badge.title) ? "bg-black" : "bg-gray-200"
                }`}
              ></div>
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

      {isModalOpen && <WorldCoinBadgeModal onClose={closeModal} />}
    </div>
  );
};
