"use client";
import Image from "next/image";
import favicon from "../../assets/favicon.png";
import { FaUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";

const titles = [
  {
    path: "/home",
    title: "",
  },
  {
    path: "/home/applications",
    title: "My Applications",
  },
  {
    path: "/home/universities",
    title: "My Universities",
  },
  {
    path: "/home/visas",
    title: "",
  },
  {
    path: "/home/about",
    title: "",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-white fixed top-0 left-0 p-4 z-50">
      <div className="flex items-center justify-between">
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
      {titles.map((title, index) => {
        const isActive = pathname === title.path;
        if (!isActive) return;
        return (
          <h1 key={index} className="text-center">
            {title.title}
          </h1>
        );
      })}
    </div>
  );
};

export default Header;
