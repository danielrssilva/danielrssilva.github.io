"use client";
import { motion } from "framer-motion";

export function GithubIcon() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      whileHover="hover"
      initial="hidden"
      animate="visible"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key="social-github-path"
          variants={github}
          d="M15.9951 2.36135C12.6726 2.35821 9.45756 3.53835 6.9261 5.69028C4.39464 7.84223 2.71223 10.8253 2.18035 14.1049C1.64847 17.3847 2.30188 20.7465 4.0235 23.5881C5.74512 26.4299 8.42242 28.5656 11.5756 29.6127C12.2735 29.7343 12.4948 29.3245 12.4948 28.9549C12.4948 28.6205 12.5021 27.6941 12.4948 26.5233C8.60416 27.3671 7.80051 24.6813 7.80051 24.6813C7.544 23.8364 6.99374 23.1111 6.24912 22.6363C4.97982 21.7683 6.34396 21.7852 6.34396 21.7852C6.78714 21.8461 7.21054 22.0073 7.58183 22.2569C7.95311 22.5064 8.26246 22.8375 8.48623 23.2248C8.67552 23.5697 8.93132 23.8736 9.23884 24.1191C9.54636 24.3645 9.89948 24.5465 10.2778 24.6547C10.6561 24.7628 11.0521 24.7948 11.4429 24.7488C11.8336 24.7029 12.2114 24.58 12.5543 24.3871C12.6189 23.6803 12.9336 23.0197 13.4419 22.5244C10.3379 22.1695 7.07346 20.9707 7.07346 15.6113C7.05375 14.222 7.56967 12.8784 8.51419 11.8593C8.0862 10.6538 8.13491 9.33035 8.65036 8.15957C8.65036 8.15957 9.82606 7.78389 12.4948 9.59424C14.7868 8.96528 17.2059 8.96528 19.4979 9.59424C22.1727 7.78511 23.3387 8.15957 23.3387 8.15957C23.8543 9.33019 23.9039 10.6534 23.4772 11.8593C24.422 12.879 24.9372 14.2239 24.9156 15.6137C24.9156 20.9877 21.6463 22.1683 18.5313 22.5123C18.8659 22.8485 19.1244 23.2525 19.2895 23.6972C19.4545 24.1419 19.5223 24.6168 19.4881 25.0899V28.9609C19.4881 29.3343 19.7143 29.7476 20.4244 29.6127C23.5784 28.5653 26.2561 26.4288 27.9777 23.5861C29.6993 20.7435 30.352 17.3804 29.8189 14.1001C29.2857 10.8198 27.6016 7.83669 25.0683 5.68553C22.5351 3.53439 19.3185 2.35589 15.9951 2.36135Z"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <motion.span
        variants={diamond}
        style={{ rotate: 45 }}
        className="absolute h-11 w-11 -z-10  border border-solid border-pink"
      />
    </motion.div>
  );
}

export function LinkedinIcon() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      whileHover="hover"
      initial="hidden"
      animate="visible"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key="social-linkedin-path"
          variants={linkedin}
          d="M4.66667 7.33333C6.13943 7.33333 7.33333 6.13943 7.33333 4.66667C7.33333 3.19391 6.13943 2 4.66667 2C3.19391 2 2 3.19391 2 4.66667C2 6.13943 3.19391 7.33333 4.66667 7.33333Z"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinejoin="round"
        />
        <motion.path
          variants={linkedin}
          d="M2 30V11.3333H7.33333V30H2Z"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinejoin="round"
        />
        <motion.path
          variants={linkedin}
          d="M10.6667 11.3333V30H16.0001V20.79C16.0001 19.3333 17.3334 16.6666 21.1938 16.6666C23.3838 16.6666 24.6667 17.7936 24.6667 20V30H30.0001V20C30.0001 18.255 29.5835 16.0842 28.1413 14.2972C26.6161 12.4074 24.2577 11.3333 21.1938 11.3333C19.1779 11.3333 17.4143 12.1536 16.0001 13.1552V11.3333H10.6667Z"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinejoin="round"
        />
      </svg>
      <motion.span
        variants={diamond}
        style={{ rotate: 45 }}
        className="absolute h-12 w-12 -z-10  border border-solid border-purple"
      />
    </motion.div>
  );
}

const diamond = {
  hidden: { opacity: 0, scale: 0.2 },
  hover: { opacity: 1, scale: 1 },
};

const icon = {
  hidden: {
    pathLength: 0,
    stroke: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    stroke: "rgba(255, 255, 255, 1)",
  },
};

const github = {
  ...icon,
  hover: {
    pathLength: [0, 1],
    stroke: "rgba(190, 19, 101, 1)",
  },
};
const linkedin = {
  ...icon,
  hover: {
    pathLength: [0, 1],
    stroke: "rgba(125, 19, 190, 1)",
  },
};
