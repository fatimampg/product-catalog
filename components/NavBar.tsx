import Link from 'next/link';
import { GoPerson } from 'react-icons/go';
import { MdFavoriteBorder } from 'react-icons/md';

const NavBar = () => {
  return (
    <div className="bg-background bg-opacity-70 flex justify-between align-text-middle items-center py-1 px-5 border-b-1 shadow-sm h-[57px] w-full top-0 z-10 fixed">
      <Link href="/">
        <img src="./LOGO.svg" alt="logo" className="w-[3rem]" />
      </Link>
      <div className="flex gap-[4rem] text-center font-bold">
        <p>Woman</p>
        <p>Men</p>
      </div>
      <div className="flex gap-3 items-center ">
        <MdFavoriteBorder size={25} />
        <GoPerson size={25} />
      </div>
    </div>
  );
};

export default NavBar;
