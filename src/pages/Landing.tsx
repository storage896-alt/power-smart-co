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
      {/* Navigation - Ramp UX structure with EnergySync branding */}
      <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">EnergySync</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">AI Copilot</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Energy Analytics</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Facilities</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Integrations</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Pricing</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link to="/onboarding">
                <button className="text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2">
                  Sign in
                </button>
              </Link>
              <Link to="/onboarding">
                <button className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200">
                  Try Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Ramp structure with energy/AI focus */}
      <section className="bg-gradient-to-br from-energy-secondary via-gray-900 to-energy-secondary relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} className="w-full h-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-success rounded-full"></div>
                  ))}
                </div>
                <span className="text-white/90 text-sm">5 stars</span>
                <span className="text-white/70 text-sm">500+ facilities managers</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Plug-and-play energy{" "}
                <span className="block">management platform.</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-lg">
                AI-powered SaaS tool for facilities managers to reduce energy costs by 10-20% with smart analytics and automated controls.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="What's your work email?"
                    className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-l-lg border-none focus:ring-2 focus:ring-primary focus:outline-none min-w-80"
                  />
                  <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-r-lg transition-all duration-200">
                    Start free trial
                  </button>
                </div>
              </div>
              
              <Link to="/dashboard" className="text-white/90 hover:text-white font-medium inline-flex items-center">
                Try AI Copilot demo <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* AI Dashboard showcase */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-success" />
                      <span className="text-white font-medium">AI Insights</span>
                    </div>
                    <span className="text-success text-sm">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                    <span className="text-white font-medium">Energy Savings</span>
                    <span className="text-success">-18.4%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                    <span className="text-white font-medium">Monthly Cost</span>
                    <span className="text-white">$8,240</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                    <span className="text-white font-medium">Predicted Savings</span>
                    <span className="text-warning">$1,520</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer logos - Energy industry focus */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-12">
            500+ facilities managers have saved millions with EnergySync's AI-powered platform.
          </p>
          
          {/* Moving logo strip */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-12 items-center justify-center grayscale opacity-60">
              <div className="text-2xl font-bold text-gray-400">TESLA</div>
              <div className="text-2xl font-bold text-gray-400">IKEA</div>
              <div className="text-2xl font-bold text-gray-400">WALMART</div>
              <div className="text-2xl font-bold text-gray-400">GOOGLE</div>
              <div className="text-2xl font-bold text-gray-400">AMAZON</div>
              <div className="text-2xl font-bold text-gray-400">MICROSOFT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product suite - Energy management focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">ENERGYSYNC AI PLATFORM</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete energy management solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Replace manual processes with EnergySync's AI copilot - designed specifically for facilities managers to optimize energy costs automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200 hover:border-primary/30">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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