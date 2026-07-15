import { motion, AnimatePresence } from 'framer-motion';

const NODES = [
  { x: 20, y: 60 },
  { x: 70, y: 20 },
  { x: 130, y: 45 },
  { x: 100, y: 90 },
  { x: 170, y: 80 },
];

const EDGES = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 4],
  [3, 4],
];

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          aria-hidden="true"
        >
          <svg width="190" height="110" viewBox="0 0 190 110" className="mb-6">
            {EDGES.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke="#5B8DFF"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeInOut' }}
              />
            ))}
            {NODES.map((n, i) => (
              <motion.circle
                key={i}
                cx={n.x}
                cy={n.y}
                r="4"
                fill="#5B8DFF"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 1], opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
              />
            ))}
          </svg>
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-ink-faint">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              Loading Portfolio...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
