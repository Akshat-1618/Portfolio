import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '../data/profile';

// ---------------------------------------------------------------------------
// EmailJS setup:
// 1. npm install @emailjs/browser
// 2. Create a service + template at https://www.emailjs.com
// 3. Replace the three placeholders below with your own IDs.
// 4. Uncomment the emailjs.send(...) call inside handleSubmit.
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // const emailjs = await import('@emailjs/browser');
      // await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);

      // Simulated latency until EmailJS credentials above are filled in.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 border-t border-surface-border/60">
      <div className="container-content">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Contact
            </p>
            <h2 className="section-title">Let's Connect.</h2>
            <p className="mt-4 text-ink-soft leading-relaxed max-w-md">
              Currently seeking Software Engineering internships and full-time opportunities.
              Feel free to reach out for collaborations, projects, or just to say hello.
            </p>
            <a
              href={profile.socials.email}
              className="mt-8 inline-flex items-center gap-2 text-sm text-ink hover:text-accent-soft transition-colors font-mono"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wide text-ink-faint">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-lg bg-surface-2 border border-surface-border px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent/60 transition-colors outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wide text-ink-faint">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="rounded-lg bg-surface-2 border border-surface-border px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent/60 transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wide text-ink-faint">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="rounded-lg bg-surface-2 border border-surface-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent/60 transition-colors outline-none resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary justify-center mt-1 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={16} /> Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} /> Unable to send the message. Please contact me directly via email.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
