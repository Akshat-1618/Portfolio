import Reveal from './Reveal';
import { timeline } from '../data/timeline';

const tagColors = {
  Education: 'text-accent-soft border-accent-dim bg-accent-dim/40',
  Project: 'text-amber border-amber-dim bg-amber-dim/40',
  Achievement: 'text-emerald-300 border-emerald-900/60 bg-emerald-900/20',
  Growth: 'text-ink-soft border-surface-border bg-surface-2',
  Present: 'text-accent border-accent/40 bg-accent-dim/60',
};

export default function Timeline() {
  return (
    <section id="journey" className="py-28 sm:py-36 border-t border-surface-border/60">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Journey
          </p>
          <h2 className="section-title">A Timeline of My Growth</h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-surface-border sm:-translate-x-1/2" />

          <div className="flex flex-col gap-10 sm:gap-4">
            {timeline.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={entry.id}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${i !== 0 ? 'sm:mt-4' : ''}`}
                >
                  <span
                    className="absolute left-0 sm:left-1/2 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full
                      bg-bg border-2 border-accent z-10"
                  />

                  <Reveal
                    y={16}
                    className={`pl-8 sm:pl-0 ${
                      isLeft ? 'sm:col-start-1 sm:row-start-1 sm:text-right sm:pr-10' : 'sm:col-start-2 sm:row-start-1 sm:pl-10'
                    }`}
                  >
                    <div className="card p-5">
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <span className="font-mono text-xs text-ink-faint">{entry.date}</span>
                        <span className={`tag border ${tagColors[entry.tag] ?? 'text-ink-soft border-surface-border'}`}>
                          {entry.tag}
                        </span>
                      </div>
                      <h3 className="font-medium text-ink">{entry.title}</h3>
                      <p className="text-xs text-accent-soft mt-1 font-mono">{entry.org}</p>
                      <p className="text-sm text-ink-soft mt-3 leading-relaxed">{entry.description}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
