
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PropertyAnalysisLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} className="bg-nordic-charcoal/90 border-nordic-blue/20 animate-pulse">
          <CardHeader>
            <div className="h-7 bg-nordic-blue/20 rounded w-3/4"></div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-4 bg-nordic-light/10 rounded w-full"></div>
            <div className="h-4 bg-nordic-light/10 rounded w-5/6"></div>
            <div className="h-4 bg-nordic-light/10 rounded w-4/6"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PropertyAnalysisLoading;
