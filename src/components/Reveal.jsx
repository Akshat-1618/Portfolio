import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className = '',
  as = 'div',
  once = true,
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
