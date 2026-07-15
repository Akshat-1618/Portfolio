import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { codingProfiles } from '../data/now';

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-28 sm:py-36 border-t border-surface-border/60">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Coding Profiles
          </p>
          <h2 className="section-title">Coding profiles & competitive programming.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {codingProfiles.map((p, i) => {
            const Icon = Icons[p.icon] ?? Icons.Code2;
            return (
              <Reveal key={p.id} delay={i * 0.06}>
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  className="card p-5 flex flex-col h-full group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 border border-surface-border text-ink-soft group-hover:text-accent-soft group-hover:border-accent/50 transition-colors">
                      <Icon size={16} />
                    </div>
                    <ArrowUpRight size={14} className="text-ink-faint group-hover:text-accent-soft transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-ink">{p.name}</p>
                  <p className="text-xs text-ink-faint font-mono mt-0.5">{p.handle}</p>
                  <p className="mt-4 text-lg font-mono font-semibold text-accent-soft">{p.stat}</p>
                  <p className="text-xs text-ink-soft mt-1">{p.detail}</p>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
