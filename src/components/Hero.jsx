import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { profile } from '../data/profile';
import GraphBackground from './GraphBackground';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <GraphBackground className="absolute inset-0 w-full h-full opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative container-content"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
          Available for Software Engineering Internships & Full-Time Roles • Class of 2027
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink max-w-4xl leading-[1.05]"
        >
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="mt-5 text-lg sm:text-xl text-ink-soft max-w-2xl leading-relaxed">
          {profile.tagline}
        </motion.p>

        <motion.p variants={item} className="mt-3 text-sm sm:text-base text-ink-faint max-w-xl leading-relaxed">
          {profile.subTagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View Projects <ArrowUpRight size={16} />
          </a>
          <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FileDown size={16} /> Resume
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} /> Let's Connect
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-faint hover:text-ink transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint hover:text-ink transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="text-ink-faint hover:text-ink transition-colors"
          >
            <Mail size={20} />
          </a>
          <span className="h-4 w-px bg-surface-border" />
          <span className="font-mono text-xs text-ink-faint">{profile.location}</span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-ink-faint">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-9 w-5 rounded-full border border-surface-border flex justify-center pt-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
