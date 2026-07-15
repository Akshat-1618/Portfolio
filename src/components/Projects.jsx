import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from '../data/projects';

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${reversed ? '' : ''}`}>
      <Reveal
        className={`relative ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
        y={30}
      >
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="relative rounded-2xl overflow-hidden border border-surface-border shadow-card aspect-[16/10] bg-surface-2"
        >
          <img
            src={project.image}
            alt={`${project.name} preview screenshot`}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.classList.add('placeholder-fill');
            }}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-ink-faint font-mono text-xs opacity-0 [.placeholder-fill_&]:opacity-100">
            {project.name} — preview image
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
        </motion.div>
      </Reveal>

      <Reveal
        className={reversed ? 'lg:order-1' : 'lg:order-2'}
        delay={0.1}
        y={30}
      >
        <p className="font-mono text-xs text-ink-faint mb-3">{project.year}</p>
        <h3 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight">{project.name}</h3>
        <p className="text-accent-soft text-sm mt-1 font-medium">{project.subtitle}</p>
        <p className="mt-5 text-ink-soft leading-relaxed">{project.description}</p>

        <ul className="mt-6 flex flex-col gap-2.5">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
              <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={16} /> Code
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Live Demo <ExternalLink size={15} />
            </a>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36 border-t border-surface-border/60">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-20">
          <p className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Featured Projects
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            A collection of projects showcasing my experience in full-stack development,
            real-time systems, graph algorithms, and AI-powered applications.
          </p>
        </Reveal>

        <div className="flex flex-col gap-28 sm:gap-36">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
