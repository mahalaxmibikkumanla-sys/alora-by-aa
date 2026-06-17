export default function LotusDivider() {
  return (
    <div className="flex justify-center py-12 lg:py-16">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold"
      >
        {/* Minimal lotus line art — gold, delicate */}
        {/* Center circle */}
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1" />

        {/* Four petal pairs (minimal, stylized) */}
        {/* Top petal */}
        <path
          d="M 24 10 Q 20 16, 24 22"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 24 10 Q 28 16, 24 22"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right petal */}
        <path
          d="M 38 24 Q 32 20, 26 24"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 38 24 Q 32 28, 26 24"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Bottom petal */}
        <path
          d="M 24 38 Q 20 32, 24 26"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 24 38 Q 28 32, 24 26"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left petal */}
        <path
          d="M 10 24 Q 16 20, 22 24"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 10 24 Q 16 28, 22 24"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
