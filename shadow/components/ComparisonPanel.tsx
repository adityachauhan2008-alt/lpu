"use client";

interface ComparisonPanelProps {
  bestAgent: string;
  reasoning: string;
  isVisible: boolean;
}

export default function ComparisonPanel({
  bestAgent,
  reasoning,
  isVisible,
}: ComparisonPanelProps) {
  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-2xl flex-shrink-0">
          🏆
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">
            Best Response: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">{bestAgent}</span>
          </h3>
          <p className="text-zinc-300 leading-relaxed">{reasoning}</p>
        </div>
      </div>
    </div>
  );
}
