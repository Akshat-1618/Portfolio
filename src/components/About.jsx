import { GraduationCap, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '../data/profile';
import { education } from '../data/education';

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="container-content">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> About
            </p>
            <h2 className="section-title">Passionate about building scalable software and solving complex problems.</h2>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-ink-soft">
                <GraduationCap size={16} className="text-accent-soft" />
                <span>{education[0].degree}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-soft">
                <MapPin size={16} className="text-accent-soft" />
                <span>{profile.location}</span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {profile.bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-ink-soft leading-relaxed text-base sm:text-lg">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3} className="mt-4 grid sm:grid-cols-3 gap-4">
              {education.map((ed) => (
                <div key={ed.id} className="card p-4">
                  <p className="text-xs text-ink-faint font-mono">{ed.period}</p>
                  <p className="mt-2 text-sm font-medium text-ink leading-snug">{ed.degree}</p>
                  <p className="mt-1 text-xs text-ink-soft">{ed.school}</p>
                  <p className="mt-3 text-sm font-mono text-accent-soft">{ed.score}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
