import { motion } from "motion/react";

interface GaugeProps {
  value: number;
  max?: number;
  title: string;
  color?: string;
}

export function Gauge({ value, max = 100, title, color = "text-emerald-500" }: GaugeProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="relative flex items-center justify-center">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-800"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className={color}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <span className="absolute text-2xl font-light text-white">{value}<span className="text-xs text-slate-500">%</span></span>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">{title}</span>
    </div>
  );
}
