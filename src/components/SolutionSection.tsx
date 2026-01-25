import { AnimatedSection } from '@/components/AnimatedSection';
import { Zap, Eye, Sparkles } from 'lucide-react';

export function SolutionSection() {
  return (
    <section id="solution" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">The Solution</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Introducing <span className="text-primary glow-text">LumaCell</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A transparent photovoltaic layer seamlessly integrated beneath your device's display, 
            harvesting ambient and sunlight to continuously provide supplementary power—without 
            any user intervention.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          <AnimatedSection delay={100}>
            <div className="glass-card gradient-border rounded-2xl p-8 text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Transparent</h3>
              <p className="text-muted-foreground">
                The photovoltaic layer is optically transparent, allowing full display visibility while capturing light energy.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card gradient-border rounded-2xl p-8 text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Passive</h3>
              <p className="text-muted-foreground">
                Works automatically whenever light is present. No buttons, no apps, no user action required.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="glass-card gradient-border rounded-2xl p-8 text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Supplementary</h3>
              <p className="text-muted-foreground">
                Provides additional battery life—not full charging. Every bit of harvested energy extends your usage time.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400} className="mt-16 text-center">
          <div className="inline-block glass-card rounded-2xl px-8 py-6">
            <p className="text-lg text-muted-foreground mb-2">Core Principle</p>
            <p className="font-display text-2xl font-semibold text-foreground">
              "Your screen becomes a <span className="text-primary">silent power source</span>"
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
