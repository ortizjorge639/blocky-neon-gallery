import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlushieShowcase from "@/components/PlushieShowcase";
import BaseballShowcase from "@/components/BaseballShowcase";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PlushieShowcase />
      <BaseballShowcase />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default Index;
