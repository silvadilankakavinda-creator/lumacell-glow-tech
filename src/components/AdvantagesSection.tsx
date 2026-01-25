import { AnimatedSection } from '@/components/AnimatedSection';
import { Maximize, Cog, Package, ShieldAlert, Leaf } from 'lucide-react';

const advantages = [
  {
    icon: Maximize,
    title: 'Uses Existing Screen Area',
    description: 'No additional surface area required—the display itself becomes the solar panel.',
  },
  {
    icon: Cog,
    title: 'Works Automatically',
    description: 'Zero user intervention needed. Harvesting happens passively whenever light is present.',
  },
  {
    icon: Package,
    title: 'No External Accessories',
    description: 'Built into the device. No cases, attachments, or portable chargers to carry.',
  },
  {
    icon: ShieldAlert,
    title: 'Emergency Power Support',
    description: 'Even minimal harvested energy can enable critical calls or messages when battery is critically low.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Solution',
    description: 'Reduces reliance on grid charging, contributing to lower carbon footprint over device lifetime.',
  },
];

export function AdvantagesSection() {
  return (
    <section id="advantages" className="section-padding relative">
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Benefits</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Unique <span className="text-accent">Advantages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LumaCell offers distinct benefits over traditional charging methods and external solar solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <AnimatedSection key={advantage.title} delay={index * 100}>
              <div className="glass-card rounded-2xl p-6 h-full group hover:border-accent/30 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
