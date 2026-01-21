import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MapPin, 
  Users, 
  Beer, 
  DollarSign, 
  MessageCircle, 
  Shield, 
  Smartphone,
  ArrowRight,
  Check,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: MapPin,
      title: "Live Location Sharing",
      description: "Always know where your squad is. Real-time GPS tracking keeps everyone connected."
    },
    {
      icon: Users,
      title: "Squad Status",
      description: "See who's vibing, who needs a break, and who's ready to move to the next spot."
    },
    {
      icon: Beer,
      title: "Drink Tracker",
      description: "Keep tabs on your intake. Smart reminders help you pace yourself throughout the night."
    },
    {
      icon: DollarSign,
      title: "Expense Splitting",
      description: "Track who paid for what. Settle up easily the next day with automatic calculations."
    },
    {
      icon: MessageCircle,
      title: "Group Chat",
      description: "Dedicated chat for your night out. No more lost messages in cluttered group chats."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Emergency alerts, safe ride home features, and check-in reminders for peace of mind."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create a Session",
      description: "Start a new night out session and invite your friends to join."
    },
    {
      number: "02",
      title: "Squad Up",
      description: "Everyone joins with one tap. Instantly connected and ready to go."
    },
    {
      number: "03",
      title: "Hit the Town",
      description: "Track locations, split bills, and stay connected all night long."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Beer className="h-5 w-5 text-primary-foreground" />
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
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your squad's new best friend</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Never Lose Your
            <br />
            <span className="gradient-text">Squad Again</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            The ultimate night out companion. Track locations, split bills, coordinate moves, 
            and keep everyone safe — all in one app.
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

          {/* App Preview */}
          <div className="mt-16 relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="glass rounded-2xl border border-border/30 p-2 max-w-4xl mx-auto shadow-2xl shadow-primary/10">
              <div className="rounded-xl overflow-hidden bg-background/50 aspect-[16/10] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8 w-full max-w-2xl">
                  <Card className="glass p-4 col-span-2">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Live Map</span>
                    </div>
                    <div className="h-32 rounded-lg bg-muted/50 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Interactive Map View</span>
                    </div>
                  </Card>
                  <Card className="glass p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-4 w-4 text-secondary" />
                      <span className="font-semibold text-sm">Squad</span>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 rounded bg-muted/50" />
                      ))}
                    </div>
                  </Card>
                  <Card className="glass p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Beer className="h-4 w-4 text-warning" />
                      <span className="font-semibold text-sm">Drinks</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">3</div>
                  </Card>
                  <Card className="glass p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-success" />
                      <span className="font-semibold text-sm">Spent</span>
                    </div>
                    <div className="text-2xl font-bold text-success">$47</div>
                  </Card>
                  <Card className="glass p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-sm">Chat</span>
                    </div>
                    <div className="text-2xl font-bold">12</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Everything You Need for an
              <br />
              <span className="gradient-text">Epic Night Out</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From finding your friends to splitting the tab, we've got you covered.
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
              Get started in seconds. No complicated setup required.
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

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Why Your Squad
                <br />
                <span className="gradient-text">Needs This</span>
              </h2>
              <div className="space-y-4">
                {[
                  "No more \"where are you?\" texts every 5 minutes",
                  "Stop losing friends in crowded venues",
                  "End the awkward morning-after Venmo math",
                  "Keep everyone safe without being the mom friend",
                  "Actually remember where you went (and what you spent)"
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
            <div className="relative">
              <Card className="glass border-border/30 p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <div>
                      <div className="font-semibold">Mike</div>
                      <div className="text-xs text-muted-foreground">2 min ago</div>
                    </div>
                  </div>
                  <p className="text-sm">"I'm at the bar near the back, come find me! 🍻"</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>The Rusty Nail • 50ft away</span>
                  </div>
                </div>
              </Card>
              <Card className="glass border-border/30 p-6 absolute -bottom-4 -left-4 -rotate-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🍺</div>
                  <div>
                    <div className="font-semibold">Round 3</div>
                    <div className="text-xs text-muted-foreground">Sarah's buying!</div>
                  </div>
                </div>
              </Card>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Never Lose Your Squad?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Install Blackout Buddy now and make your next night out legendary.
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
              <Beer className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold">Blackout Buddy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Blackout Buddy. Drink responsibly. 🍻
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
