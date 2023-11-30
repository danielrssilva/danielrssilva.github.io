"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { letter, sentence } from "@/animations";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef, useState } from "react";

const title = ["Bold", "Simple", "Unique"];
const helper = ["Being", "Keeping it", "Making it"];

export default function Page() {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    offset: ["end end", "end end"],
  });
  const xIndex = useTransform(scrollY, [0, 2], [0, 2]);
  const [index, setIndex] = useState(0);

  useMotionValueEvent(xIndex, "change", (latest) => {
    setIndex(latest);
    console.log(latest, xIndex);
  });

  return (
    <ReactLenis root options={{}}>
      <div
        ref={ref}
        className="h-[300vh] flex items-start justify-between p-20 overflow-visible w-full relative -mb-64"
        id="home"
      >
        <AnimatePresence>
          <motion.div
            style={{ top: scrollY }}
            className="flex sticky gap-4 pt-[24rem] pb-[53rem] items-center"
            key="home-container"
          >
            <div className="absolute left-28 flex top-[19rem]">
              <motion.hr
                variants={quotation}
                initial="hidden"
                animate="visible"
                className="w-10 border-white"
                key="home-quotation1"
              />
              <motion.hr
                variants={quotation}
                initial="hidden"
                animate="visible"
                className="w-10 border-white -ml-8"
                key="home-quotation2"
              />
              <motion.div
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-[62px] text-[#CECECE] font-thin gap-4 relative"
                key="home-first-sentence"
              >
                {"Being".split("").map((char, i) => (
                  <motion.span
                    key={`Being-${char}-${i}`}
                    variants={letter}
                    className="translate-x-3"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "9rem" }}
              className="h-px bg-white"
              key="home-line-small"
            />
            <motion.h1
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-[90px] text-white font-thin font-italiana"
              key="home-second-sentence"
            >
              {"Bold".split("").map((char, i) => (
                <motion.span variants={letter} key={`Bold-${char}-${i}`}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20rem" }}
              transition={{ delay: 0.09 }}
              className="h-px bg-white"
              key="home-line-big"
            />
          </motion.div>

          <motion.div
            style={{ top: scrollY }}
            className="grid gap-0 sticky -top-20 -right-20 h-[83rem] isolate -translate-y-64"
          >
            <motion.div
              {...defaultAnimation}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="w-64 h-64 border-solid border-white/10 border col-end-1 row-start-3"
              key="home-diamond-1"
            />

            <motion.div
              {...defaultAnimation}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="w-64 h-64 border-solid border-white/10 border rotate-45 col-end-2 row-start-2"
              key="home-diamond-2"
            />
            <motion.div
              {...defaultAnimation}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="w-64 h-64 border-solid border-white/10 border rotate-45 col-end-2 row-start-4"
              key="home-diamond-3"
            />

            <motion.div
              {...defaultAnimation}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
              className="w-64 h-64 border-solid border-white/10 border rotate-45 col-end-3 row-start-1"
              key="home-diamond-4"
            />
            <motion.div
              variants={image}
              transition={{ delay: 0.08 }}
              initial="hidden"
              animate="visible"
              style={{ rotate: "-45deg" }}
              className="w-64 h-64 border-solid border-white border rotate-45 col-end-3 row-start-3 mt-3 z-10 background-none"
              key="home-diamond-5"
            />
            <motion.div
              variants={imageReverse}
              transition={{ delay: 0.26 }}
              initial="hidden"
              animate="visible"
              style={{ rotate: "-45deg" }}
              className="w-64 h-64 bg-[url('/danny.png')] bg-[length:100%_100%] bg-center col-end-3 row-start-3 mt-6"
              key="home-diamond-image"
            />
            <motion.div
              variants={image}
              transition={{ delay: 0.18 }}
              initial="hidden"
              animate="visible"
              style={{ rotate: "-45deg" }}
              className="w-64 h-64 col-end-3 row-start-3 rotate-45 mt-9 bg-gray bg-gradient-to-br from-pink to-purple -z-10"
              key="home-diamond-gradient"
            />
            <motion.div
              {...defaultAnimation}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
              className="w-64 h-64 border-solid border-white/10 border rotate-45 col-end-3 row-start-5"
              key="home-diamond-6"
            />

            <motion.div
              {...defaultAnimation}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="w-64 h-64 border-solid border-white/10 border rotate-45 col-end-4 row-start-2"
              key="home-diamond-7"
            />
            <motion.div
              {...defaultAnimation}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="w-64 h-64 border-solid border-white/10 border rotate-45 col-end-4 row-start-4"
              key="home-diamond-8"
            />

            <motion.div
              {...defaultAnimation}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="w-64 h-64 border-solid border-white/10 border rotate-45 col-end-5 row-start-3"
              key="home-diamond-9"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

const defaultAnimation = {
  style: { rotate: "45deg", opacity: 0 },
  animate: { scale: [1, 1.2, 1.2], opacity: [0, 1, 0] },
};

const quotation = {
  hidden: { opacity: 0, translateX: -10, rotate: "-65deg" },
  visible: { opacity: 1, translateX: 0, rotate: "-65deg" },
};

const image = {
  hidden: { opacity: 0, translateY: -10, scale: 1.2 },
  visible: { opacity: 1, translateY: 0, scale: 1 },
};
const imageReverse = {
  ...image,
  hidden: { opacity: 0, translateY: 30 },
};
