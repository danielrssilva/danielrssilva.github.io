"use client";

import { letter, sentence } from "@/animations";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/components";

export default function Projects() {
  return (
    <div
      className="min-h-screen flex p-20 overflow-visible w-full relative"
      id="projects"
    >
      <AnimatePresence>
        <motion.h1
          key="projects-title"
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[90px] text-white font-thin font-italiana right-56 absolute top-44 isolate"
        >
          <motion.span
            key="projects-title-background"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[12.5rem] font-montserrat text-pink/50 absolute tracking-[-4rem] -z-10 -right-52 -top-10"
          >
            {"////////////".split("").map((char, i) => (
              <motion.span
                variants={letter}
                key={`.projects-${char}-${i}`}
                className="cursor-default select-none"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          {".projects".split("").map((char, i) => (
            <motion.span
              variants={letter}
              key={`.projects-${char}-${i}`}
              className="cursor-default select-none"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </AnimatePresence>
      <div className="grid gap-2 pl-8 pt-8">
        <div className="col-end-1 row-start-1">
          <Project
            index={1}
            title="Quest"
            repository="https://github.com/danielrssilva/Quest"
            technologies={["next 13", "tailwind", "sass"]}
            image="/quest.png"
            description={
              <p>
                <span className="font-bold">Quest</span> is a gamer focused
                social media.
              </p>
            }
          />
        </div>
        <div className="col-end-2 row-start-2">
          <Project
            index={2}
            title="InnoPrint"
            technologies={["react"]}
            image="/inno.png"
            description={<p>Upload your files and print them anywhere!</p>}
          />
        </div>
        <div className="col-end-3 row-start-3">
          <Project
            index={3}
            title="Subfeed"
            technologies={["react", "tailwind"]}
            image="/subfeed.png"
          />
        </div>
      </div>
    </div>
  );
}
