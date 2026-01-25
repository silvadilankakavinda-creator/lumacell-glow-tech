import { AnimatedSection } from '@/components/AnimatedSection';
import { Smartphone, Watch, Cpu, Building2 } from 'lucide-react';

export function MarketSection() {
  return (
    <section id="market" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Opportunity</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Target <span className="text-accent">Market</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Target Devices */}
          <AnimatedSection delay={100}>
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold mb-8">Target Devices</h3>
              
              <div className="glass-card rounded-2xl p-6 border-l-4 border-l-primary">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Smartphones</h4>
                    <p className="text-sm text-muted-foreground">Primary focus with largest display area and highest user anxiety</p>
                  </div>
                  <span className="ml-auto text-xs text-primary font-medium px-3 py-1 rounded-full bg-primary/10">Phase 1</span>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border-l-4 border-l-accent/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Watch className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Wearables</h4>
                    <p className="text-sm text-muted-foreground">Smartwatches and fitness bands with all-day wear patterns</p>
                  </div>
                  <span className="ml-auto text-xs text-accent font-medium px-3 py-1 rounded-full bg-accent/10">Phase 2</span>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border-l-4 border-l-muted-foreground/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">IoT & Smart Devices</h4>
                    <p className="text-sm text-muted-foreground">Low-power sensors and displays in smart home ecosystems</p>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground font-medium px-3 py-1 rounded-full bg-muted">Future</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Business Model */}
          <AnimatedSection delay={200}>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-8">Business Model</h3>
              
              <div className="glass-card gradient-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold">B2B Technology Licensing</h4>
                    <p className="text-sm text-muted-foreground">Partner with device manufacturers</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <p>License LumaCell technology to smartphone and wearable OEMs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <p>Provide integration support and technical documentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <p>Revenue through per-unit royalties and licensing fees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <p>Focus on R&D while partners handle manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
