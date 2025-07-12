import { Target, Zap, Shield } from "lucide-react";
import Carousel from "./Carousel";

const BaseballShowcase = () => {
  const baseballImages = [
    {
      id: "baseball-1",
      image: "/lovable-uploads/00bd16be-42f4-4045-8f58-e828ac1f447e.png",
      title: "Night Field Combat",
      description: "Tactical baseball combat under the cover of darkness. Master precision targeting with enhanced crosshair mechanics."
    },
    {
      id: "baseball-2",
      image: "/lovable-uploads/850a348d-33c2-4c17-ba00-3f4520ed5a97.png", 
      title: "Stealth Operations",
      description: "Navigate through challenging terrain while wielding weaponized baseball equipment for strategic advantage."
    },
    {
      id: "baseball-3",
      image: "/lovable-uploads/42bb7b27-6da1-48c7-b0f7-ad4904d6f5f8.png",
      title: "Target Engagement",
      description: "Engage hostile targets at long range using advanced baseball projectile systems in immersive field environments."
    }
  ];
  return (
    <section id="baseball-mod" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-burbank text-neon-red mb-4">
            WEAPONIZED BASEBALL MOD
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Transform America's favorite pastime into the ultimate combat system. Featuring explosive baseballs, tactical bats, and field-based warfare mechanics.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Baseball Mod Carousel */}
          <Carousel 
            items={baseballImages}
            autoScrollInterval={5000}
            className="mb-12"
          />
          
          {/* Preview Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="gaming-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-neon-red/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-neon-red" />
              </div>
              <h3 className="text-xl font-burbank text-neon-red mb-3">EXPLOSIVE BASEBALLS</h3>
              <p className="text-muted-foreground font-inter">
                Craft special baseballs with varying explosive properties and tactical effects for strategic gameplay.
              </p>
            </div>
            <div className="gaming-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-neon-red/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-neon-red" />
              </div>
              <h3 className="text-xl font-burbank text-neon-red mb-3">TACTICAL COMBAT</h3>
              <p className="text-muted-foreground font-inter">
                Master precise aiming and timing mechanics in intense baseball-themed combat scenarios.
              </p>
            </div>
            <div className="gaming-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-neon-red/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-neon-red" />
              </div>
              <h3 className="text-xl font-burbank text-neon-red mb-3">FIELD WARFARE</h3>
              <p className="text-muted-foreground font-inter">
                Engage in epic multiplayer battles across custom baseball stadiums with team-based objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseballShowcase;