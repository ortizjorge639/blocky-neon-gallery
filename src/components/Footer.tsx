import { Github, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <h3 className="text-xl font-burbank text-neon-blue">
                WILLIAM'S MOD SHOWCASE
              </h3>
            </div>
            <p className="text-muted-foreground font-inter mb-6">
              Crafting the future of Minecraft modding with innovative gameplay mechanics and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary border border-border hover:border-neon-blue transition-colors flex items-center justify-center">
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary border border-border hover:border-neon-blue transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary border border-border hover:border-neon-blue transition-colors flex items-center justify-center">
                <Youtube className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary border border-border hover:border-neon-blue transition-colors flex items-center justify-center">
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-burbank text-foreground mb-4">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter">
                  Home
                </a>
              </li>
              <li>
                <a href="#plushie-mod" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter">
                  Plushie Mod
                </a>
              </li>
              <li>
                <a href="#baseball-mod" className="text-muted-foreground hover:text-neon-red transition-colors font-inter">
                  Baseball Mod
                </a>
              </li>
              <li>
                <a href="#coming-soon" className="text-muted-foreground hover:text-gaming-green transition-colors font-inter">
                  Coming Soon
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-burbank text-foreground mb-4">RESOURCES</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-inter text-sm">
            © 2025 William. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors font-inter text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;