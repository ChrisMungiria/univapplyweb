import Image from "next/image";
import Placeholder from "../../assets/placeholder-image.png";

const visa_requirements = [
  {
    id: 1,
    title: "Title",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    id: 2,
    title: "Title",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
];

const VisaRequirements = () => {
  return (
    <div className="w-11/12 max-w-lg mx-auto space-y-2">
      <h2 className="capitalize text-center my-4">
        Latest Visa requirement changes
      </h2>
      {visa_requirements.map((requirement, index) => (
        <div key={index} className="p-2 border rounded-md flex gap-2">
          <Image
            alt="placeholder"
            src={Placeholder}
            className="w-20 h-auto object-cover"
          />
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">{requirement.title}</h2>
            <p className="text-xs">{requirement.description}</p>
            <button className="p-1 border border-slate-500 bg-gray-200 text-xs rounded-md">
              Button
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisaRequirements;
