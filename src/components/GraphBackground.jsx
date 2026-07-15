import { useMemo } from 'react';
import { motion } from 'framer-motion';

// A generated grid-ish graph of nodes + edges, animated to suggest a
// pathfinding traversal (Dijkstra / Floyd–Warshall) lighting up over time —
// a direct nod to the dispatch/routing algorithms in Akshat's work.
function generateGraph() {
  const cols = 8;
  const rows = 5;
  const nodes = [];
  let id = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const jitterX = (Math.sin(r * 12.9898 + c * 78.233) * 43758.5453) % 1;
      const jitterY = (Math.cos(r * 4.898 + c * 7.23) * 23421.631) % 1;
      nodes.push({
        id: id++,
        x: (c / (cols - 1)) * 100 + jitterX * 4,
        y: (r / (rows - 1)) * 100 + jitterY * 4,
      });
    }
  }
  const edges = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      if (c < cols - 1) edges.push([i, i + 1]);
      if (r < rows - 1) edges.push([i, i + cols]);
    }
  }
  return { nodes, edges };
}

export default function GraphBackground({ className = '' }) {
  const { nodes, edges } = useMemo(() => generateGraph(), []);
  const activePath = useMemo(() => {
    // pick a plausible "shortest path" chain across the grid for emphasis
    const chain = [4, 12, 20, 21, 29, 37];
    return chain.filter((id) => id < nodes.length);
  }, [nodes.length]);

  return (
    <svg
      viewBox="0 0 100 60"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <g opacity="0.5">
        {edges.map(([a, b], i) => (
          <line
            key={`e-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y * 0.6}
            x2={nodes[b].x}
            y2={nodes[b].y * 0.6}
            stroke="#26262C"
            strokeWidth="0.15"
          />
        ))}
      </g>
      {activePath.slice(0, -1).map((id, i) => {
        const a = nodes[id];
        const b = nodes[activePath[i + 1]];
        if (!a || !b) return null;
        return (
          <motion.line
            key={`p-${i}`}
            x1={a.x}
            y1={a.y * 0.6}
            x2={b.x}
            y2={b.y * 0.6}
            stroke="#5B8DFF"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            transition={{ duration: 1, delay: 1.2 + i * 0.35, ease: 'easeInOut' }}
          />
        );
      })}
      {nodes.map((n) => {
        const isActive = activePath.includes(n.id);
        return (
          <motion.circle
            key={n.id}
            cx={n.x}
            cy={n.y * 0.6}
            r={isActive ? 0.55 : 0.3}
            fill={isActive ? '#5B8DFF' : '#3A3A42'}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? [0.6, 1, 0.6] : 0.5 }}
            transition={
              isActive
                ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() }
                : { duration: 1, delay: 0.4 }
            }
          />
        );
      })}
    </svg>
  );
}
