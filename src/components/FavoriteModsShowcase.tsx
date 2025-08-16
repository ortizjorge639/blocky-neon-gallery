import Carousel from "./Carousel";
import GradientText from "./GradientText";

const FavoriteModsShowcase = () => {
  const favoriteModImages = [
    {
      id: "pixelmon-essentials-1",
      image: "/lovable-uploads/fc45668d-3e17-4fcd-83a1-7a9fd0e49893.png",
      title: "PixelMon x Essentials",
      description: "Pixelmon is a Minecraft mod that brings Pokémon into the game, letting players catch, battle, and trade Pokémon, explore new biomes, and use items like Poké Balls and TMs, while Essentials enhances multiplayer by making it easy to host worlds, chat, share images, and play with friends, all while adding quality-of-life improvements and broad compatibility with other mods. Find Pixelmon on CurseForge: https://www.curseforge.com/minecraft/mc-mods/pixelmon and Essentials on CurseForge: https://www.curseforge.com/minecraft/mc-mods/essential-mod."
    },
    {
      id: "pixelmon-essentials-2",
      image: "/lovable-uploads/5ebfa614-c7ae-47fe-8a32-ef1d6ed16003.png",
      title: "PixelMon x Essentials",
      description: "Pixelmon is a Minecraft mod that brings Pokémon into the game, letting players catch, battle, and trade Pokémon, explore new biomes, and use items like Poké Balls and TMs, while Essentials enhances multiplayer by making it easy to host worlds, chat, share images, and play with friends, all while adding quality-of-life improvements and broad compatibility with other mods. Find Pixelmon on CurseForge: https://www.curseforge.com/minecraft/mc-mods/pixelmon and Essentials on CurseForge: https://www.curseforge.com/minecraft/mc-mods/essential-mod."
    }
  ];

  return (
    <section id="favorite-mods" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientText 
            className="text-5xl md:text-6xl font-roboto font-bold mb-4"
            colors={["hsl(var(--neon-blue))", "hsl(var(--primary))", "hsl(var(--neon-blue))"]}
            animationSpeed={6}
          >
            WILLIAM'S FAVORITE MODS
          </GradientText>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Discover the mods that William loves to play and recommends. These carefully selected modifications enhance gameplay and bring new adventures to your Minecraft world.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            items={favoriteModImages}
            autoScrollInterval={8000}
            className="mb-12"
          />
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="gaming-card text-center">
              <h3 className="text-xl font-burbank text-neon-blue mb-3">POKEMON ADVENTURE</h3>
              <p className="text-muted-foreground font-inter">
                Catch, battle, and trade Pokémon in the Minecraft world with authentic mechanics and stunning visuals.
              </p>
            </div>
            <div className="gaming-card text-center">
              <h3 className="text-xl font-burbank text-neon-blue mb-3">MULTIPLAYER ENHANCED</h3>
              <p className="text-muted-foreground font-inter">
                Essentials mod makes multiplayer seamless with easy world hosting, chat improvements, and social features.
              </p>
            </div>
            <div className="gaming-card text-center">
              <h3 className="text-xl font-burbank text-neon-blue mb-3">QUALITY OF LIFE</h3>
              <p className="text-muted-foreground font-inter">
                Both mods include numerous quality-of-life improvements and broad compatibility with other popular mods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteModsShowcase;