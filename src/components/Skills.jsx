import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-36 border-t border-surface-border/60">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Skills
          </p>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            A collection of programming languages, frameworks, tools, and technologies I use to build scalable web applications, solve algorithmic problems, and develop AI-powered solutions.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = Icons[group.icon] ?? Icons.Code2;
            return (
              <Reveal key={group.id} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="card p-6 h-full group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-dim/50 border border-accent-dim text-accent-soft group-hover:bg-accent-dim group-hover:text-accent transition-colors">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-medium text-ink">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
