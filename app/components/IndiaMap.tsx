"use client";

import { useEffect, useRef } from "react";

/* ─── Node Positions (% coordinates on an ~800x900 viewBox) ─── */
const languageNodes = [
  { id: "hindi", x: 380, y: 280, label: "हिन्दी", lang: "Hindi" },
  { id: "tamil", x: 410, y: 680, label: "தமிழ்", lang: "Tamil" },
  { id: "bengali", x: 570, y: 340, label: "বাংলা", lang: "Bengali" },
  { id: "telugu", x: 420, y: 560, label: "తెలుగు", lang: "Telugu" },
  { id: "marathi", x: 310, y: 440, label: "मराठी", lang: "Marathi" },
  { id: "kannada", x: 350, y: 600, label: "ಕನ್ನಡ", lang: "Kannada" },
  { id: "gujarati", x: 240, y: 350, label: "ગુજરાતી", lang: "Gujarati" },
  { id: "malayalam", x: 370, y: 720, label: "മലയാളം", lang: "Malayalam" },
  { id: "punjabi", x: 330, y: 180, label: "ਪੰਜਾਬੀ", lang: "Punjabi" },
  { id: "odia", x: 500, y: 430, label: "ଓଡ଼ିଆ", lang: "Odia" },
  { id: "assamese", x: 620, y: 280, label: "অসমীয়া", lang: "Assamese" },
  { id: "urdu", x: 340, y: 240, label: "اردو", lang: "Urdu" },
];

/* ─── Connection pairs (indices into languageNodes) ─── */
const connections = [
  [0, 1], [0, 2], [0, 4], [0, 6], [0, 8], [0, 11],
  [1, 3], [1, 5], [1, 7],
  [2, 9], [2, 10],
  [3, 5], [3, 9],
  [4, 6], [5, 7],
];

export default function IndiaMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Stagger the pulse animations for visual variety
    const rings = svgRef.current?.querySelectorAll(".pulse-ring");
    rings?.forEach((ring, i) => {
      (ring as SVGElement).style.animationDelay = `${i * 0.25}s`;
    });
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-30 pointer-events-none">
      <svg
        ref={svgRef}
        viewBox="0 0 800 900"
        className="h-full w-auto max-w-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial gradient for nodes */}
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#ac441e" stopOpacity="1" />
            <stop offset="100%" stopColor="#06D6A0" stopOpacity="0.4" />
          </radialGradient>

          {/* Line gradient */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ac441e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06D6A0" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* India outline — simplified stylized path */}
        <path
          d="M330,120 C300,130 280,145 275,160 C270,170 265,185 260,200 
             C255,210 240,225 230,240 C220,260 210,280 205,300 
             C200,320 195,345 200,370 C205,390 215,410 220,430 
             C225,445 230,460 240,480 C250,500 260,520 270,540 
             C280,555 290,570 300,585 C310,600 320,620 330,640 
             C340,660 350,685 360,700 C370,720 375,740 380,755 
             C385,765 395,770 405,760 C415,745 420,725 425,710 
             C430,695 440,675 450,660 C460,640 470,620 480,600 
             C490,575 500,555 510,530 C520,510 530,490 540,470 
             C550,450 555,430 560,410 C570,385 575,360 580,340 
             C590,310 600,290 610,270 C615,255 620,240 625,225 
             C628,215 630,200 625,185 C618,170 605,160 590,150 
             C575,142 555,135 540,130 C520,125 500,120 480,118 
             C460,115 440,113 420,112 C400,110 380,112 360,115 
             C345,117 335,118 330,120Z"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Connection lines between language nodes */}
        {connections.map(([fromIdx, toIdx], i) => {
          const from = languageNodes[fromIdx];
          const to = languageNodes[toIdx];
          // Curved connection via midpoint offset
          const mx = (from.x + to.x) / 2 + (i % 2 === 0 ? 20 : -20);
          const my = (from.y + to.y) / 2 + (i % 3 === 0 ? 15 : -15);
          return (
            <path
              key={`conn-${i}`}
              d={`M${from.x},${from.y} Q${mx},${my} ${to.x},${to.y}`}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.8"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
              />
            </path>
          );
        })}

        {/* Language nodes */}
        {languageNodes.map((node, i) => (
          <g key={node.id}>
            {/* Pulse ring */}
            <circle
              className="pulse-ring"
              cx={node.x}
              cy={node.y}
              r="6"
              fill="none"
              stroke="#ac441e"
              strokeWidth="1"
              opacity="0"
            >
              <animate
                attributeName="r"
                values="6;24;6"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
              <animate
                attributeName="opacity"
                values="0.6;0;0.6"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            </circle>

            {/* Outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="url(#nodeGradient)"
              opacity="0.3"
              filter="url(#glow)"
            />

            {/* Inner dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#ac441e"
              filter="url(#glow)"
            >
              <animate
                attributeName="r"
                values="3;5;3"
                dur={`${2 + (i % 2)}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Language label */}
            <text
              x={node.x}
              y={node.y - 16}
              textAnchor="middle"
              fill="#ac441e"
              fontSize="10"
              fontFamily="system-ui"
              opacity="0.7"
            >
              {node.label}
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur={`${4 + (i % 3)}s`}
                repeatCount="indefinite"
              />
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
