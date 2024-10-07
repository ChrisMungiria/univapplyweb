"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { IoHomeOutline } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const links = [
  {
    title: "Home",
    link: "/home",
    icon: <IoHomeOutline size={20} />,
  },
  {
    title: "Applications",
    link: "/home/applications",
    icon: <IoDocumentsOutline size={20} />,
  },
  {
    title: "Universities",
    link: "/home/universities",
    icon: <FaRegBuilding size={20} />,
  },
  {
    title: "Visas",
    link: "/home/visas",
    icon: <IoDocumentOutline size={20} />,
  },
  {
    title: "About me",
    link: "/home/about",
    icon: <FaRegUser size={20} />,
  },
];

const BottomTabs = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-white fixed bottom-0 left-0 p-4 flex items-center justify-between z-50 border border-b">
      <ul className="mx-auto w-11/12 max-w-xl p-2 flex items-center justify-between text-xs md:text-base">
        {links.map((link, index) => {
          const isActive = pathname === link.link;
          return (
            <li key={index}>
              <Link
                href={link.link}
                className={`${
                  isActive ? "text-blue-500" : "text-gray-500"
                } flex flex-col items-center space-y-2`}
              >
                {link.icon}
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BottomTabs;
