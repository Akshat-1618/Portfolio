export const projects = [
  {
    id: 'urbanshield',
    name: 'UrbanShield',
    subtitle: 'Smart City Emergency Response Platform',
    year: '2026',
    image: '/images/projects/urbanshield.jpg',

    description:
      'A full-stack MERN platform that streamlines emergency response by connecting citizens, administrators, and emergency units through real-time incident reporting, intelligent dispatch, and live tracking.',

    features: [
      'Role-based dashboards for Citizens, Administrators, and Emergency Units',
      'Graph-based dispatch using Floyd–Warshall shortest paths',
      'Intelligent unit allocation with Max-Heap Priority Queue',
      'Real-time incident tracking using Socket.IO',
      'JWT Authentication with Role-Based Access Control',
      'Interactive city map with live incident visualization',
    ],

    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Socket.IO',
      'JWT',
      'RBAC',
      'Vercel',
      'Render',
    ],

    links: {
      github: 'https://github.com/Akshat-1618/UrbanShield',
      demo: 'https://urban-shield-six.vercel.app/',
    },

    featured: true,
  },

  {
    id: 'metro-management',
    name: 'Metro Management System',
    subtitle: 'Metro Route Planning & Network Optimization',
    year: '2024',
    image: '/images/projects/metro-management.jpg',

    description:
      'A C++ based metro network simulator featuring intelligent route planning, fare calculation, metro card management, and graph-based network optimization.',

    features: [
      "Shortest path computation using Dijkstra's Algorithm",
      'BFS-based station traversal and utilities',
      'Chinese Postman Problem for optimal patrol route generation',
      'Metro card management system',
      'Modular Object-Oriented Design',
    ],

    stack: [
      'C++',
      'OOP',
      'Graph Theory',
      "Dijkstra's Algorithm",
      'BFS',
    ],

    links: {
      github: 'https://github.com/SV2111004/Metro-system',
      demo: null,
    },

    featured: true,
  },

  {
    id: 'ai-document-intelligence',
    name: 'AI Document Intelligence System',
    subtitle: 'AI-powered PDF Analysis & Study Assistant',
    year: '2025',
    image: '/images/projects/ai-doc-intelligence.jpg',

    description:
      'An AI-powered platform that analyzes PDFs, generates structured summaries, answers contextual questions, creates study planners, and produces educational podcasts.',

    features: [
      'PDF text extraction and summarization',
      'Context-aware Q&A using Gemini API',
      'Automatic lecture and lab planner generation',
      'Multi-speaker podcast generation',
      'Downloadable study resources',
    ],

    stack: [
      'React.js',
      'FastAPI',
      'Gemini API',
      'Edge-TTS',
      'Pydub',
    ],

    links: {
      github: 'https://github.com/Akshat-1618/AI-Document-Assisstant',
      demo: null,
    },

    featured: true,
  },
];