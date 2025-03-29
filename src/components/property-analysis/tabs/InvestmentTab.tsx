
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Info } from "lucide-react";
import { PropertyData } from "@/utils/property-data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartTooltip,
  ResponsiveContainer
} from 'recharts';

interface InvestmentTabProps {
  data: PropertyData;
}

const InvestmentTab = ({ data }: InvestmentTabProps) => {
  return (
    <div className="space-y-8">
      {/* Price History and Forecast */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="h-5 w-5 text-nordic-blue" />
            Prisutvikling og prognose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={[...data.priceHistory, ...data.priceForecast.slice(1)]}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorHistory" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0369a1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0369a1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="year" 
                  stroke="#e5e7eb"
                  tick={{ fill: '#e5e7eb' }}
                />
                <YAxis 
                  stroke="#e5e7eb"
                  tick={{ fill: '#e5e7eb' }}
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                />
                <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                <RechartTooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const value = payload[0].value as number;
                      const year = Number(label);
                      const isForecast = year >= 2024;
                      
                      return (
                        <div className="bg-nordic-charcoal p-3 border border-nordic-blue/20 rounded shadow-md">
                          <p className="text-white font-medium">{`År: ${label}`}</p>
                          <p className="text-nordic-light">{`Verdi: ${value.toLocaleString()} kr`}</p>
                          {isForecast && (
                            <p className="text-nordic-light text-xs mt-1">(Prognose)</p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0369a1" 
                  fillOpacity={1}
                  fill="url(#colorHistory)"
                  activeDot={{ r: 6 }}
                  name="Historisk"
                  strokeWidth={2}
                  // @ts-ignore - we need to do this to separate history from forecast
                  isAnimationActive={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-nordic-blue mr-2"></div>
              <span className="text-nordic-light">Historisk</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-nordic-green mr-2"></div>
              <span className="text-nordic-light">Prognose</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Rental Income */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-nordic-blue" />
            Utleiepotensial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-nordic-blue/10 rounded-lg p-5 flex flex-col items-center justify-center text-center">
              <h3 className="text-nordic-light mb-1">Estimert månedlig leieinntekt</h3>
              <p className="text-white text-2xl font-bold">{data.rentalIncome.estimatedMonthly}</p>
            </div>
            
            <div className="bg-nordic-blue/10 rounded-lg p-5 flex flex-col items-center justify-center text-center">
              <h3 className="text-nordic-light mb-1">Årlig leieinntekt</h3>
              <p className="text-white text-2xl font-bold">{data.rentalIncome.estimatedAnnual}</p>
            </div>
            
            <div className="bg-nordic-blue/10 rounded-lg p-5 flex flex-col items-center justify-center text-center">
              <h3 className="text-nordic-light mb-1">Direkteavkastning</h3>
              <p className="text-white text-2xl font-bold">{data.rentalIncome.yieldPercentage}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-white font-medium mb-3">Sammenlignbare leiepriser i området</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {data.rentalIncome.comparableRents.map((rent, i) => (
                <div key={i} className="bg-nordic-blue/5 p-3 rounded-lg">
                  <p className="text-nordic-light text-sm">{rent.type}</p>
                  <p className="text-white font-medium">{rent.price}/mnd</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Risk Assessment */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-nordic-blue" />
            Investeringsvurdering
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-medium mb-3">Styrker</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-nordic-green/20 text-nordic-green flex items-center justify-center">
                    ✓
                  </div>
                  <span className="text-nordic-light">Stabil prisutvikling i området siste 5 år</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-nordic-green/20 text-nordic-green flex items-center justify-center">
                    ✓
                  </div>
                  <span className="text-nordic-light">God og stabil utleiemulighet</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-nordic-green/20 text-nordic-green flex items-center justify-center">
                    ✓
                  </div>
                  <span className="text-nordic-light">Utviklingspotensial for verdistigning</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-3">Risikofaktorer</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                    !
                  </div>
                  <span className="text-nordic-light">Mulig vedlikeholdsbehov på kort sikt</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                    !
                  </div>
                  <span className="text-nordic-light">Noe høyere kvadratmeterpris enn gjennomsnittet</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-5 bg-nordic-blue/10 rounded-lg">
            <h3 className="text-white font-medium mb-2">Investeringsanbefaling</h3>
            <p className="text-nordic-light">
              Basert på vår analyse anbefaler vi denne eiendommen som en god langsiktig investering, 
              særlig dersom du vurderer utvikling eller utleie. Eiendommen tilbyr en balanse mellom 
              stabil verdistigning og utviklingspotensial.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// PieChart component for recharts
const PieChart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);

export default InvestmentTab;
