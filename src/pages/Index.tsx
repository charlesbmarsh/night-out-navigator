import Header from "@/components/Header";
import MapView from "@/components/MapView";
import GroupChat from "@/components/GroupChat";
import DrinkTracker from "@/components/DrinkTracker";
import ExpenseTracker from "@/components/ExpenseTracker";
import SquadStatus from "@/components/SquadStatus";
import QuickActions from "@/components/QuickActions";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main content */}
      <main className="pt-20 pb-6 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero section with session info */}
          <div className="mb-6 animate-fade-in">
            <h1 className="font-display text-3xl font-bold mb-2">
              <span className="gradient-text">Saturday Night Out</span>
            </h1>
            <p className="text-muted-foreground">
              4 buddies • Started at 9:30 PM • Downtown Bar District
            </p>
          </div>

          {/* Quick actions */}
          <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <QuickActions />
          </div>

          {/* Main grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - Map */}
            <div className="lg:col-span-2 space-y-6">
              <div className="h-[400px] animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <MapView />
              </div>
              
              {/* Bottom row on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  <DrinkTracker />
                </div>
                <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                  <ExpenseTracker />
                </div>
              </div>
            </div>

            {/* Right column - Chat & Status */}
            <div className="space-y-6">
              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <SquadStatus />
              </div>
              
              <Card className="glass border-border/30 h-[400px] flex flex-col animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="p-4 border-b border-border/30 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-semibold">Squad Chat</h3>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs text-muted-foreground">4 online</span>
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <GroupChat />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Index;
