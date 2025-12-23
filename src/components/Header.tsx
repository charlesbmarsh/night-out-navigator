import { Beer, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Beer className="h-8 w-8 text-primary animate-float" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse" />
          </div>
          <span className="font-display font-bold text-xl gradient-text">
            Blackout Buddy
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavItem icon={<MapPin className="h-4 w-4" />} label="Map" active />
          <NavItem icon={<Users className="h-4 w-4" />} label="Squad" />
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="glass" size="sm">
            Join Session
          </Button>
          <Button variant="glow" size="sm">
            Create Session
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ 
  icon, 
  label, 
  active 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
}) => (
  <button
    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
      active 
        ? "bg-primary/10 text-primary" 
        : "text-muted-foreground hover:text-foreground hover:bg-muted"
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default Header;
