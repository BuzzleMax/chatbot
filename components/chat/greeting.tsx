import { motion } from "framer-motion";
import { NalixumMark } from "./nalixum-logo";

export const Greeting = () => (
  <div className="flex flex-col items-center px-4" key="overview">
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="mb-5 flex size-11 items-center justify-center rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <NalixumMark size={24} />
    </motion.div>
    <motion.h1
      animate={{ opacity: 1, y: 0 }}
      className="text-balance text-center font-semibold text-2xl tracking-tight text-foreground md:text-[2rem]"
      initial={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      Think deeper with Nalixum.
    </motion.h1>
    <motion.p
      animate={{ opacity: 1, y: 0 }}
      className="mt-3 max-w-md text-balance text-center text-muted-foreground/80 text-sm leading-relaxed"
      initial={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      Ask questions, explore ideas, and research anything with your premium AI
      workspace.
    </motion.p>
  </div>
);
