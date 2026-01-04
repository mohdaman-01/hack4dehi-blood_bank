import { BarChart3, TrendingUp, Cloud, Droplets, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gradient mb-2">Analytics & Predictions</h1>
        <p className="text-muted-foreground">Data-driven insights for water-logging patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg. Response Time
              </CardTitle>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24 mins</div>
            <p className="text-xs text-success mt-1">↓ 15% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-info/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Rainfall (24h)
              </CardTitle>
              <Cloud className="w-5 h-5 text-info" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">45 mm</div>
            <p className="text-xs text-warning mt-1">↑ Heavy rainfall expected</p>
          </CardContent>
        </Card>

        <Card className="border-warning/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                High-Risk Zones
              </CardTitle>
              <MapPin className="w-5 h-5 text-warning" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-destructive mt-1">↑ 3 new zones identified</p>
          </CardContent>
        </Card>

        <Card className="border-success/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Resolution Rate
              </CardTitle>
              <BarChart3 className="w-5 h-5 text-success" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87%</div>
            <p className="text-xs text-success mt-1">↑ 5% improvement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-info" />
              Rainfall Trend (Last 7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-info/5 to-primary/5 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  Integrate with Chart.js or Recharts
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Hotspot Distribution by Zone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-primary/5 to-info/5 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  Pie chart showing distribution
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            AI-Powered Predictions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
              <div className="flex items-start gap-3">
                <Droplets className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">High Risk Alert - Next 24 Hours</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Based on weather forecast, these areas are predicted to experience severe water-logging:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium">
                      ITO Crossing
                    </span>
                    <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium">
                      Minto Bridge
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
              <div className="flex items-start gap-3">
                <Cloud className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Weather Forecast</h4>
                  <p className="text-sm text-muted-foreground">
                    Heavy rainfall expected in the next 48 hours. Estimated precipitation: 60-80mm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
