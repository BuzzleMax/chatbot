import { memo } from "react";
import { cn } from "@/lib/utils";

export type GlowState =
  | "idle"
  | "typing"
  | "thinking"
  | "searching"
  | "generating"
  | "complete"
  | "error";

/**
 * Nalixum ambient AI glow.
 *
 * A soft, blurred combination of purple and electric blue that represents the
 * assistant's current state. Animation is driven entirely by CSS (transform +
 * opacity only) for GPU-friendly, low-overhead rendering. See globals.css for
 * the `.nx-glow` / `.nx-blob` state styles.
 */
function PureAmbientGlow({
  state = "idle",
  variant = "hero",
  className,
}: {
  state?: GlowState;
  variant?: "hero" | "ambient";
  className?: string;
}) {
  // "complete" gracefully settles back to the idle appearance.
  const resolved = state === "complete" ? "idle" : state;

  return (
    <div
      aria-hidden="true"
      className={cn("nx-glow", className)}
      data-state={resolved}
      data-variant={variant}
    >
      <span className="nx-blob nx-blob-purple" />
      <span className="nx-blob nx-blob-blue" />
    </div>
  );
}

export const AmbientGlow = memo(PureAmbientGlow);
