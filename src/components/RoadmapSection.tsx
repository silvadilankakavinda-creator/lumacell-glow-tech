import { AnimatedSection } from '@/components/AnimatedSection';
import { Smartphone, Watch, Cpu, Rocket } from 'lucide-react';

const phases = [
  {
    icon: Smartphone,
    phase: 'Phase 1',
    title: 'Smartphones',
    period: 'Year 1-2',
    description: 'Initial integration with flagship smartphone displays. Partnership development with major OEMs.',
    status: 'current',
  },
  {
    icon: Watch,
    phase: 'Phase 2',
    title: 'Wearables',
    period: 'Year 2-3',
    description: 'Expansion to smartwatches and fitness bands. Optimized low-power harvesting circuits.',
    status: 'upcoming',
  },
  {
    icon: Cpu,
    phase: 'Phase 3',
    title: 'IoT Devices',
    period: 'Year 3-4',
    description: 'Smart home displays, e-readers, and low-power sensor networks.',
    status: 'future',
  },
  {
    icon: Rocket,
    phase: 'Phase 4',
    title: 'Next Generation',
    period: 'Year 4+',
    description: 'Advanced materials research for higher efficiency transparent cells. Automotive and industrial applications.',
    status: 'future',
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Timeline</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Development <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our phased approach to bringing LumaCell from research to market.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-muted hidden md:block" />
          
          <div className="space-y-8 md:space-y-12">
            {phases.map((phase, index) => (
              <AnimatedSection key={phase.phase} delay={index * 150}>
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className={`glass-card rounded-2xl p-6 ${
                      phase.status === 'current' ? 'border-primary/50 glow-cyan' : ''
                    }`}>
                      <div className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 1 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                          phase.status === 'current' 
                            ? 'bg-primary/20 text-primary' 
                            : phase.status === 'upcoming'
                            ? 'bg-accent/20 text-accent'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {phase.phase}
                        </span>
                        <span className="text-sm text-muted-foreground">{phase.period}</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Center icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center ${
                    phase.status === 'current'
                      ? 'bg-gradient-to-br from-primary to-primary/80 glow-cyan'
                      : phase.status === 'upcoming'
                      ? 'bg-gradient-to-br from-accent/80 to-accent/60'
                      : 'bg-muted'
                  }`}>
                    <phase.icon className={`w-7 h-7 ${
                      phase.status === 'current' || phase.status === 'upcoming'
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
