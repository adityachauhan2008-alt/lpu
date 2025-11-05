export default function ShadowLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      
      {/* Outer shadow ring */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#shadowGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      
      {/* Middle shadow ring */}
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="url(#shadowGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      
      {/* Inner core */}
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="url(#shadowGradient)"
        opacity="0.8"
      />
      
      {/* Shadow effect - crescent */}
      <path
        d="M 50 25 A 25 25 0 0 1 50 75 A 20 20 0 0 0 50 30 Z"
        fill="black"
        opacity="0.4"
      />
      
      {/* Highlight effect */}
      <circle
        cx="42"
        cy="38"
        r="8"
        fill="white"
        opacity="0.3"
      />
      
      {/* S letter stylized */}
      <path
        d="M 45 40 Q 40 40 40 45 Q 40 48 45 48 L 55 48 Q 60 48 60 53 Q 60 58 55 58 L 45 58"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
    </svg>
  );
}
