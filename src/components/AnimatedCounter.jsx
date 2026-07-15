import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', decimals = 0, duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums font-mono">
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
