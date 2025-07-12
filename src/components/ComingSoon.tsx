import { Rocket, Code, Gamepad2 } from "lucide-react";

const ComingSoon = () => {
  return (
    <section id="coming-soon" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-burbank text-gaming-green mb-4">
            MORE MODS COMING SOON
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            The modding journey doesn't end here. Exciting new projects are in development that will push the boundaries of Minecraft gameplay even further.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Coming Soon Display */}
          <div className="gaming-card text-center py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gaming-green/5 to-neon-blue/5"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gaming-green/20 flex items-center justify-center">
                <Rocket className="w-12 h-12 text-gaming-green" />
              </div>
              <h3 className="text-3xl font-burbank text-gaming-green mb-4">SECRET PROJECTS IN DEVELOPMENT</h3>
              <p className="text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
                Revolutionary mod concepts are being crafted in the development lab. Each new creation promises to bring unique mechanics and unforgettable experiences to Minecraft.
              </p>
              <div className="flex justify-center items-center space-x-4">
                <div className="flex items-center space-x-2 text-gaming-green">
                  <div className="w-2 h-2 bg-gaming-green rounded-full glow-pulse"></div>
                  <span className="font-burbank">INNOVATION IN PROGRESS</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Development Focus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="gaming-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gaming-green/20 flex items-center justify-center">
                <Code className="w-8 h-8 text-gaming-green" />
              </div>
              <h3 className="text-xl font-burbank text-gaming-green mb-3">ADVANCED MECHANICS</h3>
              <p className="text-muted-foreground font-inter">
                Exploring cutting-edge gameplay mechanics that seamlessly integrate with Minecraft's core systems.
              </p>
            </div>
            <div className="gaming-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gaming-green/20 flex items-center justify-center">
                <Gamepad2 className="w-8 h-8 text-gaming-green" />
              </div>
              <h3 className="text-xl font-burbank text-gaming-green mb-3">MULTIPLAYER FOCUS</h3>
              <p className="text-muted-foreground font-inter">
                Designing engaging multiplayer experiences that bring communities together in new ways.
              </p>
            </div>
            <div className="gaming-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gaming-green/20 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-gaming-green" />
              </div>
              <h3 className="text-xl font-burbank text-gaming-green mb-3">INNOVATION FIRST</h3>
              <p className="text-muted-foreground font-inter">
                Pushing boundaries with never-before-seen concepts that redefine what's possible in modding.
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="gaming-card text-center mt-12 neon-border-gaming-green">
            <h3 className="text-2xl font-burbank text-gaming-green mb-4">STAY UPDATED</h3>
            <p className="text-muted-foreground font-inter mb-6">
              Be the first to know when new mods are released and get exclusive behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 bg-secondary border border-border rounded-lg font-inter text-foreground placeholder-muted-foreground flex-1"
              />
              <button className="px-6 py-3 bg-gaming-green text-background font-burbank rounded-lg hover:bg-gaming-green/90 transition-colors">
                NOTIFY ME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;