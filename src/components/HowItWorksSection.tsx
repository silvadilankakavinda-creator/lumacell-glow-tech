import { AnimatedSection } from '@/components/AnimatedSection';

const layers = [
  { name: 'Glass Layer', description: 'Protective cover glass', color: 'bg-muted-foreground/30', textColor: 'text-muted-foreground' },
  { name: 'OLED Display', description: 'Visual output layer', color: 'bg-foreground/60', textColor: 'text-foreground' },
  { name: 'LumaCell PV Layer', description: 'Transparent solar cells', color: 'bg-primary', textColor: 'text-primary', highlight: true },
  { name: 'Power Management', description: 'Voltage regulation circuit', color: 'bg-accent', textColor: 'text-accent' },
  { name: 'Battery', description: 'Energy storage', color: 'bg-muted-foreground/50', textColor: 'text-muted-foreground' },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Technology</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LumaCell integrates seamlessly into existing display architectures, adding a transparent 
            photovoltaic layer that captures light passing through the screen.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Layer Diagram */}
          <AnimatedSection delay={100}>
            <div className="relative">
              {/* Light rays */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
                <div className="w-1 h-16 bg-gradient-to-b from-yellow-400/60 to-transparent rounded-full" />
                <div className="w-1 h-20 bg-gradient-to-b from-yellow-400/80 to-transparent rounded-full" />
                <div className="w-1 h-12 bg-gradient-to-b from-yellow-400/40 to-transparent rounded-full" />
              </div>
              
              <div className="relative space-y-2 p-8">
                {layers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className={`relative rounded-xl p-4 transition-all duration-500 ${
                      layer.highlight 
                        ? 'glass-card border-primary/50 glow-cyan scale-105' 
                        : 'glass-card hover:border-border'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${layer.color}`} />
                      <div>
                        <h4 className={`font-semibold ${layer.textColor}`}>{layer.name}</h4>
                        <p className="text-sm text-muted-foreground">{layer.description}</p>
                      </div>
                    </div>
                    
                    {layer.highlight && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-primary font-medium">
                        Energy Harvesting
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Arrow to battery */}
                <div className="flex justify-center pt-4">
                  <div className="flex items-center gap-2 text-accent">
                    <div className="w-8 h-px bg-accent" />
                    <span className="text-xs">Energy Flow</span>
                    <div className="w-8 h-px bg-accent" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Process Steps */}
          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold mb-2">Light Penetration</h4>
                  <p className="text-muted-foreground">
                    Ambient light and sunlight pass through the protective glass and OLED pixels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold mb-2">Photon Absorption</h4>
                  <p className="text-muted-foreground">
                    Transparent perovskite solar cells in the LumaCell layer absorb photons and generate electrical current.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold mb-2">Power Conditioning</h4>
                  <p className="text-muted-foreground">
                    The integrated power management circuit regulates voltage and optimizes energy transfer.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold mb-2">Battery Supplement</h4>
                  <p className="text-muted-foreground">
                    Clean energy is continuously fed to the battery, extending device runtime throughout the day.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
