"use client";

import StrathmoreImage from "../../assets/images/universities/strathmore-university.jpg";
import StrathmoreLogo from "../../assets/images/logos/strathmore-logo.jpg";

import DaystarImage from "../../assets/images/universities/daystar-university.png";
import DaystarLogo from "../../assets/images/logos/daystar-logo.jpg";

import MKUImage from "../../assets/images/universities/mku.jpg";
import MKULogo from "../../assets/images/logos/mku-logo.jpg";

import RiaraImage from "../../assets/images/universities/riara-university.jpg";
import RiaraLogo from "../../assets/images/logos/riara-logo.jpg";

import UONImage from "../../assets/images/universities/uon.webp";
import UONLogo from "../../assets/images/logos/uon-logo.jpg";

import USIUImage from "../../assets/images/universities/usiu.jpg";
import USIULogo from "../../assets/images/logos/usiu-logo.png";

import Image from "next/image";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const universities = [
  {
    id: 1,
    name: "Strathmore University",
    imageLink: StrathmoreImage,
    logo: StrathmoreLogo,
  },
  {
    id: 2,
    name: "Daystar University",
    imageLink: DaystarImage,
    logo: DaystarLogo,
  },
  {
    id: 3,
    name: "Mount Kenya University",
    imageLink: MKUImage,
    logo: MKULogo,
  },
  {
    id: 4,
    name: "Riara University",
    imageLink: RiaraImage,
    logo: RiaraLogo,
  },
  {
    id: 5,
    name: "University of Nairobi",
    imageLink: UONImage,
    logo: UONLogo,
  },
  {
    id: 6,
    name: "United States International University",
    imageLink: USIUImage,
    logo: USIULogo,
  },
];

const SearchUniversities = () => {
  const [input, setInput] = useState<string>("");

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <div className="space-y-4">
      <div className="flex bg-[#ece6f0] w-11/12 max-w-xs mx-auto rounded-md items-center pr-4">
        <input
          type="text"
          value={input}
          placeholder="Search universities"
          onChange={(e) => setInput(e.target.value)}
          className="p-2 flex-1 bg-transparent focus:outline-none"
        />
        <CiSearch size={30} />
      </div>
      <div className="grid grid-cols-2 gap-2 max-w-3xl mx-auto">
        {filteredUniversities.map((university, index) => (
          <div
            className="bg-[#ece6f0] border rounded-md border-slate-400"
            key={index}
          >
            {/* Header */}
            <div className="flex justify-between p-2">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-[#64558f] rounded-full flex flex-shrink-0 items-center justify-center">
                  <p className="text-white">{university.name[0]}</p>
                </div>
                <div>
                  <h1 className="text-xs font-semibold flex-wrap">
                    {university.name}
                  </h1>
                  <h2 className="text-xs font-light">University</h2>
                </div>
              </div>
              <IoMdMore />
            </div>
            {/* Image */}
            <Image
              src={university.imageLink}
              alt={university.name}
              className="object-cover w-full h-20"
            />
            <div className="space-y-2 p-2">
              <h2 className="text-sm">{university.name}</h2>
              <h3 className="text-xs">Subtitle</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchUniversities;
