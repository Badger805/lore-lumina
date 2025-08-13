import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SpectrumSection {
  color: string;
  wavelength: string;
  name: string;
  description: string;
  effect: string;
}

const spectrumData: SpectrumSection[] = [
  {
    color: "bg-purple-600",
    wavelength: "380-440 nm",
    name: "VIOLET/UV",
    description: "Shortest visible wavelengths",
    effect: "Can damage eyes; filtered by atmosphere"
  },
  {
    color: "bg-blue-500",
    wavelength: "440-485 nm", 
    name: "BLUE",
    description: "High energy wavelengths",
    effect: "Most disruptive to circadian rhythms"
  },
  {
    color: "bg-cyan-400",
    wavelength: "485-510 nm",
    name: "CYAN", 
    description: "Blue-green transition",
    effect: "Stimulates alertness"
  },
  {
    color: "bg-green-500",
    wavelength: "510-565 nm",
    name: "GREEN",
    description: "Peak human eye sensitivity", 
    effect: "Natural daytime light component"
  },
  {
    color: "bg-yellow-400",
    wavelength: "565-590 nm",
    name: "YELLOW",
    description: "Warm daylight colors",
    effect: "Comfortable for day vision"
  },
  {
    color: "bg-orange-500", 
    wavelength: "590-625 nm",
    name: "ORANGE",
    description: "Sunset spectrum",
    effect: "Less circadian disruption"
  },
  {
    color: "bg-red-600",
    wavelength: "625-740 nm", 
    name: "RED",
    description: "Longest visible wavelengths",
    effect: "Minimal circadian impact; safe for night use"
  }
];

export const LightSpectrum = () => {
  const [selectedSection, setSelectedSection] = useState<SpectrumSection | null>(null);

  return (
    <Card className="bg-card/80 backdrop-blur border-border/50">
      <CardContent className="p-6 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-gradient-golden">Visible Light Spectrum</h3>
          <p className="text-muted-foreground">
            Understanding how different wavelengths affect equine circadian rhythms
          </p>
        </div>

        {/* Interactive Spectrum Bar */}
        <div className="relative">
          <div className="flex rounded-lg overflow-hidden h-16 shadow-lg">
            {spectrumData.map((section, index) => (
              <div
                key={index}
                className={`${section.color} flex-1 cursor-pointer transition-all duration-300 relative group hover:brightness-110`}
                onClick={() => setSelectedSection(section)}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-bold drop-shadow-lg">
                    {section.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Wavelength Labels */}
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>380 nm</span>
            <span>440 nm</span>
            <span>485 nm</span>
            <span>510 nm</span>
            <span>565 nm</span>
            <span>590 nm</span>
            <span>625 nm</span>
            <span>740 nm</span>
          </div>
        </div>

        {/* Selected Section Info */}
        {selectedSection && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center space-x-3">
              <div className={`w-6 h-6 ${selectedSection.color} rounded shadow-lg`}></div>
              <h4 className="text-xl font-bold text-accent">{selectedSection.name}</h4>
              <Badge variant="outline" className="border-primary text-primary">
                {selectedSection.wavelength}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="font-semibold text-amber-light">Description</h5>
                <p className="text-muted-foreground text-sm">{selectedSection.description}</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-amber-light">Effect on Horses</h5>
                <p className="text-muted-foreground text-sm">{selectedSection.effect}</p>
              </div>
            </div>
          </div>
        )}

        {!selectedSection && (
          <div className="text-center text-muted-foreground text-sm animate-pulse">
            Click on any color in the spectrum above to learn more
          </div>
        )}

        {/* Key Insights */}
        <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
          <h5 className="font-semibold text-accent mb-2">Key Insights</h5>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Blue light</strong> is most disruptive to sleep patterns</li>
            <li>• <strong>Red light</strong> is safest for nighttime use in stables</li>
            <li>• <strong>Natural sunlight</strong> contains the full spectrum for healthy rhythms</li>
            <li>• <strong>Artificial lighting</strong> should mimic natural daily changes</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};