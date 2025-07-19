import { Gamepad2, Sparkles, Zap } from "lucide-react";
import GradientText from "./GradientText";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-red/10 rounded-full blur-3xl glow-pulse"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto slide-in-up">
          <GradientText className="text-6xl md:text-8xl font-roboto font-bold mb-6">
            WILLIAM'S MOD SHOWCASE
          </GradientText>
          <h2 className="text-2xl md:text-4xl font-burbank text-neon-blue mb-4">
            2025
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-inter mb-12 max-w-2xl mx-auto">
            Discover epic Minecraft mods crafted with passion. From adorable plushies to weaponized sports equipment - experience the future of modding.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="gaming-card neon-border-blue hover:neon-border-blue px-8 py-4 font-burbank text-lg">
              EXPLORE MODS
            </button>
            <button className="gaming-card neon-border-red hover:neon-border-red px-8 py-4 font-burbank text-lg">
              VIEW GALLERY
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="gaming-card text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-neon-blue/20 flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors">
              <Sparkles className="w-8 h-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-burbank text-neon-blue mb-2">PLUSHIE MOD</h3>
            <p className="text-muted-foreground font-inter">
              Adorable collectible plushies that bring life and charm to your Minecraft world.
            </p>
          </div>

          <div className="gaming-card text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-neon-red/20 flex items-center justify-center group-hover:bg-neon-red/30 transition-colors">
              <Zap className="w-8 h-8 text-neon-red" />
            </div>
            <h3 className="text-xl font-burbank text-neon-red mb-2">BASEBALL MOD</h3>
            <p className="text-muted-foreground font-inter">
              Turn America's pastime into the ultimate weapon system for epic battles.
            </p>
          </div>

          <div className="gaming-card text-center group cursor-pointer opacity-60">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gaming-green/20 flex items-center justify-center group-hover:bg-gaming-green/30 transition-colors">
              <Gamepad2 className="w-8 h-8 text-gaming-green" />
            </div>
            <h3 className="text-xl font-burbank text-gaming-green mb-2">COMING SOON</h3>
            <p className="text-muted-foreground font-inter">
              More incredible mods are in development. Stay tuned for epic updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;