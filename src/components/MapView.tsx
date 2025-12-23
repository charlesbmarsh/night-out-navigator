import { MapPin, Navigation } from "lucide-react";

const MapView = () => {
  const squadMembers = [
    { id: 1, name: "You", position: { top: "45%", left: "50%" }, status: "active", avatar: "🍺" },
    { id: 2, name: "Mike", position: { top: "30%", left: "35%" }, status: "active", avatar: "🎸" },
    { id: 3, name: "Sarah", position: { top: "60%", left: "65%" }, status: "moving", avatar: "💃" },
    { id: 4, name: "Jake", position: { top: "25%", left: "70%" }, status: "lowBattery", avatar: "🎤" },
  ];

  return (
    <div className="relative h-full w-full rounded-2xl overflow-hidden glass border border-border/30">
      {/* Map background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Glow spots */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <button className="glass p-2 rounded-lg hover:bg-muted transition-colors">
          <Navigation className="h-5 w-5 text-primary" />
        </button>
      </div>

      {/* Squad members on map */}
      {squadMembers.map((member) => (
        <div
          key={member.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ top: member.position.top, left: member.position.left }}
        >
          <div className="relative group cursor-pointer">
            {/* Pulse ring for active/moving status */}
            {member.status === "moving" && (
              <div className="absolute inset-0 -m-2 rounded-full bg-secondary/30 animate-ping" />
            )}
            {member.status === "lowBattery" && (
              <div className="absolute inset-0 -m-2 rounded-full bg-warning/30 animate-pulse" />
            )}
            
            {/* Avatar */}
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center text-2xl
              glass border-2 transition-all duration-300 group-hover:scale-110
              ${member.status === "active" ? "border-primary glow-primary" : ""}
              ${member.status === "moving" ? "border-secondary glow-secondary" : ""}
              ${member.status === "lowBattery" ? "border-warning" : ""}
            `}>
              {member.avatar}
            </div>

            {/* Status indicator */}
            <div className={`
              absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background
              ${member.status === "active" ? "bg-success" : ""}
              ${member.status === "moving" ? "bg-secondary" : ""}
              ${member.status === "lowBattery" ? "bg-warning animate-pulse" : ""}
            `} />

            {/* Name tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="glass px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                {member.name}
                {member.status === "lowBattery" && " ⚡12%"}
                {member.status === "moving" && " 🏃"}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Current location marker */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 glass px-3 py-2 rounded-lg">
        <MapPin className="h-4 w-4 text-primary" />
        <span className="text-sm text-muted-foreground">Downtown Bar District</span>
      </div>
    </div>
  );
};

export default MapView;
