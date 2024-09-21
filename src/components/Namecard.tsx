import { Profile } from "@/configs/profiles";

interface NamecardProps {
  profile: Profile;
}

export const Namecard = ({ profile }: NamecardProps) => {
  return (
    <div className="relative w-full max-w-md rounded-xl shadow-lg text-white overflow-hidden">
      <img
        src={profile.image}
        alt={`${profile.name}'s profile`}
        className="w-full max-w-md mx-auto object-cover"
      />
{/* 
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex gap-4">
          <div className="border-2 p-4 bg-neutral-600/40 flex-[1.2] border-neutral-600 rounded-lg ">
            <p className="text-lg font-bold mb-2">
              {profile.name} • {profile.age}
            </p>
            <div className="flex space-x-2 mb-2">
              <img src="" alt="icon" className="w-6 h-6" />
              <img src="" alt="icon" className="w-6 h-6" />
              <img src="" alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex space-x-3 text-sm">
              {profile.interests.map((interest, index) => (
                <span key={index} className="border p-2 rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="border-2 p-4 bg-neutral-600/40 flex-1 border-neutral-600 rounded-lg">
            <p className="mb-2 text-sm">{profile.description}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
