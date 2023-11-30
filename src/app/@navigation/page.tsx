"use client";

import { useState } from "react";
import { Link } from "@/components";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Navigation() {
  const [percentage, setPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  const xIndex = useTransform(scrollYProgress, [0, 2], [-40, 330]);
  const scale = useTransform(scrollYProgress, [0, 2], [0.7, 1.3]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercentage(latest);
  });

  return (
    <motion.div className="fixed justify-center h-[8.125rem] flex items-center pr-20 w-full z-20">
      <AnimatePresence>
        <motion.span
          variants={scrollLine}
          initial="hidden"
          animate="visible"
          className="w-52 h-px bg-white relative  flex items-center"
          key="scroll-line"
        >
          <motion.div
            variants={scrollIndicator}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            key="scroll-diamond"
            style={{
              x: xIndex,
              scale: scale,
              rotate: "135deg",
              borderImageSlice: 1,
              borderImageSource:
                percentage < 0.4
                  ? "linear-gradient(to left, #BE1365, #7D13BE)"
                  : percentage < 0.9
                  ? "linear-gradient(to left, #BE1365, #BE1365)"
                  : "linear-gradient(to left, #7D13BE, #7D13BE)",
            }}
            className="w-20	h-20 border border-solid absolute"
          />
        </motion.span>
        <motion.a
          variants={logo}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="absolute bg-[url('/logo.svg')] bg-contain bg-center bg-no-repeat w-10 h-10 -translate-x-2 text-white font-thin"
          key="logo"
          href="#home"
        />
        <motion.nav
          variants={nav}
          initial="hidden"
          animate="visible"
          className="flex gap-11 w-full justify-end text-white text-[1.875rem] font-thin"
          key="links"
        >
          <motion.span variants={navLink} key="links-home">
            <Link href="#home" active={percentage < 0.4}>
              .home
            </Link>
          </motion.span>
          <motion.span variants={navLink} key="links-projects">
            <Link
              href="#projects"
              color="pink"
              active={percentage >= 0.4 && percentage < 1}
            >
              .projects
            </Link>
          </motion.span>
          <motion.span variants={navLink} key="links-professional">
            <Link href="#professional" color="purple" active={percentage >= 1}>
              .professional
            </Link>
          </motion.span>
        </motion.nav>
      </AnimatePresence>
    </motion.div>
  );
}

const nav = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const navLink = {
  hidden: {
    opacity: 0,
    marginTop: -60,
  },
  visible: {
    opacity: 1,
    marginTop: 0,
  },
};

const logo = {
  hidden: { opacity: 0, translateY: -10 },
  visible: { opacity: 1, translateY: 0 },
};

const scrollIndicator = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 0.7 },
};

const scrollLine = {
  hidden: { width: 0 },
  visible: { width: "13rem" },
};
