import Reveal from './Reveal';
import { nowItems} from '../data/now';

export default function Now() {
  return (
    <section id="now" className="py-28 sm:py-36 border-t border-surface-border/60">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Now
          </p>
          <h2 className="section-title">Currently Learning</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Technologies and concepts I'm currently exploring to strengthen my software engineering skills.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {nowItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="card p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm text-ink">{item.name}</span>
                  <span className="tag border border-amber-dim text-amber">in progress</span>
                </div>
                <p className="text-sm text-ink-soft leading-relaxed">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
