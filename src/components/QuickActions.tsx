import { Phone, Siren, Home, Coffee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const QuickActions = () => {
  const actions = [
    { 
      icon: Siren, 
      label: "Alert Squad", 
      color: "bg-destructive hover:bg-destructive/90",
      action: () => toast.error("🚨 Alert sent to your squad!")
    },
    { 
      icon: Home, 
      label: "Call Uber", 
      color: "bg-primary hover:bg-primary/90",
      action: () => toast.success("Opening Uber...")
    },
    { 
      icon: Coffee, 
      label: "Water Break", 
      color: "bg-accent hover:bg-accent/90",
      action: () => toast.info("💧 Good idea! Stay hydrated!")
    },
    { 
      icon: Users, 
      label: "Rally Point", 
      color: "bg-secondary hover:bg-secondary/90",
      action: () => toast.success("📍 Rally point set! Squad notified.")
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Button
            key={action.label}
            variant="ghost"
            className={`flex flex-col h-auto py-3 gap-1 ${action.color} text-foreground`}
            onClick={action.action}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{action.label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default QuickActions;
