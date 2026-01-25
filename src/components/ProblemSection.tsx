import { AnimatedSection } from '@/components/AnimatedSection';
import { BatteryLow, Clock, Plug, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: BatteryLow,
    title: 'Constant Low Battery Anxiety',
    description: 'Users regularly experience stress when their device battery drops, impacting their ability to communicate, navigate, or work.',
  },
  {
    icon: Clock,
    title: 'Inconvenient Charging Cycles',
    description: 'Finding time and a power source to charge disrupts daily routines, especially for heavy users and travelers.',
  },
  {
    icon: Plug,
    title: 'Dependence on External Accessories',
    description: 'Portable chargers and cables add bulk, cost, and are often forgotten or depleted when needed most.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Situations',
    description: 'A dead phone in critical moments—emergencies, travel, or important calls—can have serious consequences.',
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Challenge</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Battery Anxiety is <span className="text-primary">Universal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Despite advances in battery technology, the fundamental problem remains: 
            our devices drain faster than our lifestyles allow for convenient recharging.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <AnimatedSection key={problem.title} delay={index * 100}>
              <div className="glass-card rounded-2xl p-8 h-full group hover:border-primary/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-destructive/10 border border-destructive/20">
            <span className="text-destructive font-semibold">54%</span>
            <span className="text-muted-foreground text-sm">of smartphone users experience battery anxiety weekly</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
