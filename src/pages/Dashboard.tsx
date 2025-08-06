import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  DollarSign, 
  AlertTriangle, 
  Leaf,
  Calendar,
  ArrowRight,
  Brain,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("today");

  // Données fictives
  const currentConsumption = 180.5; // kWh aujourd'hui
  const lastMonthConsumption = 15000; // kWh mois dernier
  const currentCost = 32.45; // $ aujourd'hui
  const lastMonthCost = 2100; // $ mois dernier
  const projectedBill = 2285; // $ prévision mois actuel
  const savings = 315; // $ économies potentielles

  const alerts = [
    {
      id: 1,
      type: "warning",
      message: "Votre contrat expire dans 60 jours",
      action: "Voir les offres",
      actionLink: "/marketplace"
    },
    {
      id: 2,
      type: "info",
      message: "Conso +15% cette semaine vs semaine dernière",
      action: "Analyser",
      actionLink: "#"
    },
    {
      id: 3,
      type: "success",
      message: "Nouveau fournisseur disponible avec 20% d'économies",
      action: "Comparer",
      actionLink: "/marketplace"
    }
  ];

  const hourlyData = [
    { time: "00:00", consumption: 12.5, cost: 2.25 },
    { time: "01:00", consumption: 11.8, cost: 2.12 },
    { time: "02:00", consumption: 11.2, cost: 2.02 },
    { time: "03:00", consumption: 10.9, cost: 1.96 },
    { time: "04:00", consumption: 10.7, cost: 1.93 },
    { time: "05:00", consumption: 11.1, cost: 2.00 },
    { time: "06:00", consumption: 13.5, cost: 2.43 },
    { time: "07:00", consumption: 16.8, cost: 3.02 },
    { time: "08:00", consumption: 22.4, cost: 4.03 },
    { time: "09:00", consumption: 18.9, cost: 3.40 },
    { time: "10:00", consumption: 16.2, cost: 2.92 },
    { time: "11:00", consumption: 15.8, cost: 2.84 },
    { time: "12:00", consumption: 17.3, cost: 3.11 },
    { time: "13:00", consumption: 19.1, cost: 3.44 },
    { time: "14:00", consumption: 21.5, cost: 3.87 },
    { time: "15:00", consumption: 23.2, cost: 4.18 },
    { time: "16:00", consumption: 19.8, cost: 3.56 },
    { time: "17:00", consumption: 17.4, cost: 3.13 },
    { time: "18:00", consumption: 16.1, cost: 2.90 },
    { time: "19:00", consumption: 15.3, cost: 2.75 },
    { time: "20:00", consumption: 14.8, cost: 2.66 },
    { time: "21:00", consumption: 13.9, cost: 2.50 },
    { time: "22:00", consumption: 13.2, cost: 2.38 },
    { time: "23:00", consumption: 12.8, cost: 2.30 }
  ];

  const aiInsights = [
    "Décaler la climatisation de 1h = 5% d'économie estimée",
    "Pic de consommation détecté entre 14h-16h (coût élevé)",
    "Météo chaude prévue : +12% de consommation attendue demain"
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard Énergie</h1>
            <p className="text-muted-foreground">BlueMart Retail - Store #1, New York</p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant={timeRange === "today" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange("today")}
            >
              Aujourd'hui
            </Button>
            <Button
              variant={timeRange === "week" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange("week")}
            >
              7 jours
            </Button>
            <Button
              variant={timeRange === "month" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange("month")}
            >
              30 jours
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Consommation actuelle */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Consommation aujourd'hui
              </CardTitle>
              <Zap className="h-4 w-4 text-energy-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{currentConsumption} kWh</div>
              <div className="flex items-center space-x-1 text-xs">
                <TrendingUp className="h-3 w-3 text-warning" />
                <span className="text-warning">+8% vs hier</span>
              </div>
            </CardContent>
          </Card>

          {/* Coût actuel */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Coût aujourd'hui
              </CardTitle>
              <DollarSign className="h-4 w-4 text-energy-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${currentCost}</div>
              <div className="flex items-center space-x-1 text-xs">
                <TrendingUp className="h-3 w-3 text-warning" />
                <span className="text-warning">+12% vs hier</span>
              </div>
            </CardContent>
          </Card>

          {/* Prévision facture */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Prévision mois
              </CardTitle>
              <Calendar className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${projectedBill}</div>
              <div className="flex items-center space-x-1 text-xs">
                <TrendingUp className="h-3 w-3 text-warning" />
                <span className="text-warning">+9% vs mois dernier</span>
              </div>
            </CardContent>
          </Card>

          {/* Économies potentielles */}
          <Card className="shadow-soft border-success/20 bg-success/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Économies possibles
              </CardTitle>
              <Target className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${savings}/mois</div>
              <Link to="/marketplace">
                <Button variant="link" size="sm" className="p-0 text-success h-auto">
                  Voir les offres <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Graphique consommation */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Consommation par heure - Aujourd'hui</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              {/* Graphique simplifié avec divs */}
              <div className="flex items-end justify-between h-full space-x-1">
                {hourlyData.map((data, index) => {
                  const maxConsumption = Math.max(...hourlyData.map(d => d.consumption));
                  const height = (data.consumption / maxConsumption) * 100;
                  const isHighCost = data.cost > 3.5;
                  
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div className="text-xs text-muted-foreground mb-1">
                        ${data.cost.toFixed(2)}
                      </div>
                      <div 
                        className={`w-full rounded-t transition-all hover:opacity-80 ${
                          isHighCost ? 'bg-warning' : 'bg-primary'
                        }`}
                        style={{ height: `${height}%` }}
                        title={`${data.time}: ${data.consumption} kWh - $${data.cost}`}
                      />
                      <div className="text-xs text-muted-foreground mt-1 -rotate-45 origin-center">
                        {data.time}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded"></div>
                <span>Consommation normale</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-warning rounded"></div>
                <span>Surcoût détecté</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights IA et Alertes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Insights IA */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-info" />
                <span>Suggestions IA</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-info rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-foreground">{insight}</p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-4">
                Voir plus de suggestions
              </Button>
            </CardContent>
          </Card>

          {/* Alertes */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <span>Alertes actives</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert) => (
                <Alert key={alert.id} className={`
                  ${alert.type === 'warning' ? 'border-warning/20 bg-warning/5' : ''}
                  ${alert.type === 'info' ? 'border-info/20 bg-info/5' : ''}
                  ${alert.type === 'success' ? 'border-success/20 bg-success/5' : ''}
                `}>
                  <AlertDescription className="flex items-center justify-between">
                    <span className="text-sm">{alert.message}</span>
                    <Link to={alert.actionLink}>
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        {alert.action}
                      </Button>
                    </Link>
                  </AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA Marketplace */}
        <Card className="shadow-medium bg-gradient-energy">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  Prêt à économiser $315/mois ?
                </h3>
                <p className="text-white/90">
                  Comparez les offres de nos partenaires et changez en 1 clic
                </p>
              </div>
              <Link to="/marketplace">
                <Button variant="secondary" size="lg">
                  Comparer les offres
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Benchmark sectoriel */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-success" />
              <span>Benchmark sectoriel</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">+8%</div>
                <div className="text-sm text-muted-foreground">vs moyenne retail NY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">85%</div>
                <div className="text-sm text-muted-foreground">énergie renouvelable</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-info mb-1">B+</div>
                <div className="text-sm text-muted-foreground">score efficacité</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Vous consommez 8% de plus que la moyenne des commerces similaires dans votre État (NAICS 44-45)
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;