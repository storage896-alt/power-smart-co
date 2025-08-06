import { useState } from "react";
import Layout from "@/components/Layout";
import AIInsightsPanel from "@/components/AIInsightsPanel";
import AIForecastCard from "@/components/AIForecastCard";
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
      message: "Your contract expires in 60 days",
      action: "View offers",
      actionLink: "/marketplace"
    },
    {
      id: 2,
      type: "info",
      message: "Consumption +15% this week vs last week",
      action: "Analyze",
      actionLink: "#"
    },
    {
      id: 3,
      type: "success",
      message: "New supplier available with 20% savings",
      action: "Compare",
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
    "Shift AC schedule by 1h = 5% estimated savings",
    "Peak consumption detected 2-4pm (high cost period)",
    "Hot weather forecast: +12% consumption expected tomorrow"
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Energy Dashboard</h1>
            <p className="text-muted-foreground">BlueMart Retail - Store #1, New York</p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant={timeRange === "today" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange("today")}
            >
              Today
            </Button>
            <Button
              variant={timeRange === "week" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange("week")}
            >
              7 days
            </Button>
            <Button
              variant={timeRange === "month" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange("month")}
            >
              30 days
            </Button>
          </div>
        </div>

        {/* KPI Cards - Ramp style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Current consumption */}
          <Card className="shadow-xl bg-gradient-card border-0 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Today's Consumption
              </CardTitle>
              <Zap className="h-5 w-5 text-energy-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{currentConsumption} kWh</div>
              <div className="flex items-center space-x-1 text-xs">
                <TrendingUp className="h-3 w-3 text-warning" />
                <span className="text-warning">+8% vs yesterday</span>
              </div>
            </CardContent>
          </Card>

          {/* Current cost */}
          <Card className="shadow-xl bg-gradient-card border-0 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Today's Cost
              </CardTitle>
              <DollarSign className="h-5 w-5 text-energy-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">${currentCost}</div>
              <div className="flex items-center space-x-1 text-xs">
                <TrendingUp className="h-3 w-3 text-warning" />
                <span className="text-warning">+12% vs yesterday</span>
              </div>
            </CardContent>
          </Card>

          {/* Bill forecast */}
          <Card className="shadow-xl bg-gradient-card border-0 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Forecast
              </CardTitle>
              <Calendar className="h-5 w-5 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">${projectedBill}</div>
              <div className="flex items-center space-x-1 text-xs">
                <TrendingUp className="h-3 w-3 text-warning" />
                <span className="text-warning">+9% vs last month</span>
              </div>
            </CardContent>
          </Card>

          {/* Potential savings */}
          <Card className="shadow-xl bg-gradient-subtle border-0 border-success/20 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Potential Savings
              </CardTitle>
              <Target className="h-5 w-5 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">${savings}/mo</div>
              <Link to="/marketplace">
                <Button variant="link" size="sm" className="p-0 text-success h-auto">
                  View offers <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* AI Features Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AIInsightsPanel />
          <AIForecastCard />
        </div>

        {/* Consumption chart - Enhanced */}
        <Card className="shadow-2xl bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Hourly Consumption - Today</span>
              <Badge variant="secondary" className="ml-auto">Live Data</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full p-4">
              {/* Enhanced chart with better styling */}
              <div className="flex items-end justify-between h-full space-x-1">
                {hourlyData.map((data, index) => {
                  const maxConsumption = Math.max(...hourlyData.map(d => d.consumption));
                  const height = (data.consumption / maxConsumption) * 100;
                  const isHighCost = data.cost > 3.5;
                  
                  return (
                    <div key={index} className="flex flex-col items-center flex-1 group">
                      <div className="text-xs text-muted-foreground mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ${data.cost.toFixed(2)}
                      </div>
                      <div 
                        className={`w-full rounded-t-lg transition-all hover:opacity-80 cursor-pointer ${
                          isHighCost 
                            ? 'bg-gradient-to-t from-warning to-warning/70 shadow-lg' 
                            : 'bg-gradient-to-t from-primary to-primary/70 shadow-md'
                        }`}
                        style={{ height: `${height}%` }}
                        title={`${data.time}: ${data.consumption} kWh - $${data.cost}`}
                      />
                      <div className="text-xs text-muted-foreground mt-2 -rotate-45 origin-center">
                        {data.time}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary/70 rounded-sm"></div>
                <span>Normal consumption</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-warning to-warning/70 rounded-sm"></div>
                <span>Peak pricing detected</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts section - Enhanced */}
        <Card className="shadow-xl bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-warning" />
              <span>Active Alerts</span>
              <Badge variant="outline" className="ml-auto">{alerts.length}</Badge>
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

        {/* CTA Marketplace */}
        <Card className="shadow-xl bg-gradient-hero border-0">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to save $315/month?
                </h3>
                <p className="text-white/90">
                  Compare offers from our partners and switch in 1 click
                </p>
              </div>
              <Link to="/marketplace">
                <Button variant="secondary" size="lg" className="shadow-lg">
                  Compare Offers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Industry Benchmark */}
        <Card className="shadow-xl bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-success" />
              <span>Industry Benchmark</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">+8%</div>
                <div className="text-sm text-muted-foreground">vs retail avg NY</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">85%</div>
                <div className="text-sm text-muted-foreground">renewable energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-info mb-2">B+</div>
                <div className="text-sm text-muted-foreground">efficiency score</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              You consume 8% more than similar retail businesses in your state (NAICS 44-45)
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;