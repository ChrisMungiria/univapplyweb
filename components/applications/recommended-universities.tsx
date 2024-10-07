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

const RecommendedUniversities = () => {
  return (
    <div className="p-4 space-y-3 pb-20 max-w-xl mx-auto">
      <div>
        <h1>Heading</h1>
        <h2 className="text-gray-600 text-sm">Subheading</h2>
      </div>
      <div className="grid grid-cols-2 gap-2 place-items-center">
        {universities.map((item, index) => (
          <div className="p-2 border rounded-md h-64" key={index}>
            <Image
              src={item.logo}
              alt={item.name}
              className="object-contain h-20 w-20"
            />
            <h1 className="text-sm font-bold">{item.name}</h1>
            <p className="text-xs text-gray-600">
              Body text for whatever you would like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedUniversities;
