import { Battery, MapPin, Wifi, WifiOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SquadMember {
  id: number;
  name: string;
  avatar: string;
  battery: number;
  location: string;
  isOnline: boolean;
  lastSeen?: string;
}

const SquadStatus = () => {
  const members: SquadMember[] = [
    { id: 1, name: "You", avatar: "🍺", battery: 68, location: "Skybar", isOnline: true },
    { id: 2, name: "Mike", avatar: "🎸", battery: 45, location: "Skybar", isOnline: true },
    { id: 3, name: "Sarah", avatar: "💃", battery: 82, location: "Food Truck", isOnline: true },
    { id: 4, name: "Jake", avatar: "🎤", battery: 12, location: "Skybar", isOnline: true },
  ];

  return (
    <Card className="glass border-border/30" glow>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          Squad Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {members.map((member) => (
          <div 
            key={member.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-xl">
                {member.avatar}
              </div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background
                ${member.isOnline ? "bg-success" : "bg-muted-foreground"}
              `} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{member.name}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span className="truncate">{member.location}</span>
              </div>
            </div>

            {/* Status indicators */}
            <div className="flex items-center gap-2">
              {/* Battery */}
              <div className={`
                flex items-center gap-1 px-2 py-1 rounded text-xs
                ${member.battery <= 20 
                  ? "bg-destructive/20 text-destructive animate-pulse" 
                  : member.battery <= 40 
                    ? "bg-warning/20 text-warning"
                    : "bg-muted text-muted-foreground"
                }
              `}>
                <Battery className="h-3 w-3" />
                {member.battery}%
              </div>

              {/* Connection */}
              {member.isOnline ? (
                <Wifi className="h-4 w-4 text-success" />
              ) : (
                <WifiOff className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SquadStatus;
