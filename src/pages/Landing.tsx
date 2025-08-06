import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Zap, 
  TrendingDown, 
  Shield, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Leaf,
  DollarSign,
  Clock,
  Brain
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: TrendingDown,
      title: "Reduce Energy Costs",
      description: "Save 10-20% on your energy bills in less than 15 minutes"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Real-time consumption monitoring with predictive analytics"
    },
    {
      icon: Shield,
      title: "Verified Partners",
      description: "Access to top-rated US energy suppliers"
    },
    {
      icon: Leaf,
      title: "Green Energy",
      description: "100% renewable energy options for your business"
    }
  ];

  const benefits = [
    "Direct connection via Green Button API",
    "Automatic PDF invoice import with OCR",
    "Predictive AI for consumption optimization",
    "Multi-site dashboard for retail chains",
    "Integrated e-signature platform",
    "24/7 support for SMBs"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Ramp style */}
      <nav className="glass border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">EnergySync</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/onboarding">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/onboarding">
                <Button>Try Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Ramp style */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Cut your energy costs by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              10-20%
            </span>
            {" "}in 15 minutes
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            The AI-powered SaaS platform that helps US SMBs buy energy from verified partners 
            and monitor consumption in real-time with predictive analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/onboarding">
              <Button size="lg" className="w-full sm:w-auto shadow-lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="border-0 shadow-xl bg-gradient-card">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15 min</div>
                <div className="text-muted-foreground">Complete setup</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl bg-gradient-card">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-success mb-2">10-20%</div>
                <div className="text-muted-foreground">Average savings</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl bg-gradient-card">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">SMBs trust us</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features - Ramp style */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Everything your business needs
            </h2>
            <p className="text-xl text-muted-foreground">
              A complete solution to optimize your energy costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-xl bg-gradient-card hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Why choose EnergySync?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/onboarding">
                  <Button size="lg" className="shadow-lg">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-card hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <DollarSign className="w-10 h-10 text-success mb-6" />
                  <h3 className="text-xl font-semibold mb-3">Guaranteed Savings</h3>
                  <p className="text-muted-foreground">
                    Average 15% reduction on your energy bills
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-card hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <Clock className="w-10 h-10 text-info mb-6" />
                  <h3 className="text-xl font-semibold mb-3">Quick Setup</h3>
                  <p className="text-muted-foreground">
                    Automatic connection via Green Button API
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-card hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <Brain className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">AI Analytics</h3>
                  <p className="text-muted-foreground">
                    Predictive insights and smart alerts
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-card hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <Leaf className="w-10 h-10 text-success mb-6" />
                  <h3 className="text-xl font-semibold mb-3">100% Green</h3>
                  <p className="text-muted-foreground">
                    100% renewable energy options available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Ramp style */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to cut your energy costs?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join 500+ SMBs already saving with EnergySync's AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">EnergySync</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 EnergySync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;