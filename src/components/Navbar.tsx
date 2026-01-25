import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Research', href: '#research' },
  { label: 'Roadmap', href: '#roadmap' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
            LumaCell
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-xs text-muted-foreground/60 hidden lg:block">
          University Research Project
        </div>
      </div>
    </nav>
  );
}
