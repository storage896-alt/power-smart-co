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
  Clock
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: TrendingDown,
      title: "Réduisez vos coûts",
      description: "Économisez 10-20% sur votre facture d'énergie en moins de 15 minutes"
    },
    {
      icon: BarChart3,
      title: "Suivi en temps réel",
      description: "Monitorer votre consommation avec des données toutes les 15 minutes"
    },
    {
      icon: Shield,
      title: "Partenaires vérifiés",
      description: "Accès aux meilleurs fournisseurs d'énergie américains"
    },
    {
      icon: Leaf,
      title: "Énergie verte",
      description: "Options 100% renouvelables pour votre entreprise"
    }
  ];

  const benefits = [
    "Connexion directe via Green Button API",
    "Import automatique des factures PDF",
    "IA prédictive pour optimiser la consommation",
    "Dashboard multi-sites pour les chaînes",
    "Signature électronique intégrée",
    "Support 24/7 pour les PME"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-energy rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">EnergySync</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/onboarding">
                <Button variant="outline">Se connecter</Button>
              </Link>
              <Link to="/onboarding">
                <Button>Essayer gratuitement</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Réduisez votre facture d'énergie de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-energy">
              10-20%
            </span>
            {" "}en moins de 15 minutes
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            La plateforme SaaS qui permet aux PME américaines d'acheter leur énergie 
            via des partenaires vérifiés et de suivre leur consommation en temps réel avec l'IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/onboarding">
              <Button size="lg" className="w-full sm:w-auto">
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Voir la démo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">15 min</div>
              <div className="text-muted-foreground">Setup complet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">10-20%</div>
              <div className="text-muted-foreground">Économies moyennes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">500+</div>
              <div className="text-muted-foreground">PME font confiance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tout ce dont votre entreprise a besoin
            </h2>
            <p className="text-lg text-muted-foreground">
              Une solution complète pour optimiser vos coûts énergétiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Pourquoi choisir EnergySync ?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/onboarding">
                  <Button size="lg">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-medium">
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-success mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Économies garanties</h3>
                  <p className="text-muted-foreground">
                    Réduction moyenne de 15% sur votre facture énergétique
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-info mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Setup rapide</h3>
                  <p className="text-muted-foreground">
                    Connexion automatique via Green Button API
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-6">
                  <BarChart3 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Analytics avancées</h3>
                  <p className="text-muted-foreground">
                    Prédictions IA et alertes intelligentes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-6">
                  <Leaf className="w-8 h-8 text-success mb-4" />
                  <h3 className="text-lg font-semibold mb-2">100% Vert</h3>
                  <p className="text-muted-foreground">
                    Options d'énergie 100% renouvelable disponibles
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-energy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à réduire vos coûts énergétiques ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez plus de 500 PME qui économisent déjà avec EnergySync
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-energy rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">EnergySync</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 EnergySync. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;