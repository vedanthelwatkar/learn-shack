import CuratedByExperts from "@/components/home-page/CuratedByExperts";
import ExpertRoadmap from "@/components/home-page/ExpertRoadmap";
import LimitedScholarships from "@/components/home-page/LimitedScholarships";
import HeroBanner from "@/components/home-page/HeroBanner";
import StudentReviews from "@/components/home-page/StudentReviews";
import StudyAbroadCarousel from "@/components/home-page/StudyAbroadCarousel";
import UniversityCarousel from "@/components/home-page/UniversityCarousel";
import WhyLSE from "@/components/home-page/WhyLSE";
import Faq from "@/components/home-page/Faq";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <HeroBanner />
      <UniversityCarousel />
      <WhyLSE />
      <StudyAbroadCarousel />
      <CuratedByExperts />
      <StudentReviews />
      <ExpertRoadmap />
      <LimitedScholarships />
      <Faq />
    </div>
  );
};

export default Home;
