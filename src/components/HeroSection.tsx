import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
      
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse-glow" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse-glow delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">University Technology Research</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Power Through</span>
          <br />
          <span className="text-primary glow-text">Light</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          LumaCell is a transparent photovoltaic layer integrated beneath your display, 
          harvesting ambient light to provide supplementary battery power—automatically, passively, always.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#solution">Discover LumaCell</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#how-it-works">How It Works</a>
          </Button>
        </div>

        {/* Display visualization */}
        <div className="relative w-full max-w-md mx-auto animate-fade-in animate-float" style={{ animationDelay: '0.4s' }}>
          <div className="aspect-[9/16] max-h-[400px] rounded-[2.5rem] border-4 border-border/50 bg-gradient-to-b from-card to-background overflow-hidden relative shadow-2xl glow-cyan">
            {/* Screen content simulation */}
            <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-muted/50 to-card overflow-hidden">
              {/* Light rays passing through */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full bg-gradient-to-b from-primary/40 via-primary/20 to-accent/30 blur-2xl animate-pulse-glow" />
              </div>
              
              {/* Layer labels */}
              <div className="absolute inset-x-4 top-1/4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <span className="text-xs text-muted-foreground/60">Glass Layer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-foreground/50" />
                  <span className="text-xs text-muted-foreground/60">OLED Display</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-primary">LumaCell PV Layer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-xs text-accent">Power Circuit</span>
                </div>
              </div>
              
              {/* Battery indicator */}
              <div className="absolute bottom-6 inset-x-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-accent">+</span>
                  <span className="text-xs text-muted-foreground">Harvesting light energy</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#problem" className="text-muted-foreground/50 hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
