import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MapPin, 
  Users, 
  DollarSign, 
  MessageCircle, 
  Shield, 
  Smartphone,
  ArrowRight,
  Check,
  Zap,
  Bluetooth,
  Activity,
  Bell,
  TrendingDown,
  Clock,
  Car
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Bluetooth,
      title: "Bluetooth Breathalyzer Sync",
      description: "Connect your breathalyzer device instantly. Real-time BAC readings sync directly to your app."
    },
    {
      icon: Activity,
      title: "Live BAC Monitoring",
      description: "Track your blood alcohol content throughout the night with beautiful charts and trends."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified when you're approaching your limit. Your squad sees when you need backup."
    },
    {
      icon: MapPin,
      title: "Squad Location",
      description: "Always know where your friends are. Real-time GPS keeps everyone connected."
    },
    {
      icon: Car,
      title: "Safe Ride Home",
      description: "One-tap Uber integration when your BAC says it's time to call it a night."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Emergency alerts, check-in reminders, and peace of mind for you and your friends."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Pair Your Breathalyzer",
      description: "Connect any Bluetooth breathalyzer device in seconds. We support all major brands."
    },
    {
      number: "02",
      title: "Create a Session",
      description: "Start a night out and invite your squad. Everyone's BAC levels sync automatically."
    },
    {
      number: "03",
      title: "Blow & Know",
      description: "Take readings anytime. Your squad can see when someone needs water or a break."
    }
  ];

  const compatibleDevices = [
    "BACtrack",
    "Alcohawk", 
    "DrinkMate",
    "SoberLink",
    "Floome"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">Blackout Buddy</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/app">
              <Button variant="ghost" size="sm">Open App</Button>
            </Link>
            <Link to="/install">
              <Button size="sm" className="gap-2">
                <Smartphone className="h-4 w-4" />
                Install
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Bluetooth className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Breathalyzer Connected</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Your BAC,
            <br />
            <span className="gradient-text">Your Squad's Safety</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Connect your Bluetooth breathalyzer and share real-time BAC readings with your squad. 
            Know when to slow down, when to hydrate, and when to call it a night.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/app">
              <Button size="xl" variant="glow" className="gap-2">
                Try the Demo
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/install">
              <Button size="xl" variant="glass" className="gap-2">
                <Smartphone className="h-5 w-5" />
                Install App
              </Button>
            </Link>
          </div>

          {/* Breathalyzer Preview */}
          <div className="mt-16 relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="glass rounded-2xl border border-border/30 p-6 max-w-3xl mx-auto shadow-2xl shadow-primary/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* BAC Display */}
                <Card className="glass p-6 relative overflow-hidden">
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs text-success font-medium">Connected</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Bluetooth className="h-5 w-5 text-primary" />
                    <span className="font-semibold">BACtrack Pro</span>
                  </div>
                  <div className="text-center py-6">
                    <div className="text-6xl font-display font-bold gradient-text mb-2">0.04</div>
                    <div className="text-sm text-muted-foreground">Blood Alcohol Content</div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="px-3 py-1 rounded-full bg-success/20 text-success font-medium">
                      Safe Zone
                    </div>
                  </div>
                </Card>
                
                {/* Squad BAC Status */}
                <Card className="glass p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Squad Status</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "You", bac: "0.04", status: "safe" },
                      { name: "Mike", bac: "0.06", status: "safe" },
                      { name: "Sarah", bac: "0.08", status: "moderate" },
                      { name: "Jake", bac: "0.02", status: "safe" },
                    ].map((member) => (
                      <div key={member.name} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-foreground">
                            {member.name[0]}
                          </div>
                          <span className="text-sm font-medium">{member.name}</span>
                        </div>
                        <div className={`text-sm font-mono font-bold ${
                          member.status === "safe" ? "text-success" : 
                          member.status === "moderate" ? "text-warning" : "text-destructive"
                        }`}>
                          {member.bac}%
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </section>

      {/* Compatible Devices */}
      <section className="py-12 px-4 border-y border-border/30 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-sm text-muted-foreground mb-6">Works with all major Bluetooth breathalyzers</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {compatibleDevices.map((device) => (
              <div key={device} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Bluetooth className="h-4 w-4" />
                <span className="font-medium">{device}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Smart Drinking,
              <br />
              <span className="gradient-text">Safer Nights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your breathalyzer becomes a safety network for your entire squad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="glass border-border/30 p-6 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Connect, sync, and stay safe together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-8 w-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAC Zones Explainer */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Know Your
                <br />
                <span className="gradient-text">Limits</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our color-coded system makes it easy to understand where you stand. 
                Your squad sees the same status, so everyone can look out for each other.
              </p>
              <div className="space-y-4">
                {[
                  { range: "0.00 - 0.05", label: "Safe Zone", color: "success", desc: "You're good! Stay hydrated." },
                  { range: "0.05 - 0.08", label: "Caution", color: "warning", desc: "Slow down, consider water." },
                  { range: "0.08+", label: "Stop", color: "destructive", desc: "Time to switch to water and food." }
                ].map((zone) => (
                  <div key={zone.range} className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${zone.color} flex-shrink-0 mt-1.5`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm">{zone.range}</span>
                        <span className={`text-${zone.color} font-semibold`}>{zone.label}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{zone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="glass border-border/30 p-8">
                <div className="text-center mb-6">
                  <TrendingDown className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-display font-semibold text-lg">Tonight's Trend</h3>
                </div>
                {/* Simplified BAC Chart Visualization */}
                <div className="relative h-40 flex items-end justify-around gap-2 px-4">
                  {[0.02, 0.04, 0.06, 0.05, 0.04, 0.03].map((bac, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 flex-1">
                      <div 
                        className={`w-full rounded-t-sm transition-all ${
                          bac < 0.05 ? "bg-success" : bac < 0.08 ? "bg-warning" : "bg-destructive"
                        }`}
                        style={{ height: `${(bac / 0.08) * 100}%` }}
                      />
                      <span className="text-xs text-muted-foreground">{9 + i}pm</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Last reading: 2 min ago</span>
                  </div>
                  <Button size="sm" variant="ghost" className="gap-1">
                    <Activity className="h-4 w-4" />
                    Test Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="glass border-border/30 p-6 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                    <Bell className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <div className="font-semibold">Squad Alert</div>
                    <div className="text-xs text-muted-foreground">Just now</div>
                  </div>
                </div>
                <p className="text-sm mb-3">Sarah just hit 0.08 BAC. Someone should check in! 💧</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" className="flex-1">Message</Button>
                  <Button size="sm" variant="ghost" className="flex-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    Locate
                  </Button>
                </div>
              </Card>
              <Card className="glass border-border/30 p-4 -mt-4 ml-8 -rotate-2">
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Need a ride?</div>
                    <div className="text-xs text-muted-foreground">One tap to call an Uber</div>
                  </div>
                  <Button size="sm">Book</Button>
                </div>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Your Squad Has
                <br />
                <span className="gradient-text">Your Back</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Automatic alerts when someone's BAC gets too high",
                  "One-tap Uber when it's time to head home",
                  "Squad-wide visibility keeps everyone accountable",
                  "Emergency contacts notified if something goes wrong",
                  "Morning recap shows the night's journey safely"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass border-border/30 p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Bluetooth className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Drink Smarter?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Connect your breathalyzer and make every night out safer for your whole squad.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/install">
                  <Button size="xl" variant="glow" className="gap-2">
                    <Smartphone className="h-5 w-5" />
                    Install Now
                  </Button>
                </Link>
                <Link to="/app">
                  <Button size="xl" variant="outline" className="gap-2">
                    Try Demo First
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Activity className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold">Blackout Buddy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Blackout Buddy. Know your limits. 🍻
          </p>
        </div>
      </footer>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/3 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Landing;
