import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  TrendingUp, 
  Lightbulb, 
  Target, 
  AlertTriangle,
  CheckCircle,
  Zap,
  ArrowRight
} from "lucide-react";

interface AIInsight {
  id: string;
  type: 'optimization' | 'prediction' | 'alert' | 'recommendation';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  savings?: number;
  confidence: number;
  actionable: boolean;
}

const AIInsightsPanel = () => {
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null);

  const insights: AIInsight[] = [
    {
      id: '1',
      type: 'optimization',
      title: 'HVAC Schedule Optimization',
      description: 'Shift cooling schedule by 1 hour during peak pricing periods to reduce costs by 8%',
      impact: 'high',
      savings: 168,
      confidence: 94,
      actionable: true
    },
    {
      id: '2',
      type: 'prediction',
      title: 'Consumption Spike Forecast',
      description: 'High temperatures expected next week will increase consumption by 15-20%',
      impact: 'medium',
      confidence: 87,
      actionable: true
    },
    {
      id: '3',
      type: 'alert',
      title: 'Equipment Inefficiency Detected',
      description: 'Store #2 HVAC system showing 12% efficiency drop vs baseline',
      impact: 'high',
      confidence: 96,
      actionable: true
    },
    {
      id: '4',
      type: 'recommendation',
      title: 'Demand Response Program',
      description: 'Join utility demand response program for additional $150/month savings',
      impact: 'medium',
      savings: 150,
      confidence: 89,
      actionable: true
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'optimization': return <Target className="h-4 w-4" />;
      case 'prediction': return <TrendingUp className="h-4 w-4" />;
      case 'alert': return <AlertTriangle className="h-4 w-4" />;
      case 'recommendation': return <Lightbulb className="h-4 w-4" />;
      default: return <Brain className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'optimization': return 'text-success';
      case 'prediction': return 'text-info';
      case 'alert': return 'text-warning';
      case 'recommendation': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI Energy Intelligence</span>
          <Badge variant="secondary" className="ml-auto">Live</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => (
          <div 
            key={insight.id}
            className="p-4 border rounded-lg hover:bg-muted/30 transition-all cursor-pointer"
            onClick={() => setSelectedInsight(selectedInsight === insight.id ? null : insight.id)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className={getTypeColor(insight.type)}>
                  {getTypeIcon(insight.type)}
                </div>
                <span className="font-medium text-sm">{insight.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                {insight.savings && (
                  <Badge variant="secondary" className="text-success">
                    ${insight.savings}/mo
                  </Badge>
                )}
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getImpactColor(insight.impact)}`}
                >
                  {insight.impact}
                </Badge>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">Confidence:</span>
                <Progress value={insight.confidence} className="w-16 h-2" />
                <span className="text-xs font-medium">{insight.confidence}%</span>
              </div>
              
              {insight.actionable && (
                <Button size="sm" variant="outline">
                  Take Action
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              )}
            </div>

            {selectedInsight === insight.id && (
              <div className="mt-4 pt-4 border-t space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Impact Timeline:</span>
                    <div className="font-medium">7-14 days</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Implementation:</span>
                    <div className="font-medium">Automated</div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Implement
                  </Button>
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <Button variant="outline" size="sm" className="w-full">
            <Zap className="mr-2 h-4 w-4" />
            View All AI Insights
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightsPanel;