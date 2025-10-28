import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import AvailableLaptops from "@/components/AvailableLaptops";
import DonateSection from "@/components/DonateSection";
import RequestForm from "@/components/RequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <AvailableLaptops />
      <DonateSection />
      <RequestForm />
      <Footer />
    </div>
  );
};

export default Index;
