"use client";

export default function ShadowLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="eclipseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      
      {/* Outer glow circle */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="url(#shadowGradient)"
        opacity="0.1"
      />
      
      {/* Main circle (moon/sun) */}
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="url(#shadowGradient)"
      />
      
      {/* Eclipse shadow - creates the "Shadow" effect */}
      <circle
        cx="130"
        cy="80"
        r="65"
        fill="url(#eclipseGradient)"
      />
      
      {/* Inner highlight for depth */}
      <circle
        cx="85"
        cy="85"
        r="20"
        fill="white"
        opacity="0.15"
      />
      
      {/* Geometric accent lines */}
      <path
        d="M 40 100 L 160 100"
        stroke="url(#shadowGradient)"
        strokeWidth="2"
        opacity="0.3"
      />
      <path
        d="M 100 40 L 100 160"
        stroke="url(#shadowGradient)"
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );
}
