import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Brain,
  Calendar,
  DollarSign,
  Zap
} from "lucide-react";

interface ForecastData {
  period: string;
  consumption: number;
  cost: number;
  change: number;
  confidence: number;
}

const AIForecastCard = () => {
  const [forecastPeriod, setForecastPeriod] = useState<'week' | 'month'>('week');

  const weeklyForecast: ForecastData[] = [
    { period: 'Tomorrow', consumption: 185, cost: 33.2, change: 2.6, confidence: 94 },
    { period: 'This Week', consumption: 1280, cost: 230, change: 8.5, confidence: 89 },
    { period: 'Next Week', consumption: 1450, cost: 261, change: 15.2, confidence: 82 }
  ];

  const monthlyForecast: ForecastData[] = [
    { period: 'This Month', consumption: 15800, cost: 2285, change: 9.2, confidence: 91 },
    { period: 'Next Month', consumption: 16200, cost: 2340, change: 11.5, confidence: 85 },
    { period: 'Q2 2024', consumption: 47500, cost: 6850, change: 12.8, confidence: 78 }
  ];

  const currentForecast = forecastPeriod === 'week' ? weeklyForecast : monthlyForecast;

  return (
    <Card className="shadow-lg bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-primary" />
            <span>AI Consumption Forecast</span>
          </div>
          <div className="flex space-x-1">
            <Button
              size="sm"
              variant={forecastPeriod === 'week' ? 'default' : 'outline'}
              onClick={() => setForecastPeriod('week')}
            >
              Week
            </Button>
            <Button
              size="sm"
              variant={forecastPeriod === 'month' ? 'default' : 'outline'}
              onClick={() => setForecastPeriod('month')}
            >
              Month
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentForecast.map((forecast, index) => (
          <div key={index} className="p-4 bg-background/50 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{forecast.period}</span>
              </div>
              <Badge 
                variant="outline" 
                className="text-xs"
              >
                {forecast.confidence}% confidence
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  <Zap className="h-3 w-3 text-energy-primary" />
                  <span className="text-sm text-muted-foreground">Consumption</span>
                </div>
                <div className="font-semibold">{forecast.consumption.toLocaleString()} kWh</div>
                <div className={`flex items-center space-x-1 text-xs ${
                  forecast.change > 0 ? 'text-warning' : 'text-success'
                }`}>
                  {forecast.change > 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span>{Math.abs(forecast.change)}% vs baseline</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  <DollarSign className="h-3 w-3 text-energy-accent" />
                  <span className="text-sm text-muted-foreground">Cost</span>
                </div>
                <div className="font-semibold">${forecast.cost.toLocaleString()}</div>
                <div className={`flex items-center space-x-1 text-xs ${
                  forecast.change > 0 ? 'text-warning' : 'text-success'
                }`}>
                  {forecast.change > 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span>{Math.abs(forecast.change)}% vs baseline</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-2 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by ML models using weather data, historical patterns, and operational schedules
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIForecastCard;