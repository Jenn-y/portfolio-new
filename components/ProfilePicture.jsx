import profile from '../public/profile.png'
import Image from 'next/image'

const ProfilePicture = () => {
  return (
    <div className="relative bg-gradient-to-b from-rose-400 rounded-full w-[450px] h-[450px] m-auto overflow-hidden">
      <Image src={profile} layout="fill" objectFit="cover" priority />
    </div>
  );
};

export default ProfilePicture;
