import Image from "next/image";
import Avatar from "../../assets/3d_avatar.png";

// Icons
import { FaArrowRight } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

type UniversityCommunicationsProps = {
  title?: boolean;
};

const communications = [
  {
    id: 1,
    title: "University of that place",
    description: "Update on enrollment",
  },
  {
    id: 2,
    title: "University of that place",
    description: "Update on enrollment",
  },
];

const UniversityCommunications = ({ title }: UniversityCommunicationsProps) => {
  return (
    <div className="w-11/12 max-w-xs mx-auto my-2 bg-gray-200 rounded-md p-2">
      {title ? (
        <h1 className="capitalize text-center">
          Latest Comms from universities
        </h1>
      ) : null}

      {communications.map((communication) => (
        <div
          key={communication.id}
          className="p-3 bg-gray-100 w-full flex flex-row justify-between items-center my-1"
        >
          <div className="w-8 h-8 bg-white rounded-full">
            <Image src={Avatar} alt="Avatar" />
          </div>
          <div>
            <p>{communication.title}</p>
            <p className="text-center text-xs">{communication.description}</p>
          </div>
          <div className="flex-row items-center gap-2 flex">
            <FaShareAlt size={18} color="black" />
            <FaArrowRight size={18} color="black" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniversityCommunications;
