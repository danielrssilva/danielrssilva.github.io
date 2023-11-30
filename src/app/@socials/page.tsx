"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { GithubIcon, LinkedinIcon } from "@/components";

export default function Socials() {
  return (
    <div
      className="fixed flex flex-col gap-8 p-8 bottom-0 items-center justify-center"
      key="socials-container"
    >
      <motion.span
        variants={square}
        initial="hidden"
        animate="visible"
        className="w-48 h-36 fixed shadow-[-0.5px_-0.5px_0_1px_#BE1365,0.5px_0.5px_0_1px_#7D13BE] -rotate-45 -left-14 -bottom-2 opacity-50 -z-10"
        key="socials-square-bg"
      />
      <Link
        href="https://github.com/danielrssilva"
        target="_blank"
        data-cursor-size="0"
      >
        <GithubIcon />
      </Link>
      <Link
        href="https://www.linkedin.com/in/danielribeirossilva/"
        target="_blank"
        data-cursor-size="0"
      >
        <LinkedinIcon />
      </Link>
    </div>
  );
}

const square = {
  hidden: { opacity: 0, scale: 0.3, rotate: -80 },
  visible: { opacity: 1, scale: 1, rotate: -45 },
};
