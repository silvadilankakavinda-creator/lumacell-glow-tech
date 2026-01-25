import { AnimatedSection } from '@/components/AnimatedSection';
import { Globe, Leaf, Battery, Lightbulb } from 'lucide-react';

export function VisionSection() {
  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">The Future</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Vision & <span className="text-accent">Sustainability</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={100}>
            <div className="glass-card gradient-border rounded-3xl p-10">
              <Lightbulb className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A future where every display-equipped device contributes to its own power needs. 
                Where battery anxiety becomes a relic of the past, and sustainable energy harvesting 
                is seamlessly integrated into the technology we use every day.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                LumaCell represents a step toward devices that are not just consumers of energy, 
                but active participants in a distributed, renewable energy ecosystem.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Global Impact Potential</h4>
                  <p className="text-sm text-muted-foreground">
                    Billions of devices worldwide could harvest ambient energy, reducing collective 
                    dependence on grid electricity for device charging.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Environmental Sustainability</h4>
                  <p className="text-sm text-muted-foreground">
                    Every milliwatt harvested from light is a milliwatt not drawn from the power grid, 
                    contributing to reduced carbon emissions over the device lifecycle.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Battery className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Battery Longevity</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduced charging cycles can extend battery lifespan, decreasing electronic waste 
                    and the environmental cost of battery replacement.
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
