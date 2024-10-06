import FeaturedUniversities from "@/components/home/featured-universities";
import UniversityCommunications from "@/components/home/university-communications";
import VisaRequirements from "@/components/home/visa-requirements";

const Home = () => {
  return (
    <main className="pb-20">
      <FeaturedUniversities />
      <UniversityCommunications title />
      <VisaRequirements />
    </main>
  );
};

export default Home;
