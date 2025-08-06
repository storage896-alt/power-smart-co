import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { 
  Zap, 
  Upload, 
  CheckCircle, 
  FileText,
  Globe,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [connectionType, setConnectionType] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setUploadedFile(file);
      toast({
        title: "Facture importée",
        description: "Extraction automatique des données en cours...",
      });
    }
  };

  const handleConnectGreenButton = () => {
    toast({
      title: "Connexion Green Button",
      description: "Redirection vers votre fournisseur d'énergie...",
    });
    setTimeout(() => {
      setStep(2);
    }, 1500);
  };

  const extractedData = {
    kwh: "15,000",
    cost: "$2,100",
    provider: "ConEd",
    accountNumber: "****-1234"
  };

  const partnerProviders = [
    { name: "Shell Energy", available: true },
    { name: "Constellation", available: true },
    { name: "Calpine", available: true },
    { name: "Direct Energy", available: false },
    { name: "NRG Energy", available: true }
  ];

  const handleFinish = () => {
    toast({
      title: "Configuration terminée !",
      description: "Bienvenue sur votre dashboard EnergySync",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-energy rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">EnergySync</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Configuration de votre compte
          </h1>
          <p className="text-muted-foreground">
            Étape {step} sur 3 - Configuration en moins de 5 minutes
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progression</span>
            <span className="text-sm text-muted-foreground">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-energy h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Connection Method */}
        {step === 1 && (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>Connectez votre compte énergie</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Green Button API */}
                <Card 
                  className={`cursor-pointer transition-all border-2 ${
                    connectionType === "green-button" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setConnectionType("green-button")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-success" />
                    </div>
                    <h3 className="font-semibold mb-2">Green Button API</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connexion directe et sécurisée avec votre fournisseur
                    </p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-success">
                      <CheckCircle className="w-3 h-3" />
                      <span>Recommandé</span>
                    </div>
                  </CardContent>
                </Card>

                {/* PDF Upload */}
                <Card 
                  className={`cursor-pointer transition-all border-2 ${
                    connectionType === "pdf-upload" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setConnectionType("pdf-upload")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-info" />
                    </div>
                    <h3 className="font-semibold mb-2">Import PDF</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Importez votre dernière facture en PDF
                    </p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                      <Upload className="w-3 h-3" />
                      <span>Extraction OCR</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {connectionType === "green-button" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="provider">Votre fournisseur d'énergie</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre fournisseur" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="coned">ConEd (New York)</SelectItem>
                        <SelectItem value="pge">Pacific Gas & Electric</SelectItem>
                        <SelectItem value="sce">Southern California Edison</SelectItem>
                        <SelectItem value="duke">Duke Energy</SelectItem>
                        <SelectItem value="national-grid">National Grid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={handleConnectGreenButton}
                  >
                    Connecter via Green Button
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}

              {connectionType === "pdf-upload" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pdf">Votre dernière facture (PDF)</Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground mb-2">
                        Glissez-déposez votre facture ou cliquez pour sélectionner
                      </div>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="pdf-upload"
                      />
                      <Label htmlFor="pdf-upload" className="cursor-pointer">
                        <Button variant="outline" asChild>
                          <span>Sélectionner un fichier</span>
                        </Button>
                      </Label>
                      {uploadedFile && (
                        <div className="mt-2 text-sm text-success">
                          ✓ {uploadedFile.name} importé
                        </div>
                      )}
                    </div>
                  </div>
                  {uploadedFile && (
                    <Button 
                      className="w-full" 
                      onClick={() => setStep(2)}
                    >
                      Extraire les données
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Step 2: State Detection */}
        {step === 2 && (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Détection de votre État</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="state">Votre État</Label>
                <Select value={state} onValueChange={setState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre État" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((stateName) => (
                      <SelectItem key={stateName} value={stateName.toLowerCase()}>
                        {stateName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {state && (
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Fournisseurs partenaires disponibles :</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {partnerProviders.map((provider) => (
                      <div 
                        key={provider.name}
                        className={`flex items-center space-x-2 text-sm ${
                          provider.available ? "text-success" : "text-muted-foreground"
                        }`}
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>{provider.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Retour
                </Button>
                <Button 
                  onClick={() => setStep(3)}
                  disabled={!state}
                  className="flex-1"
                >
                  Continuer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Data Summary */}
        {step === 3 && (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Résumé de vos données</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Consommation mensuelle</div>
                  <div className="text-2xl font-bold text-foreground">{extractedData.kwh} kWh</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Coût mensuel</div>
                  <div className="text-2xl font-bold text-foreground">{extractedData.cost}</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Fournisseur actuel</div>
                  <div className="text-lg font-semibold text-foreground">{extractedData.provider}</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Numéro de compte</div>
                  <div className="text-lg font-semibold text-foreground">{extractedData.accountNumber}</div>
                </div>
              </div>

              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Économies potentielles détectées</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Nos partenaires peuvent vous faire économiser jusqu'à <strong>$315/mois</strong> (15% d'économies).
                </p>
              </div>

              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(2)}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Retour
                </Button>
                <Button 
                  onClick={handleFinish}
                  className="flex-1"
                >
                  Accéder au dashboard
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Onboarding;