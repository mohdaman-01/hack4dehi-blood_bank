import { MapPin, Droplets, AlertTriangle, Navigation, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Hotspot {
  id: number;
  location: string;
  ward: string;
  zone: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  waterLevel: number;
  lastUpdated: string;
}

const HotspotMap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all");

  const hotspots: Hotspot[] = [
    {
      id: 1,
      location: "ITO Crossing",
      ward: "Ward 12",
      zone: "Central Delhi",
      severity: "critical",
      waterLevel: 85,
      lastUpdated: "5 mins ago",
    },
    {
      id: 2,
      location: "Minto Bridge",
      ward: "Ward 8",
      zone: "Central Delhi",
      severity: "high",
      waterLevel: 72,
      lastUpdated: "12 mins ago",
    },
    {
      id: 3,
      location: "Pul Prahladpur",
      ward: "Ward 45",
      zone: "South Delhi",
      severity: "medium",
      waterLevel: 45,
      lastUpdated: "20 mins ago",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'high': return 'text-warning bg-warning/10 border-warning/20';
      case 'medium': return 'text-info bg-info/10 border-info/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  const filteredHotspots = hotspots.filter(hotspot => {
    const matchesSearch = hotspot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotspot.ward.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeverity = selectedSeverity === 'all' || hotspot.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient mb-2">Water-Logging Hotspots</h1>
          <p className="text-muted-foreground">Real-time monitoring across Delhi</p>
        </div>
        <Button className="modern-btn gap-2">
          <Navigation className="w-4 h-4" />
          My Location
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by location or ward..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedSeverity === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedSeverity('all')}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={selectedSeverity === 'critical' ? 'destructive' : 'outline'}
                onClick={() => setSelectedSeverity('critical')}
                size="sm"
              >
                Critical
              </Button>
              <Button
                variant={selectedSeverity === 'high' ? 'default' : 'outline'}
                onClick={() => setSelectedSeverity('high')}
                size="sm"
              >
                High
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[500px] bg-gradient-to-br from-primary/5 via-info/5 to-primary/5 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p className="text-muted-foreground">
                Integrate with Google Maps, Mapbox, or Leaflet
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredHotspots.map((hotspot) => (
          <Card key={hotspot.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{hotspot.location}</CardTitle>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {hotspot.ward}
                    </span>
                    <span>•</span>
                    <span>{hotspot.zone}</span>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(hotspot.severity)}`}>
                  {hotspot.severity.toUpperCase()}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-info" />
                      Water Level
                    </span>
                    <span className="text-sm font-bold">{hotspot.waterLevel}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        hotspot.waterLevel > 70 ? 'bg-destructive' :
                        hotspot.waterLevel > 50 ? 'bg-warning' : 'bg-info'
                      }`}
                      style={{ width: `${hotspot.waterLevel}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last updated</span>
                  <span className="font-medium">{hotspot.lastUpdated}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredHotspots.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <AlertTriangle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No hotspots found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HotspotMap;
