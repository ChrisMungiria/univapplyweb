import RecommendedUniversities from "@/components/applications/recommended-universities";
import UniversityCommunications from "@/components/home/university-communications";

const Applications = () => {
  return (
    <div className="pt-5">
      <UniversityCommunications />
      <h2 className="text-center text-lg">Recommended Universities for you</h2>
      <RecommendedUniversities />
    </div>
  );
};

export default Applications;
