"use client";

import { useState, useEffect } from "react";

export type AccentType = "american" | "british" | "australian" | "japanese" | "russian";

interface VoiceControlsProps {
  text: string;
  onSpeak?: () => void;
}

export default function VoiceControls({ text, onSpeak }: VoiceControlsProps) {
  const [selectedAccent, setSelectedAccent] = useState<AccentType>("american");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  const accents = [
    { id: "american", label: "American", flag: "🇺🇸", voiceName: "en-US" },
    { id: "british", label: "British", flag: "🇬🇧", voiceName: "en-GB" },
    { id: "australian", label: "Australian", flag: "🇦🇺", voiceName: "en-AU" },
    { id: "japanese", label: "Japanese", flag: "🇯🇵", voiceName: "ja-JP" },
    { id: "russian", label: "Russian", flag: "🇷🇺", voiceName: "ru-RU" },
  ];

  const speak = () => {
    if (!isSupported || !text) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const accent = accents.find((a) => a.id === selectedAccent);
    
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) =>
        voice.lang.startsWith(accent?.voiceName || "en-US") &&
        (voice.name.toLowerCase().includes("female") ||
          voice.name.toLowerCase().includes("woman") ||
          voice.name.toLowerCase().includes("samantha") ||
          voice.name.toLowerCase().includes("zira") ||
          voice.name.toLowerCase().includes("google") && voice.name.includes("female"))
    ) || voices.find((voice) => voice.lang.startsWith(accent?.voiceName || "en-US"));

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.pitch = 1.2;
    utterance.rate = 0.9;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      onSpeak?.();
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  if (!isSupported) {
    return (
      <div className="text-sm text-zinc-500">
        Voice synthesis not supported in this browser
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {accents.map((accent) => (
          <button
            key={accent.id}
            onClick={() => setSelectedAccent(accent.id as AccentType)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedAccent === accent.id
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            <span className="mr-2">{accent.flag}</span>
            {accent.label}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={speak}
          disabled={isSpeaking || !text}
          className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
            isSpeaking || !text
              ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/50"
          }`}
        >
          {isSpeaking ? "Speaking..." : "🔊 Speak"}
        </button>

        {isSpeaking && (
          <button
            onClick={stopSpeaking}
            className="px-6 py-3 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600 transition-all"
          >
            ⏹ Stop
          </button>
        )}
      </div>
    </div>
  );
}
