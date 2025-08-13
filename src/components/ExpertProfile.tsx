import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Lightbulb } from "lucide-react";
import expertImage from "/lovable-uploads/ec663565-4ec2-4413-92ac-0e867d312938.png";

export const ExpertProfile = () => {
  return (
    <Card className="bg-card/80 backdrop-blur border-border/50 golden-glow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Expert Image */}
          <div className="flex-shrink-0">
            <div className="relative eye-glow">
              <img
                src={expertImage}
                alt="Barbara Murphy, Equine Chronobiology Expert"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
                <GraduationCap className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Expert Info */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gradient-golden">
                Our Expert
              </h3>
              <h4 className="text-xl text-accent">Barbara Murphy</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  BScEq, PhD
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  GDipUTL
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Associate professor at the University College Dublin in Ireland, 
                  expert in equine chronobiology and her research on circadian rhythms 
                  in horses has yielded new technologies to improve fertility in the 
                  horse breeding industry.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Lightbulb className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Head of Equine Science and Program Director for the Bachelor 
                  of Agricultural Science degree in Animal Science—Equine at UCD. 
                  Founded the UCD spin-off company Equilume Ltd, which develops 
                  innovative lighting solutions for the equine industry.
                </p>
              </div>
            </div>

            {/* Key Quote */}
            <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-accent relative">
              <div className="absolute -top-2 -left-2 bg-accent text-accent-foreground rounded-full p-1">
                <span className="text-xs">"</span>
              </div>
              <blockquote className="text-sm italic text-muted-foreground">
                "Horses are much more sensitive to light disruptions than humans. 
                Understanding how these environmental light cues impact the internal 
                physiology of the horse is key to helping to improve equine health 
                and welfare now and into the future."
              </blockquote>
              <cite className="text-xs text-accent mt-2 block">— Barbara Murphy, BScEq, PhD, GDipUTL</cite>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};