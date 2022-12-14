import profile from '../public/profile.png'
import Image from 'next/image'

const ProfilePicture = () => {
  return (
    <div className="relative bg-gradient-to-b from-rose-400 rounded-full w-[450px] h-[450px] my-auto ml-0 overflow-hidden">
      <Image src={profile} alt="profile picture" layout="fill" objectFit="cover" priority />
    </div>
  );
};

export default ProfilePicture;
