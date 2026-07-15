import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`container-content flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass-panel px-5 py-2.5 shadow-card' : 'px-5 py-2.5 border border-transparent'
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-ink">
          akshat<span className="text-accent">.</span>sxn
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-ink-soft rounded-lg transition-colors hover:text-ink hover:bg-surface-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#resume" className="btn-secondary !py-2 !px-4 text-xs">
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden text-ink p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden container-content mt-2"
          >
            <div className="glass-panel rounded-2xl p-4 flex flex-col gap-1 shadow-card">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-ink-soft rounded-lg hover:text-ink hover:bg-surface-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#resume"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center mt-2"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
