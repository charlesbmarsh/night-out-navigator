import { useState, useEffect } from "react";
import { Download, Share, X, Smartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for install prompt (Android/Desktop)
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    }
  };

  if (isInstalled) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="glass border-border/30 max-w-md w-full animate-fade-in">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-success/20 flex items-center justify-center">
              <Check className="h-10 w-10 text-success" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-2">Already Installed!</h2>
            <p className="text-muted-foreground mb-6">
              Blackout Buddy is ready to use from your home screen.
            </p>
            <Button variant="glow" onClick={() => window.location.href = "/"}>
              Open App
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-md">
        {/* App Icon */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl overflow-hidden shadow-2xl shadow-primary/30">
            <img 
              src="/icons/icon-512.png" 
              alt="Blackout Buddy" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-display text-3xl font-bold gradient-text mb-2">
            Blackout Buddy
          </h1>
          <p className="text-muted-foreground">
            Keep your squad safe on nights out
          </p>
        </div>

        {/* Install Card */}
        <Card className="glass border-border/30 mb-6 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              Install App
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {isIOS ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Install Blackout Buddy on your iPhone for the best experience.
                </p>
                <Button 
                  variant="glow" 
                  className="w-full"
                  onClick={() => setShowIOSInstructions(true)}
                >
                  <Share className="h-4 w-4 mr-2" />
                  How to Install
                </Button>
              </>
            ) : deferredPrompt ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Add Blackout Buddy to your home screen for quick access.
                </p>
                <Button variant="glow" className="w-full" onClick={handleInstall}>
                  <Download className="h-4 w-4 mr-2" />
                  Install Now
                </Button>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                Open this page in Safari (iPhone) or Chrome (Android) to install the app.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Features */}
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <FeatureItem emoji="📍" text="Real-time location tracking" />
          <FeatureItem emoji="💬" text="Group chat with auto-alerts" />
          <FeatureItem emoji="🍺" text="Drink safety monitoring" />
          <FeatureItem emoji="💸" text="Split bills & Uber costs" />
          <FeatureItem emoji="🔔" text="Battery & location alerts" />
        </div>

        {/* Back link */}
        <div className="text-center mt-8">
          <Button variant="ghost" onClick={() => window.location.href = "/"}>
            Continue to Web App
          </Button>
        </div>
      </div>

      {/* iOS Instructions Modal */}
      {showIOSInstructions && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <Card className="glass border-border/30 max-w-md w-full animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Install on iPhone</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowIOSInstructions(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Step number={1} text="Tap the Share button at the bottom of Safari" />
                <Step number={2} text='Scroll down and tap "Add to Home Screen"' />
                <Step number={3} text='Tap "Add" in the top right corner' />
              </div>
              <div className="pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground text-center">
                  The app will appear on your home screen with the Blackout Buddy icon
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

const FeatureItem = ({ emoji, text }: { emoji: string; text: string }) => (
  <div className="flex items-center gap-3 glass rounded-lg p-3">
    <span className="text-xl">{emoji}</span>
    <span className="text-sm">{text}</span>
  </div>
);

const Step = ({ number, text }: { number: number; text: string }) => (
  <div className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
      <span className="text-xs font-bold text-primary">{number}</span>
    </div>
    <p className="text-sm">{text}</p>
  </div>
);

export default Install;
