import Carousel from "./Carousel";

const PlushieShowcase = () => {
  const plushieImages = [
    {
      id: "plushie-1",
      image: "/lovable-uploads/c3271c58-c865-402a-aa25-c54728fed18a.png",
      title: "Plushie Museum Display",
      description: "A beautifully crafted glass display case showcasing the adorable plushie collection in a modern museum setting."
    },
    {
      id: "plushie-2", 
      image: "/lovable-uploads/74b845a6-ea25-4c4b-9b9b-4c046fe7508f.png",
      title: "Interactive Plushie Exhibit",
      description: "Visitors can view different plushies through an interactive glass chamber with dynamic lighting effects."
    },
    {
      id: "plushie-3",
      image: "/lovable-uploads/1d3e21f8-e862-4470-8492-f03f3c605be3.png", 
      title: "Plushie Collection Gallery",
      description: "A comprehensive view of the plushie mod's collection featuring various characters and designs in a pristine display."
    },
    {
      id: "plushie-4",
      image: "/lovable-uploads/a0592d71-e01d-406b-9525-664a07b31b04.png",
      title: "Golden Plushie Showcase",
      description: "Special golden edition plushies displayed in an elegant case, highlighting the premium quality and craftsmanship."
    },
    {
      id: "plushie-5",
      image: "/lovable-uploads/bbbfceef-d8f0-48b0-a7bf-bc0b11953f18.png",
      title: "Complete Museum Experience", 
      description: "The full plushie museum experience with visitors enjoying the interactive displays and detailed exhibitions."
    }
  ];

  return (
    <section id="plushie-mod" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-burbank text-neon-blue mb-4">
            PLUSHIE MOD MUSEUM
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Step into the enchanting world of collectible plushies. Each adorable creation brings personality and charm to your Minecraft experience, displayed in our state-of-the-art virtual museum.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            items={plushieImages}
            autoScrollInterval={6000}
            className="mb-12"
          />
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="gaming-card text-center">
              <h3 className="text-xl font-burbank text-neon-blue mb-3">COLLECTIBLE SYSTEM</h3>
              <p className="text-muted-foreground font-inter">
                Find, craft, and collect dozens of unique plushies with varying rarities and special abilities.
              </p>
            </div>
            <div className="gaming-card text-center">
              <h3 className="text-xl font-burbank text-neon-blue mb-3">MUSEUM DISPLAYS</h3>
              <p className="text-muted-foreground font-inter">
                Create beautiful display cases and museums to showcase your growing plushie collection.
              </p>
            </div>
            <div className="gaming-card text-center">
              <h3 className="text-xl font-burbank text-neon-blue mb-3">INTERACTIVE FEATURES</h3>
              <p className="text-muted-foreground font-inter">
                Plushies respond to player interaction with cute animations and special sound effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlushieShowcase;