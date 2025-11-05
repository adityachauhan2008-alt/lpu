"use client";

import { useState } from "react";
import ShadowLogo from "@/components/ShadowLogo";
import AIAgentCard from "@/components/AIAgentCard";
import ComparisonPanel from "@/components/ComparisonPanel";
import VoiceControls from "@/components/VoiceControls";

interface AIAgent {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface AIResponse {
  agent: string;
  response: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [responses, setResponses] = useState<AIResponse[]>([]);
  const [bestAgent, setBestAgent] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [selectedResponse, setSelectedResponse] = useState("");

  const aiAgents: AIAgent[] = [
    { id: "gemini", name: "Gemini", icon: "💎", color: "bg-blue-500/20" },
    { id: "claude", name: "Claude", icon: "🧠", color: "bg-orange-500/20" },
    { id: "grok", name: "Grok", icon: "⚡", color: "bg-purple-500/20" },
    { id: "perplexity", name: "Perplexity", icon: "🔍", color: "bg-cyan-500/20" },
    { id: "chatgpt", name: "ChatGPT", icon: "🤖", color: "bg-green-500/20" },
  ];

  const mockResponses: Record<string, (query: string) => string> = {
    gemini: (q) =>
      `Based on my analysis of "${q}", I can provide a comprehensive answer. Google's Gemini offers multimodal capabilities that allow me to process and understand various types of information. The key aspects to consider are context, accuracy, and relevance. I strive to provide detailed, well-researched responses that address your query from multiple angles.`,
    claude: (q) =>
      `I appreciate your question about "${q}". Let me break this down thoughtfully. As Claude, I aim to be helpful, harmless, and honest in my responses. I'll consider the nuances of your query and provide a balanced perspective. It's important to note that while I can offer insights, I always encourage critical thinking and verification of information from multiple sources.`,
    grok: (q) =>
      `Yo! You asked about "${q}" - let me give you the real deal. Grok here, and I'm all about cutting through the noise. Here's what you need to know: this is a complex topic with multiple viewpoints. I'll give you the straight facts mixed with some wit. The bottom line is that understanding this requires looking at data, trends, and real-world applications.`,
    perplexity: (q) =>
      `Searching for: "${q}"\n\nBased on current sources and real-time information, here's what I found:\n\n• Key Finding 1: The topic has multiple dimensions worth exploring\n• Key Finding 2: Recent developments show interesting trends\n• Key Finding 3: Expert consensus suggests a balanced approach\n\nSources: Multiple verified databases and recent publications. I prioritize accuracy and cite-able information.`,
    chatgpt: (q) =>
      `Thank you for asking about "${q}". I'm ChatGPT, and I'm here to help! Let me provide you with a clear and informative response.\n\nFirst, let's understand the context. This topic involves several important considerations. I'll organize my response to be as helpful as possible:\n\n1. Overview: The fundamental concepts\n2. Details: Specific information relevant to your query\n3. Practical applications: How this applies in real scenarios\n\nI hope this helps! Feel free to ask follow-up questions.`,
  };

  const analyzeResponses = (responses: AIResponse[], query: string) => {
    const analyses = [
      {
        agent: "Gemini",
        reason: "Provides the most comprehensive and well-structured analysis with multimodal understanding.",
      },
      {
        agent: "Claude",
        reason: "Offers the most thoughtful and balanced perspective with emphasis on critical thinking.",
      },
      {
        agent: "Grok",
        reason: "Delivers the most direct and practical answer with real-world context.",
      },
      {
        agent: "Perplexity",
        reason: "Provides the most up-to-date information with verified sources and citations.",
      },
      {
        agent: "ChatGPT",
        reason: "Gives the most organized and user-friendly response with clear structure.",
      },
    ];

    const randomIndex = Math.floor(Math.random() * analyses.length);
    return analyses[randomIndex];
  };

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    setResponses([]);
    setBestAgent("");
    setReasoning("");
    setSelectedResponse("");

    await new Promise((resolve) => setTimeout(resolve, 500));

    const newResponses: AIResponse[] = aiAgents.map((agent) => ({
      agent: agent.name,
      response: mockResponses[agent.id](query),
    }));

    setResponses(newResponses);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const analysis = analyzeResponses(newResponses, query);
    setBestAgent(analysis.agent);
    setReasoning(analysis.reason);

    const bestResponse = newResponses.find((r) => r.agent === analysis.agent);
    if (bestResponse) {
      setSelectedResponse(bestResponse.response);
    }

    setIsSearching(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShadowLogo className="w-10 h-10" />
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Shadow
              </h1>
            </div>
            <p className="text-sm text-zinc-400 hidden md:block">
              Multi-AI Agent Comparison Platform
            </p>
          </div>
        </header>

        {/* Main container */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Search section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Ask All AI Agents at Once
              </h2>
              <p className="text-zinc-400 text-lg">
                Get responses from Gemini, Claude, Grok, Perplexity, and ChatGPT simultaneously
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask anything..."
                  className="w-full px-6 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-all"
                />
                <button
                  onClick={handleSearch}
                  disabled={isSearching || !query.trim()}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-lg font-medium transition-all ${
                    isSearching || !query.trim()
                      ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/50"
                  }`}
                >
                  {isSearching ? "Searching..." : "Search"}
                </button>
              </div>
            </div>
          </div>

          {/* Comparison panel */}
          {bestAgent && (
            <ComparisonPanel
              bestAgent={bestAgent}
              reasoning={reasoning}
              isVisible={!!bestAgent}
            />
          )}

          {/* Voice controls */}
          {selectedResponse && (
            <div className="mb-8 max-w-3xl mx-auto bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">
                🎤 Voice Synthesis
              </h3>
              <VoiceControls text={selectedResponse} />
            </div>
          )}

          {/* AI Agent responses */}
          {(isSearching || responses.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiAgents.map((agent) => {
                const response = responses.find((r) => r.agent === agent.name);
                return (
                  <AIAgentCard
                    key={agent.id}
                    name={agent.name}
                    response={response?.response || ""}
                    isLoading={isSearching}
                    color={agent.color}
                    icon={agent.icon}
                  />
                );
              })}
            </div>
          )}

          {/* Empty state */}
          {!isSearching && responses.length === 0 && (
            <div className="text-center py-20">
              <ShadowLogo className="w-24 h-24 mx-auto mb-6 opacity-50" />
              <p className="text-zinc-500 text-lg">
                Enter a query above to see responses from all AI agents
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-800 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center text-zinc-500 text-sm">
            <p>Shadow - Unified AI Agent Platform</p>
            <p className="mt-2">Compare responses from multiple AI models in real-time</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
