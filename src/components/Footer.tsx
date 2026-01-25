import { AnimatedSection } from '@/components/AnimatedSection';

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold">L</span>
              </div>
              <span className="font-display font-bold text-2xl">LumaCell</span>
            </div>
            <p className="text-primary text-lg font-medium">Power Through Light</p>
          </div>

          {/* Academic Disclaimer */}
          <div className="glass-card rounded-2xl p-8 text-center mb-12">
            <h4 className="font-semibold mb-3 text-muted-foreground">Academic Project Disclaimer</h4>
            <p className="text-sm text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
              LumaCell is a university technology research project exploring the feasibility of 
              transparent under-display photovoltaic integration. This website presents conceptual 
              research and projected capabilities based on current academic literature on transparent 
              solar cells and perovskite technology. Actual performance metrics, commercialization 
              timelines, and technical specifications are subject to ongoing research validation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground/60">
            <p>© 2025 LumaCell Research Project. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Research Paper</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
              <a href="#" className="hover:text-primary transition-colors">University Portal</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
