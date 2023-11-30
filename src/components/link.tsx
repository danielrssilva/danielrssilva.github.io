"use client";

import { tv, VariantProps } from "tailwind-variants";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

const link = tv({
  variants: {
    color: {
      pink: {
        background: "bg-pink",
        diamond: "border-pink",
      },
      purple: {
        background: "bg-purple",
        diamond: "border-purple",
      },
      default: {
        background: "bg-gradient-to-r from-pink to-purple",
        diamond: "border-source-pink-purple",
      },
    },
  },
  defaultVariants: {
    color: "default",
  },
  slots: {
    background: "absolute w-0 -z-10 h-4 -rotate-12",
    diamond: "absolute h-14 w-14 -z-10  border border-solid",
    container: "relative flex items-center justify-center isolate",
  },
});
interface LinkProps extends VariantProps<typeof link> {
  children: React.ReactNode;
  active?: boolean;
  href: string;
}

export default function Link(props: LinkProps) {
  const lenis = useLenis();
  const { active, color, children, ...restProps } = props;
  const { container, background, diamond } = link({ color });
  
  return (
    <motion.div
      initial="hidden"
      whileHover="hover"
      animate={active ? "hover" : "hidden"}
      data-cursor-size="0"
    >
      <a
        {...restProps}
        className={container()}
        // onClick={lenis.scrollTo(props.href)}
      >
        <motion.span
          variants={backgroundAnimation}
          transition={{ duration: 0.3 }}
          className={background()}
          style={{ borderImageSlice: 1, borderWidth: 1 }}
        />
        {children}
        <motion.span
          variants={diamondAnimation}
          transition={{ duration: 0.08 }}
          className={diamond()}
        />
      </a>
    </motion.div>
  );
}

const diamondAnimation = {
  hidden: { opacity: 0, scale: 0.6, rotate: -135 },
  hover: { opacity: 1, scale: 1, rotate: -135 },
};

const backgroundAnimation = {
  hidden: { opacity: 0, width: 0 },
  hover: { opacity: 1, width: "100%" },
};
