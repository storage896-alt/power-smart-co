import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  ShoppingCart, 
  Leaf, 
  Clock, 
  DollarSign, 
  TrendingDown,
  CheckCircle,
  Star,
  ArrowRight,
  FileSignature
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Marketplace = () => {
  const [contractDuration, setContractDuration] = useState<string>("all");
  const [selectedOffer, setSelectedOffer] = useState<any>(null);
  const { toast } = useToast();

  // Données fictives des offres
  const offers = [
    {
      id: 1,
      provider: "Shell Energy",
      logo: "🛢️",
      pricePerKwh: 0.10,
      duration: 24,
      renewablePercent: 100,
      savings: 12,
      savingsAmount: 252,
      rating: 4.8,
      features: ["100% énergie verte", "Prix fixe garanti", "Support 24/7", "App mobile"],
      contractType: "Fixe",
      earlyTermination: "Pas de frais",
      estimatedBill: 1848
    },
    {
      id: 2,
      provider: "Constellation",
      logo: "⭐",
      pricePerKwh: 0.11,
      duration: 12,
      renewablePercent: 50,
      savings: 8,
      savingsAmount: 168,
      rating: 4.6,
      features: ["Mix énergétique", "Facturation simplifiée", "Programme fidélité"],
      contractType: "Fixe",
      earlyTermination: "$100",
      estimatedBill: 1932
    },
    {
      id: 3,
      provider: "Calpine",
      logo: "⚡",
      pricePerKwh: 0.09,
      duration: 36,
      renewablePercent: 75,
      savings: 15,
      savingsAmount: 315,
      rating: 4.9,
      features: ["Meilleur prix", "Énergie 75% verte", "Engagement long terme"],
      contractType: "Fixe",
      earlyTermination: "$150",
      estimatedBill: 1785
    },
    {
      id: 4,
      provider: "Direct Energy",
      logo: "🔥",
      pricePerKwh: 0.105,
      duration: 18,
      renewablePercent: 30,
      savings: 10,
      savingsAmount: 210,
      rating: 4.4,
      features: ["Prix compétitif", "Flexibilité moyenne", "Support client"],
      contractType: "Variable",
      earlyTermination: "$75",
      estimatedBill: 1890
    },
    {
      id: 5,
      provider: "NRG Energy",
      logo: "🌟",
      pricePerKwh: 0.095,
      duration: 24,
      renewablePercent: 85,
      savings: 13,
      savingsAmount: 273,
      rating: 4.7,
      features: ["Excellent rapport qualité/prix", "Énergie majoritairement verte"],
      contractType: "Fixe",
      earlyTermination: "Pas de frais",
      estimatedBill: 1827
    }
  ];

  const currentContract = {
    provider: "ConEd",
    pricePerKwh: 0.14,
    monthlyBill: 2100,
    expirationDate: "30 août 2024"
  };

  const filteredOffers = contractDuration === "all" 
    ? offers 
    : offers.filter(offer => offer.duration.toString() === contractDuration);

  const handleSwitchNow = (offer: any) => {
    setSelectedOffer(offer);
  };

  const handleSignContract = () => {
    toast({
      title: "Redirection vers DocuSign",
      description: "Vous allez être redirigé vers la signature électronique...",
    });
    // Simulation de redirection DocuSign
    setTimeout(() => {
      toast({
        title: "Contrat signé avec succès !",
        description: `Votre nouveau contrat avec ${selectedOffer.provider} sera actif dans 30 jours.`,
      });
      setSelectedOffer(null);
    }, 2000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Marketplace Énergie</h1>
            <p className="text-muted-foreground">Comparez et changez de fournisseur en quelques clics</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Select value={contractDuration} onValueChange={setContractDuration}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes durées</SelectItem>
                <SelectItem value="12">12 mois</SelectItem>
                <SelectItem value="18">18 mois</SelectItem>
                <SelectItem value="24">24 mois</SelectItem>
                <SelectItem value="36">36 mois</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Contrat actuel */}
        <Card className="shadow-medium border-warning/20 bg-warning/5">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-warning" />
              <span>Votre contrat actuel</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Fournisseur</div>
                <div className="font-semibold">{currentContract.provider}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Prix/kWh</div>
                <div className="font-semibold">${currentContract.pricePerKwh}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Facture mensuelle</div>
                <div className="font-semibold">${currentContract.monthlyBill}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Expiration</div>
                <div className="font-semibold text-warning">{currentContract.expirationDate}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offres disponibles */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Offres disponibles ({filteredOffers.length})
          </h2>
          
          <div className="space-y-4">
            {filteredOffers.map((offer) => (
              <Card key={offer.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    {/* Provider info */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{offer.logo}</div>
                        <div>
                          <div className="font-semibold text-foreground">{offer.provider}</div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-warning fill-current" />
                            <span className="text-sm text-muted-foreground">{offer.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Prix */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                      <div className="text-2xl font-bold text-foreground">${offer.pricePerKwh}</div>
                      <div className="text-sm text-muted-foreground">par kWh</div>
                    </div>

                    {/* Durée */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="font-semibold text-foreground">{offer.duration} mois</div>
                      <div className="text-sm text-muted-foreground">{offer.contractType}</div>
                    </div>

                    {/* Renouvelable */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-1">
                        <Leaf className="h-4 w-4 text-success" />
                        <span className="font-semibold text-success">{offer.renewablePercent}%</span>
                      </div>
                      <div className="text-sm text-muted-foreground">renouvelable</div>
                    </div>

                    {/* Économies */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                      <div className="font-bold text-success">-${offer.savingsAmount}/mois</div>
                      <div className="text-sm text-muted-foreground">{offer.savings}% d'économies</div>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-2 flex flex-col space-y-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full">
                            Détails
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              <span className="text-xl">{offer.logo}</span>
                              <span>{offer.provider}</span>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-sm text-muted-foreground">Prix/kWh</div>
                                <div className="font-semibold">${offer.pricePerKwh}</div>
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">Durée</div>
                                <div className="font-semibold">{offer.duration} mois</div>
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">Type</div>
                                <div className="font-semibold">{offer.contractType}</div>
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">Résiliation anticipée</div>
                                <div className="font-semibold">{offer.earlyTermination}</div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="text-sm text-muted-foreground mb-2">Caractéristiques</div>
                              <div className="space-y-1">
                                {offer.features.map((feature, index) => (
                                  <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle className="h-3 w-3 text-success" />
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-muted/30 rounded-lg p-4">
                              <div className="text-sm text-muted-foreground mb-1">Estimation mensuelle</div>
                              <div className="text-2xl font-bold text-foreground">${offer.estimatedBill}</div>
                              <div className="text-sm text-success">vs ${currentContract.monthlyBill} actuellement</div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleSwitchNow(offer)}
                      >
                        Changer maintenant
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dialog de confirmation */}
        <Dialog open={!!selectedOffer} onOpenChange={() => setSelectedOffer(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <FileSignature className="h-5 w-5 text-primary" />
                <span>Récapitulatif du changement</span>
              </DialogTitle>
            </DialogHeader>
            
            {selectedOffer && (
              <div className="space-y-6">
                {/* Comparaison Avant/Après */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-warning/20 bg-warning/5">
                    <CardHeader>
                      <CardTitle className="text-sm">Avant - {currentContract.provider}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>Prix/kWh:</span>
                        <span className="font-semibold">${currentContract.pricePerKwh}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Facture mensuelle:</span>
                        <span className="font-semibold">${currentContract.monthlyBill}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Facture annuelle:</span>
                        <span className="font-semibold">${currentContract.monthlyBill * 12}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-success/20 bg-success/5">
                    <CardHeader>
                      <CardTitle className="text-sm">Après - {selectedOffer.provider}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>Prix/kWh:</span>
                        <span className="font-semibold">${selectedOffer.pricePerKwh}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Facture mensuelle:</span>
                        <span className="font-semibold">${selectedOffer.estimatedBill}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Facture annuelle:</span>
                        <span className="font-semibold">${selectedOffer.estimatedBill * 12}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Économies */}
                <Card className="border-success/20 bg-success/5">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success mb-1">
                        ${selectedOffer.savingsAmount * 12}/an
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Économies totales sur {selectedOffer.duration} mois
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Conditions */}
                <div className="space-y-2">
                  <h3 className="font-semibold">Conditions du contrat:</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Durée: {selectedOffer.duration} mois</li>
                    <li>• Type: {selectedOffer.contractType}</li>
                    <li>• Résiliation anticipée: {selectedOffer.earlyTermination}</li>
                    <li>• Énergie renouvelable: {selectedOffer.renewablePercent}%</li>
                    <li>• Activation: 30 jours après signature</li>
                  </ul>
                </div>

                {/* Bouton signature */}
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedOffer(null)}
                    className="flex-1"
                  >
                    Annuler
                  </Button>
                  <Button 
                    onClick={handleSignContract}
                    className="flex-1"
                  >
                    Signer avec DocuSign
                    <FileSignature className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Marketplace;