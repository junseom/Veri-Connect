import { useState } from "react";
import { useRouter } from "next/router";
import { BadgeDetails } from "@/components/profile/BadgeDetails";
import { BadgeMinted } from "@/components/profile/BadgeMinted";
import { Completed } from "@/components/profile/Completed";
import { BadgeList } from "@/components/profile/BadgeList";

const Setup3 = () => {
  const [step, setStep] = useState(0); // 0: 배지 선택(3), 1: 배지 민팅(3-1), 2: 민팅 완료(3-2)
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [mintedBadges, setMintedBadges] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onSelect = (badge: string) => {
    setSelectedBadge(badge);
    setStep(1);
  };

  const onSave = () => {
    setStep(0);
    setMintedBadges([...mintedBadges, selectedBadge!]);
    setSelectedBadge(null);
  };

  if (!selectedBadge) {
    if (step === 3) return <Completed />;
    else
      return (
        <BadgeList
          onSelect={onSelect}
          isSelected={(badge: string) => mintedBadges.includes(badge)}
          onConfirm={() => setStep(3)}
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      );
  } else if (step === 1) {
    return (
      <BadgeDetails
        selectedBadge={selectedBadge}
        onBack={() => setStep(0)}
        onMint={() => setStep(2)}
      />
    );
  } else if (step === 2) {
    return <BadgeMinted badge={selectedBadge} onSave={onSave} />;
  }
  return null;
};

export default Setup3;
