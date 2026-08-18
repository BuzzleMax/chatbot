import { cn } from "@/lib/utils";

export function NalixumMark({
  className,
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={cn("shrink-0", className)}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="nalixum-mark-grad"
          x1="3"
          x2="21"
          y1="3"
          y2="21"
        >
          <stop stopColor="var(--nx-purple)" />
          <stop offset="1" stopColor="var(--nx-blue)" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.4 20.3 7.2v9.6L12 21.6 3.7 16.8V7.2z"
        stroke="url(#nalixum-mark-grad)"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M8.2 16V8l7.6 8V8"
        stroke="url(#nalixum-mark-grad)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}

export function NalixumWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <NalixumMark size={20} />
      <span className="font-semibold text-[15px] tracking-tight text-foreground">
        Nalixum
      </span>
    </span>
  );
}
