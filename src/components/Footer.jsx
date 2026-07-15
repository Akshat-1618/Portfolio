import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border/60 py-14">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <a href="#top" className="font-mono text-sm font-semibold text-ink">
              akshat<span className="text-accent">.</span>sxn
            </a>
            <p className="mt-3 text-sm text-ink-faint max-w-xs leading-relaxed">
              Built with React, Tailwind CSS, and Framer Motion. Designed and developed by Akshat Saxena.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink-soft hover:text-ink transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-faint hover:text-ink transition-colors">
              <Github size={18} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-faint hover:text-ink transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={profile.socials.email} aria-label="Email" className="text-ink-faint hover:text-ink transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-faint font-mono">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 text-xs text-ink-faint hover:text-accent-soft transition-colors">
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
