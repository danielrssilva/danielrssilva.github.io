"use client";

import { letter, sentence } from "@/animations";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Work } from "@/components";

export default function Professional() {
  return (
    <div
      className="h-screen flex items-center justify-between pr-56 p-20 overflow-visible w-full relative"
      id="professional"
    >
      <AnimatePresence>
        <motion.h1
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[90px] text-white font-thin font-italiana left-16 absolute top-1/4"
          key="professional-title"
        >
          <motion.span
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[12.5rem] font-large text-purple/50 absolute tracking-[-4rem] -z-10 -left-52 -top-10"
            key="professional-background"
          >
            {"//////////////".split("").map((char, i) => (
              <motion.span
                variants={letter}
                key={`.projects-${char}-${i}`}
                className="cursor-default select-none"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          {".professional".split("").map((char, i) => (
            <motion.span
              variants={letter}
              key={`.professional${char}-${i}`}
              className="cursor-default select-none"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <div
          className="flex flex-col relative gap-8 justify-center text-white text-[1.3rem] font-thin w-[27rem] ml-20"
          key="professional-container"
        >
          <motion.p
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="professional-description1"
          >
            Front-end developer with 3 years of work experience. Interested in
            UI/UX design.
          </motion.p>
          <motion.span
            variants={lineDraw}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-px bg-white absolute -left-4"
            key="professional-description-separator"
          />
          <motion.p
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
            key="professional-description2"
          >
            Main skills set on React and Typescript for development and Figma
            for designing.
          </motion.p>
        </div>
        <div
          className="flex flex-col gap-20 mt-32"
          key="professional-work-container"
        >
          <motion.div
            variants={work}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            key="professional-work-1"
          >
            <Work
              dateStart={new Date("2022-08-22")}
              role="React Developer"
              company="e-core"
            />
          </motion.div>
          <motion.div
            variants={work}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            className="mr-16"
            key="professional-work-2"
          >
            <Work
              dateStart={new Date("2021-05-03")}
              dateEnd={new Date("2022-08-19")}
              role="React Developer"
              company="Venturus"
            />
          </motion.div>
          <motion.div
            variants={work}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            className="pr-32"
            key="professional-work-3"
          >
            <Work
              dateStart={new Date("2020-02-01")}
              dateEnd={new Date("2021-04-30")}
              role="React Developer"
              company="IBM"
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}

const lineDraw = {
  hidden: { width: 0 },
  visible: { width: "2rem" },
};

const textAnimation = {
  hidden: { translateY: 10, opacity: 0 },
  visible: { translateY: 0, opacity: 1 },
};

const work = {
  hidden: { opacity: 0, translateX: 60 },
  visible: { opacity: 1, translateX: 0 },
};
