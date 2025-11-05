"use client";

interface AIAgentCardProps {
  name: string;
  response: string;
  isLoading: boolean;
  color: string;
  icon: string;
}

export default function AIAgentCard({
  name,
  response,
  isLoading,
  color,
  icon,
}: AIAgentCardProps) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl ${color}`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          <div className="h-4 bg-zinc-800 rounded animate-pulse"></div>
          <div className="h-4 bg-zinc-800 rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-zinc-800 rounded animate-pulse w-4/6"></div>
        </div>
      ) : (
        <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
          {response}
        </p>
      )}
    </div>
  );
}
