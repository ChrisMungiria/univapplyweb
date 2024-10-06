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

const FeaturedUniversities = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-center">Our featured universities</h1>
      <div className="overflow-x-scroll flex gap-4">
        {universities.map((university, index) => (
          <div
            key={index}
            className="h-32 rounded-lg w-[300px] flex-shrink-0 overflow-hidden relative flex items-center justify-center"
          >
            <Image
              alt={university.name}
              src={university.imageLink}
              className="rounded-lg w-full h-auto opacity-50 absolute"
            />
            <Image
              alt={university.name}
              src={university.logo}
              className="rounded-lg w-auto h-10 absolute top-2 right-2"
            />
            <h2 className="opacity-100 z-40 absolute text-lg font-semibold text-center">
              {university.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedUniversities;
