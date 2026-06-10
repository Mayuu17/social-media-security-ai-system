import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ScoreCardProps {
  title: string;
  value: ReactNode;
  subtitle?: string;
  icon?: ReactNode;
  colorClass?: string;
  delay?: number;
}

export function ScoreCard({ title, value, subtitle, icon, colorClass, delay = 0 }: ScoreCardProps) {
  const isDataUnavailable = value === "Data Unavailable";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#161922] border border-white/5 rounded-2xl p-5 flex items-start space-x-4 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b opacity-50 from-transparent via-slate-700 to-transparent group-hover:via-white transition-all duration-500"></div>
      
      {icon && (
        <div className={cn("p-3 rounded-lg bg-slate-800/50 text-slate-400", colorClass)}>
          {icon}
        </div>
      )}
      
      <div className="flex-1">
        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{title}</h3>
        <div className={cn(
          "font-bold mt-1 tracking-tight", 
          isDataUnavailable ? "text-sm text-slate-500 mt-2 font-sans" : "text-2xl font-mono",
          colorClass && !isDataUnavailable ? colorClass : (isDataUnavailable ? "" : "text-white")
        )}>
          {value}
        </div>
        {subtitle && (
          <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
