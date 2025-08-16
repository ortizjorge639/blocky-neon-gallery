import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlushieShowcase from "@/components/PlushieShowcase";
import BaseballShowcase from "@/components/BaseballShowcase";
import FavoriteModsShowcase from "@/components/FavoriteModsShowcase";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import Squares from "@/components/Squares";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <Squares 
          direction="diagonal" 
          speed={0.5} 
          borderColor="rgba(153, 153, 153, 0.1)" 
          squareSize={60}
          hoverFillColor="rgba(34, 34, 34, 0.2)"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <PlushieShowcase />
        <BaseballShowcase />
        <FavoriteModsShowcase />
        <ComingSoon />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
