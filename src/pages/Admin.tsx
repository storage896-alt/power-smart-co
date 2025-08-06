import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building2, 
  MapPin, 
  Zap, 
  DollarSign, 
  TrendingDown, 
  AlertTriangle,
  Download,
  Leaf,
  Users,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [selectedUser, setSelectedUser] = useState<string>("");
  const { toast } = useToast();

  // Données fictives multi-sites
  const sites = [
    {
      id: 1,
      name: "Store #1",
      location: "New York, NY",
      consumption: 15000, // kWh/mois
      cost: 2100, // $/mois
      status: "active",
      savings: 315, // $ économisés depuis switch
      renewablePercent: 85,
      alerts: 2
    },
    {
      id: 2,
      name: "Store #2",
      location: "Boston, MA",
      consumption: 10000,
      cost: 1400,
      status: "active",
      savings: 210,
      renewablePercent: 100,
      alerts: 1
    },
    {
      id: 3,
      name: "Store #3",
      location: "Austin, TX",
      consumption: 8000,
      cost: 1100,
      status: "warning",
      savings: 165,
      renewablePercent: 75,
      alerts: 3
    },
    {
      id: 4,
      name: "Warehouse",
      location: "Newark, NJ",
      consumption: 25000,
      cost: 3200,
      status: "active",
      savings: 480,
      renewablePercent: 50,
      alerts: 0
    }
  ];

  const alerts = [
    {
      id: 1,
      siteId: 1,
      siteName: "Store #1",
      type: "consumption",
      message: "Conso +18% hier (clim utilisée hors horaires)",
      severity: "high",
      active: true,
      assignedTo: ""
    },
    {
      id: 2,
      siteId: 1,
      siteName: "Store #1",
      type: "contract",
      message: "Votre contrat actuel finit le 30 août",
      severity: "medium",
      active: true,
      assignedTo: "john.doe"
    },
    {
      id: 3,
      siteId: 2,
      siteName: "Store #2",
      type: "efficiency",
      message: "Efficacité énergétique excellente cette semaine",
      severity: "low",
      active: true,
      assignedTo: ""
    },
    {
      id: 4,
      siteId: 3,
      siteName: "Store #3",
      type: "cost",
      message: "Surcoût détecté: +25% vs prévisions",
      severity: "high",
      active: true,
      assignedTo: "jane.smith"
    },
    {
      id: 5,
      siteId: 3,
      siteName: "Store #3",
      type: "maintenance",
      message: "Équipement HVAC nécessite maintenance",
      severity: "medium",
      active: true,
      assignedTo: "tech.team"
    },
    {
      id: 6,
      siteId: 3,
      siteName: "Store #3",
      type: "consumption",
      message: "Pic de consommation inhabituel détecté",
      severity: "medium",
      active: false,
      assignedTo: ""
    }
  ];

  const users = [
    { id: "john.doe", name: "John Doe", role: "Manager Store #1" },
    { id: "jane.smith", name: "Jane Smith", role: "Operations Manager" },
    { id: "tech.team", name: "Équipe Technique", role: "Maintenance" },
    { id: "energy.manager", name: "Energy Manager", role: "Responsable Énergie" }
  ];

  const totalConsumption = sites.reduce((sum, site) => sum + site.consumption, 0);
  const totalCost = sites.reduce((sum, site) => sum + site.cost, 0);
  const totalSavings = sites.reduce((sum, site) => sum + site.savings, 0);
  const averageRenewable = Math.round(
    sites.reduce((sum, site) => sum + site.renewablePercent, 0) / sites.length
  );

  const handleToggleAlert = (alertId: number) => {
    const alertIndex = alerts.findIndex(a => a.id === alertId);
    if (alertIndex !== -1) {
      alerts[alertIndex].active = !alerts[alertIndex].active;
      toast({
        title: alerts[alertIndex].active ? "Alerte activée" : "Alerte désactivée",
        description: `L'alerte ${alertId} a été ${alerts[alertIndex].active ? 'activée' : 'désactivée'}`,
      });
    }
  };

  const handleAssignAlert = (alertId: number, userId: string) => {
    const alertIndex = alerts.findIndex(a => a.id === alertId);
    if (alertIndex !== -1) {
      alerts[alertIndex].assignedTo = userId;
      const user = users.find(u => u.id === userId);
      toast({
        title: "Alerte assignée",
        description: `Alerte assignée à ${user?.name}`,
      });
    }
  };

  const handleExportReport = () => {
    toast({
      title: "Export en cours",
      description: "Génération du rapport PDF mensuel...",
    });
    // Simulation export
    setTimeout(() => {
      toast({
        title: "Rapport exporté",
        description: "Le rapport mensuel a été téléchargé avec succès",
      });
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-destructive/20 bg-destructive/5';
      case 'medium': return 'border-warning/20 bg-warning/5';
      case 'low': return 'border-success/20 bg-success/5';
      default: return 'border-border';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'medium': return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'low': return <CheckCircle className="h-4 w-4 text-success" />;
      default: return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard Admin</h1>
            <p className="text-muted-foreground">BlueMart Retail - Vue consolidée multi-sites</p>
          </div>
          
          <Button onClick={handleExportReport} className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Rapport mensuel</span>
          </Button>
        </div>

        {/* KPI consolidés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total kWh
              </CardTitle>
              <Zap className="h-4 w-4 text-energy-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{totalConsumption.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Tous sites confondus</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total coût
              </CardTitle>
              <DollarSign className="h-4 w-4 text-energy-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${totalCost.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Mensuel consolidé</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-success/20 bg-success/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Économies réalisées
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${totalSavings.toLocaleString()}/mois</div>
              <div className="text-xs text-muted-foreground">Depuis le switch</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                % Renouvelable
              </CardTitle>
              <Leaf className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{averageRenewable}%</div>
              <div className="text-xs text-muted-foreground">Moyenne réseau</div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des sites */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span>Sites et consommation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sites.map((site) => (
                <div 
                  key={site.id} 
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-semibold text-foreground">{site.name}</div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{site.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge 
                      variant={site.status === 'active' ? 'default' : 'destructive'}
                      className="ml-2"
                    >
                      {site.status === 'active' ? 'Actif' : 'Attention'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-center lg:text-left">
                    <div>
                      <div className="text-sm text-muted-foreground">Consommation</div>
                      <div className="font-semibold">{site.consumption.toLocaleString()} kWh</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Coût</div>
                      <div className="font-semibold">${site.cost.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Économies</div>
                      <div className="font-semibold text-success">${site.savings}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">% Vert</div>
                      <div className="font-semibold text-success">{site.renewablePercent}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Alertes</div>
                      <div className={`font-semibold ${site.alerts > 0 ? 'text-warning' : 'text-success'}`}>
                        {site.alerts}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gestion des alertes */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Gestion des alertes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-start space-x-3">
                      {getSeverityIcon(alert.severity)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-foreground">{alert.siteName}</span>
                          <Badge variant="outline" className="text-xs">
                            {alert.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{alert.message}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Assignation */}
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <Select
                          value={alert.assignedTo}
                          onValueChange={(value) => handleAssignAlert(alert.id, value)}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Assigner à..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Non assigné</SelectItem>
                            {users.map((user) => (
                              <SelectItem key={user.id} value={user.id}>
                                {user.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Toggle active */}
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={alert.active}
                          onCheckedChange={() => handleToggleAlert(alert.id)}
                        />
                        {alert.active ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <XCircle className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Export et rapports */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5 text-info" />
              <span>Rapports et exports</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" onClick={handleExportReport}>
                <Download className="mr-2 h-4 w-4" />
                Rapport mensuel
              </Button>
              <Button variant="outline" onClick={handleExportReport}>
                <Download className="mr-2 h-4 w-4" />
                Analyse économies
              </Button>
              <Button variant="outline" onClick={handleExportReport}>
                <Download className="mr-2 h-4 w-4" />
                Impact ESG
              </Button>
            </div>
            
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Rapport mensuel inclut :</strong> Consommation par site, économies réalisées, 
                pourcentage d'énergie renouvelable, alertes traitées et recommandations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Admin;