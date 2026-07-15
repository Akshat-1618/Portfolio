import * as Icons from 'lucide-react';
import Reveal from './Reveal';
import AnimatedCounter from './AnimatedCounter';
import { achievements, honors } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 sm:py-36 border-t border-surface-border/60">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Achievements
          </p>
          <h2 className="section-title">Milestones that reflect my learning journey.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {achievements.map((a, i) => {
            const Icon = Icons[a.icon] ?? Icons.Trophy;
            return (
              <Reveal key={a.id} delay={i * 0.08}>
                <div className="card p-6 h-full">
                  <Icon size={18} className="text-accent-soft mb-4" />
                  <div className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
                    <AnimatedCounter value={a.value} suffix={a.suffix} decimals={a.decimals ?? 0} />
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">{a.label}</p>
                  {a.note && <p className="mt-1 text-xs font-mono text-amber">{a.note}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {honors.map((h, i) => {
            const Icon = Icons[h.icon] ?? Icons.Medal;
            return (
              <Reveal key={h.id} delay={i * 0.08}>
                <div className="flex gap-4 p-5 rounded-2xl border border-surface-border bg-surface/40">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-dim/50 border border-amber-dim text-amber">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{h.title}</p>
                    <p className="text-xs text-ink-soft mt-1 leading-relaxed">{h.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
