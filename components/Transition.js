import { motion } from "framer-motion";

const Transition = () => (
  <motion.div
    className="pointer-events-none fixed inset-0 z-[60] origin-right bg-gradient-to-br from-[#0b1020] via-[#222a45] to-accent"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 0 }}
    exit={{ scaleX: 1, transformOrigin: "left" }}
    transition={{ duration: 0.35, ease: "easeInOut" }}
    aria-hidden="true"
  />
);

export default Transition;
