import { Clock, ShieldAlert, ShieldCheck } from "lucide-react";
import { HistoryItem } from "../types";
import { cn } from "../lib/utils";

interface AnalysisHistoryProps {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

export function AnalysisHistory({ history, onSelect }: AnalysisHistoryProps) {
  if (history.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 text-sm border border-slate-800 border-dashed rounded-xl">
        No recent analysis history.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {history.map((item) => {
        const isBot = item.result.classification === "Automated/Suspicious Account";
        const isFake = item.result.classification === "FAKE";
        const isReal = item.result.classification === "REAL";

        return (
          <div
            key={item.id}
            onClick={() => onSelect(item)}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 border border-transparent cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className={cn(
                  "p-2 rounded-full",
                  isReal ? "bg-emerald-500/10 text-emerald-500" : "",
                  (isFake || isBot) ? "bg-red-500/10 text-red-500" : ""
                )}
              >
                {isReal ? <ShieldCheck className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-slate-300 truncate max-w-[150px] sm:max-w-xs">{item.input}</p>
                <div className="flex items-center text-[10px] text-slate-500 mt-1">
                  {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {item.result.classification}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
