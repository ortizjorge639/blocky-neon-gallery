import { Target, Zap, Shield } from "lucide-react";

const BaseballShowcase = () => {
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
          {/* Coming Soon Display */}
          <div className="gaming-card text-center py-20 neon-border-red">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-neon-red/20 flex items-center justify-center">
              <Target className="w-12 h-12 text-neon-red" />
            </div>
            <h3 className="text-3xl font-burbank text-neon-red mb-4">FIELD DEMO COMING SOON</h3>
            <p className="text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
              Epic baseball field demonstrations showcasing explosive gameplay, tactical combat, and multiplayer warfare mechanics are currently in development.
            </p>
            <div className="inline-flex items-center space-x-2 text-neon-red">
              <div className="w-2 h-2 bg-neon-red rounded-full glow-pulse"></div>
              <span className="font-burbank">IN DEVELOPMENT</span>
            </div>
          </div>
          
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