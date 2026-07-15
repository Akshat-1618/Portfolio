import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Briefcase, GraduationCap, Award, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { education } from '../data/education';
import { skillGroups } from '../data/skills';
import { achievements, honors } from '../data/achievements';

const TABS = [
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'achievements', label: 'Achievements', icon: Award },
];

export default function Resume() {
  const [active, setActive] = useState('projects');

  return (
    <section id="resume" className="py-28 sm:py-36 border-t border-surface-border/60">
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Resume
            </p>
            <h2 className="section-title">The interactive version.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={profile.resumeFile} download className="btn-primary">
              <FileDown size={16} /> Download PDF
            </a>
          </Reveal>
        </div>

        <Reveal className="card p-2 sm:p-3 mb-2 flex flex-wrap gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'text-bg' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="resume-tab-bg"
                    className="absolute inset-0 rounded-xl bg-ink"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={14} className="relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </Reveal>

        <div className="card p-6 sm:p-9 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {active === 'projects' && (
                <div className="flex flex-col gap-6">
                  {projects.map((p) => (
                    <div key={p.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-surface-border/60 pb-6 last:border-0 last:pb-0">
                      <span className="font-mono text-xs text-ink-faint w-24 shrink-0">{p.year}</span>
                      <div>
                        <p className="font-medium text-ink">{p.name} <span className="text-ink-faint font-normal">— {p.subtitle}</span></p>
                        <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {active === 'education' && (
                <div className="flex flex-col gap-6">
                  {education.map((ed) => (
                    <div key={ed.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-surface-border/60 pb-6 last:border-0 last:pb-0">
                      <span className="font-mono text-xs text-ink-faint w-24 shrink-0">{ed.period}</span>
                      <div>
                        <p className="font-medium text-ink">{ed.degree}</p>
                        <p className="text-sm text-ink-soft mt-1">{ed.school}</p>
                        <p className="text-sm font-mono text-accent-soft mt-1">{ed.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {active === 'skills' && (
                <div className="grid sm:grid-cols-2 gap-6">
                  {skillGroups.map((g) => (
                    <div key={g.id}>
                      <p className="text-xs font-mono uppercase tracking-wide text-ink-faint mb-2.5">{g.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {g.skills.map((s) => <span key={s} className="tag">{s}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {active === 'achievements' && (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {achievements.map((a) => (
                      <div key={a.id}>
                        <span className="font-mono text-lg text-ink">{a.value}{a.suffix}</span>
                        <span className="text-sm text-ink-soft ml-2">{a.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 pt-4 border-t border-surface-border/60">
                    {honors.map((h) => (
                      <div key={h.id} className="text-sm">
                        <span className="text-ink font-medium">{h.title}</span>
                        <span className="text-ink-soft"> — {h.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
