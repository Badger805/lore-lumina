import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EquineLightQuiz } from "@/components/EquineLightQuiz";
import { LightSpectrum } from "@/components/LightSpectrum";
import { ExpertProfile } from "@/components/ExpertProfile";
import { Sun, Moon, Eye, Brain, Heart, Clock } from "lucide-react";
import heroImage from "@/assets/horse-eye-hero.jpg";
import stableImage from "@/assets/stable-interior.jpg";
import anatomyImage from "@/assets/horse-anatomy-diagram.jpg";

const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Sidebar Quiz */}
      <div className="fixed right-4 top-4 w-80 z-40 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <EquineLightQuiz />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Horse eye with golden iris"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-left max-w-4xl mx-auto px-8">
          <div className="space-y-8 floating-animation">
            <div className="space-y-4">
              <Badge className="bg-accent/20 text-accent border-accent/30 animate-pulse-golden">
                EQUUS Magazine Feature
              </Badge>
              <h1 className="text-7xl md:text-9xl font-bold text-gradient-golden tracking-tight">
                LIGHT
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-gradient-golden tracking-tight">
                WORK
              </h2>
            </div>
            <div className="space-y-4 max-w-2xl">
              <p className="text-xl md:text-2xl text-amber-light leading-relaxed">
                A leading expert on equine circadian rhythms explains how various types of 
                illumination can affect your horse's health, behavior and performance.
              </p>
              <p className="text-lg text-muted-foreground">
                By Karen Elizabeth Baril • Interactive Experience
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-accent text-2xl">↓</div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 space-y-20 mr-96">
        {/* Introduction Section */}
        <section ref={addToRefs} className="article-section space-y-8">
          <Card className="bg-card/80 backdrop-blur border-border/50 golden-glow">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Sun className="h-8 w-8 text-accent animate-pulse-golden" />
                <h3 className="text-3xl font-bold text-gradient-golden">
                  Understanding Circadian Rhythms
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you keep your horses at home, you probably do a final barn check before bedtime. 
                I know I do. Of course, when I enter the barn, the first thing I do is flip on the 
                lights. In response, my horses blink away at me, looking a little dazed. I always 
                feel a little uneasy about disturbing their rest this way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                And I have often wondered how long it takes for them to return to a restful state 
                once I've left for the night. You are right to give this serious thought, says 
                Barbara Murphy, expert on equine circadian rhythms.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Light Spectrum Section */}
        <section ref={addToRefs} className="article-section">
          <LightSpectrum />
        </section>

        {/* Science Section */}
        <section ref={addToRefs} className="article-section space-y-8">
          <Card className="bg-card/80 backdrop-blur border-border/50">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center space-x-4">
                <Brain className="h-8 w-8 text-accent animate-pulse-golden" />
                <h3 className="text-3xl font-bold text-gradient-golden">
                  The Science Behind Light & Vision
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Light is the primary regulator of circadian rhythms. When sunlight stimulates 
                    specialized photoreceptors at the back of the retina, signals travel to the brain 
                    via the primary optic tract and the retino-hypothalamic tract.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Eye className="h-6 w-6 text-accent" />
                      <div>
                        <h5 className="font-semibold text-amber-light">Primary Optic Tract</h5>
                        <p className="text-sm text-muted-foreground">Visual effects, visual reflexes, rods and cones</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-accent" />
                      <div>
                        <h5 className="font-semibold text-amber-light">Retino-hypothalamic Tract</h5>
                        <p className="text-sm text-muted-foreground">Circadian rhythms: hormone secretion, heart rate, blood flow</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="eye-glow">
                  <img
                    src={anatomyImage}
                    alt="Horse anatomy showing light pathways"
                    className="w-full rounded-lg shadow-lg border border-border/50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Expert Profile */}
        <section ref={addToRefs} className="article-section">
          <ExpertProfile />
        </section>

        {/* Effects Section */}
        <section ref={addToRefs} className="article-section space-y-8">
          <Card className="bg-card/80 backdrop-blur border-border/50">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center space-x-4">
                <Moon className="h-8 w-8 text-accent animate-pulse-golden" />
                <h3 className="text-3xl font-bold text-gradient-golden">
                  When Light Disrupts Natural Rhythms
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 eye-glow">
                  <img
                    src={stableImage}
                    alt="Modern stable interior"
                    className="w-full rounded-lg shadow-lg border border-border/50"
                  />
                </div>
                
                <div className="order-1 md:order-2 space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Modern management routines and competition schedules often work against 
                    equine circadian rhythms. Disrupting a horse's circadian rhythm can 
                    contribute to undesirable behaviors, including stall weaving and other 
                    stereotypies.
                  </p>
                  
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                    <h5 className="font-semibold text-destructive mb-3">Warning Signs</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Stall weaving and repetitive behaviors</li>
                      <li>• Disrupted sleep patterns</li>
                      <li>• Mood disorders and anxiety</li>
                      <li>• Compromised immune function</li>
                      <li>• Poor coat condition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Management Tips */}
        <section ref={addToRefs} className="article-section space-y-8">
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center space-x-4">
                <Heart className="h-8 w-8 text-accent animate-pulse-golden" />
                <h3 className="text-3xl font-bold text-gradient-golden">
                  Circadian-Friendly Management Tips
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h5 className="font-semibold text-accent text-lg">Turnout & Natural Light</h5>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Turn out horses as much as possible—24/7 would be ideal</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-accent mt-1">•</span>
                      <span>For stabled horses, use lighting that simulates sunlight during the day</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Align feeding schedules with natural grazing patterns</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h5 className="font-semibold text-accent text-lg">Night Management</h5>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Install red lights in barns for night use</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Use red-light headlamps for night checks instead of bright lights</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Consider programmable barn lights for gradual transitions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur border-t border-border/50 py-8">
        <div className="max-w-4xl mx-auto px-8 mr-96">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Interactive article based on research by Dr. Barbara Murphy and content from EQUUS Magazine
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-accent">✨</span>
              <span className="text-sm text-muted-foreground">
                Understanding light helps improve equine health and welfare
              </span>
              <span className="text-accent">✨</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
