import Image from "next/image";
import favicon from "../../assets/favicon.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-white fixed top-0 left-0 p-4 flex items-center justify-between z-50">
      <Image alt="favicon" src={favicon} width={120} height={120} />
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <FaUserCircle />
          <p className="capitalize">Hello student</p>
        </div>
        <button className="w-full p-3 rounded-full bg-red-500 items-center justify-center text-white">
          Help!
        </button>
        <button className="w-full p-3 rounded-full bg-[#64558f] items-center justify-center text-white capitalize">
          New application
        </button>
      </div>
    </div>
  );
};

export default Header;
