import { AnimatedSection } from '@/components/AnimatedSection';
import { AlertCircle, TrendingDown, Sun, Target } from 'lucide-react';

const considerations = [
  {
    icon: TrendingDown,
    title: 'Low Power Output',
    description: 'Transparent solar cells have lower efficiency (5-10%) compared to opaque panels (20%+). Output is measured in milliwatts, not watts.',
    type: 'limitation',
  },
  {
    icon: AlertCircle,
    title: 'Reflection & Absorption Losses',
    description: 'Light must pass through glass and display layers, reducing the energy available for harvesting.',
    type: 'limitation',
  },
  {
    icon: Sun,
    title: 'Light Dependency',
    description: 'Performance varies significantly between indoor ambient light and direct sunlight conditions.',
    type: 'limitation',
  },
  {
    icon: Target,
    title: 'Supplementary Nature',
    description: 'LumaCell extends battery life incrementally—it is not designed to replace primary charging.',
    type: 'clarification',
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-transparent to-card/20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Transparency</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Research & <span className="text-primary">Feasibility</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in honest communication about technology limitations. 
            LumaCell is grounded in emerging transparent photovoltaic research with realistic expectations.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {considerations.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div className={`glass-card rounded-2xl p-6 h-full border-l-4 ${
                item.type === 'limitation' ? 'border-l-yellow-500/50' : 'border-l-primary/50'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.type === 'limitation' ? 'bg-yellow-500/10' : 'bg-primary/10'
                  }`}>
                    <item.icon className={`w-5 h-5 ${
                      item.type === 'limitation' ? 'text-yellow-500' : 'text-primary'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-semibold mb-4">Expected Performance Range</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">5-15</p>
                <p className="text-sm text-muted-foreground">mW indoor</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50-150</p>
                <p className="text-sm text-muted-foreground">mW outdoor</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">5-10%</p>
                <p className="text-sm text-muted-foreground">daily extension</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">70%+</p>
                <p className="text-sm text-muted-foreground">transparency</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              * Estimates based on current transparent perovskite solar cell research. Actual performance may vary.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
