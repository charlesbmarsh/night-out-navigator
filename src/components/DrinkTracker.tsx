import { useState } from "react";
import { Plus, Minus, Wine, Beer, Martini, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DrinkTracker = () => {
  const [drinks, setDrinks] = useState([
    { id: 1, type: "beer", name: "Beer", count: 2, icon: Beer },
    { id: 2, type: "wine", name: "Wine", count: 1, icon: Wine },
    { id: 3, type: "cocktail", name: "Cocktails", count: 1, icon: Martini },
  ]);

  const totalDrinks = drinks.reduce((sum, d) => sum + d.count, 0);
  const safetyLevel = totalDrinks <= 3 ? "safe" : totalDrinks <= 5 ? "moderate" : "warning";

  const updateCount = (id: number, delta: number) => {
    setDrinks(drinks.map(d => 
      d.id === id ? { ...d, count: Math.max(0, d.count + delta) } : d
    ));
  };

  return (
    <Card className="glass border-border/30" glow>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span>Drink Tracker</span>
          <div className={`
            flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
            ${safetyLevel === "safe" ? "bg-success/20 text-success" : ""}
            ${safetyLevel === "moderate" ? "bg-warning/20 text-warning" : ""}
            ${safetyLevel === "warning" ? "bg-destructive/20 text-destructive animate-pulse" : ""}
          `}>
            {safetyLevel === "warning" && <AlertTriangle className="h-4 w-4" />}
            {totalDrinks} drinks
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress bar */}
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className={`
              h-full rounded-full transition-all duration-500
              ${safetyLevel === "safe" ? "bg-gradient-to-r from-success to-success/60" : ""}
              ${safetyLevel === "moderate" ? "bg-gradient-to-r from-warning to-warning/60" : ""}
              ${safetyLevel === "warning" ? "bg-gradient-to-r from-destructive to-destructive/60" : ""}
            `}
            style={{ width: `${Math.min((totalDrinks / 8) * 100, 100)}%` }}
          />
          {/* Safety markers */}
          <div className="absolute top-0 left-[37.5%] w-0.5 h-full bg-background/50" />
          <div className="absolute top-0 left-[62.5%] w-0.5 h-full bg-background/50" />
        </div>

        {/* Drink types */}
        <div className="grid grid-cols-3 gap-3">
          {drinks.map((drink) => {
            const Icon = drink.icon;
            return (
              <div 
                key={drink.id}
                className="glass rounded-xl p-3 text-center space-y-2"
              >
                <Icon className="h-6 w-6 mx-auto text-primary" />
                <span className="text-sm text-muted-foreground block">{drink.name}</span>
                <div className="flex items-center justify-center gap-2">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-7 w-7"
                    onClick={() => updateCount(drink.id, -1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="font-display font-bold text-lg w-6">{drink.count}</span>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-7 w-7"
                    onClick={() => updateCount(drink.id, 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety message */}
        {safetyLevel === "warning" && (
          <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-sm text-destructive animate-slide-up">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>Take it easy! Consider water and some food.</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DrinkTracker;
