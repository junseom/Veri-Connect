import { Profile } from "@/configs/profiles";

interface NamecardProps {
  profile: Profile;
}

export const Namecard = ({ profile }: NamecardProps) => {
  return (
    <div className="relative w-full rounded-xl shadow-lg text-white overflow-hidden">
      <img
        src={profile.image}
        alt={`${profile.name}'s profile`}
        className="w-full object-cover"
      />

      <div className="absolute bottom-1 flex p-2 space-x-3">
        <div className="relative">
          <img
            src={profile.image}
            alt="DALLE"
            className="object-contain w-full h-auto mb-4 rounded-lg"
          />

          <div></div>
          {/* <div className="absolute bottom-4 left-4 right-4 flex p-2 space-x-3">
        <div className="flex flex-1 flex-col bg-black bg-opacity-50 border border-gray-300 text-white p-4 rounded-2xl z-20">
          <div className="text-lg font-bold mb-2">
            {profile.name} • {profile.age}
          </div>

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

        <div className="flex flex-1 items-center bg-black bg-opacity-50 border border-gray-300 text-white p-4 rounded-2xl z-20">
          <div className="mb-2 text-sm">{profile.description}</div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};
