"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { letter, sentence } from "@/animations";
import Image from "next/image";

interface ProjectProps {
  repository?: string;
  webpage?: string;
  index: number | number;
  title: string;
  description?: string | React.ReactElement;
  technologies?: string[];
  image: string;
}

export default function Project(props: ProjectProps) {
  const {
    repository = "",
    webpage = "",
    description = "",
    index,
    title,
    technologies = [],
    image,
  } = props;
  return (
    <div className="flex gap-5 items-center">
      <AnimatePresence>
        <div className="flex flex-col text-white text-[1.5rem] font-thin gap-4">
          <motion.span
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="text-right font-italiana"
            key="project-repository"
          >
            {repository ? (
              <Link href={repository} target="_blank" data-cursor-size="0">
                .repository
              </Link>
            ) : (
              <span className="opacity-10 line-through cursor-default">
                .repository
              </span>
            )}
          </motion.span>
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.6 }}
            className="aspect-video h-56 bg-white relative overflow-visible over flex items-center"
            data-cursor-size={description ? "0" : "40"}
            key="project-image-container"
          >
            {description && (
              <motion.div
                className="aspect-video h-56 flex items-center justify-center overflow-hidden relative"
                key="project-description-container"
              >
                <motion.span
                  className="text-gray text-base font-normal"
                  key="project-description"
                >
                  {description}
                </motion.span>
                <motion.span
                  variants={descriptionRight}
                  style={{ rotate: 65 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="absolute bg-gray w-[31rem] h-60 -right-40 -top-10"
                  key="project-description-right-courtain"
                />
                <motion.span
                  variants={descriptionLeft}
                  style={{ rotate: 65 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="absolute bg-gray w-[31rem] h-60 -left-40 -bottom-10"
                  key="project-description-left-courtain"
                />
              </motion.div>
            )}
            <motion.div
              variants={description ? hideImage : {}}
              transition={{ duration: 0.15 }}
              className="w-full h-full absolute"
              key="project-image"
            >
              <Image
                src={image}
                width={398.2}
                height={224}
                alt="project image"
                className="grayscale"
              />
            </motion.div>
            <motion.span
              variants={outerlineTop}
              className="h-3/4 w-3/4 border-r border-t border-solid absolute -right-2 -top-2"
              key="projects-description-line-top"
            />
            <motion.span
              variants={outerlineBottom}
              className="h-2/6 w-7/12 border-l border-b border-solid absolute -left-2 -bottom-2"
              key="project-description-line-bottom"
            />
          </motion.div>
          <motion.span
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-italiana"
            key="project-view"
          >
            {webpage ? (
              <Link href={webpage} target="_blank" data-cursor-size="0">
                .view
              </Link>
            ) : (
              <span className="opacity-10 line-through cursor-default">
                .view
              </span>
            )}
          </motion.span>
        </div>
        <motion.div
          variants={projectInfo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col text-white text-[1.5rem] gap-2 font-thin"
          key="project-info-container"
        >
          <motion.span
            variants={letter}
            className="text-[2rem]"
            key="project-index"
          >
            .{index.toString().padStart(2, "0")}
          </motion.span>
          <motion.span
            variants={letter}
            className="bg-white text-gray p-2 font-normal text-[2rem]"
            key="project-title"
          >
            {title}
          </motion.span>
          <motion.div
            className="font-italiana flex flex-col gap-2 font-thin"
            key="project-techs"
          >
            {technologies.map((tech) => (
              <motion.span variants={letter} key={`techs-${title}-${tech}`}>
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const hideImage = {
  hidden: {
    opacity: 1,
  },
  hover: {
    opacity: 0,
  },
};

const descriptionRight = {
  hidden: {
    translateX: 0,
  },
  hover: {
    translateX: "80%",
  },
};

const descriptionLeft = {
  hidden: {
    translateX: 0,
  },
  hover: {
    translateX: "-80%",
  },
};
const projectInfo = {
  hidden: {
    opacity: 0,
    translateX: -40,
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const outerlineTop = {
  hidden: {
    width: 0,
    height: 0,
    borderColor: "transparent",
  },
  visible: {
    width: "75%",
    height: "75%",
    borderColor: "white",
  },
};

const outerlineBottom = {
  hidden: {
    width: 0,
    height: 0,
    borderColor: "transparent",
  },
  visible: {
    width: "58.333%",
    height: "33.333%",
    borderColor: "white",
  },
};
