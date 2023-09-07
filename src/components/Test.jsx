import React from "react";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, fadeInUp } from "../../variants";
export default function Test() {
  return (
    <motion.div
      whileInView={"animate"}
      initial="initial"
      viewport={{ once: false, amount: 0.6 }}
      // variants={fadeInDown}
      className="flex flex-col justify-center items-center my-[200px]"
    >
      <motion.h3 variants={fadeInDown} className="font-semibold text-[22px]">
        We take privacy seriously
      </motion.h3>
      <motion.h1 variants={fadeInLeft} className="font-bold text-[35px]">
        Before you get started
      </motion.h1>
      <motion.h3 variants={fadeInLeft} className="text-center text-[20px] mt-4">
        "We wont't share your answers with anyone(and won't ever tell <br /> you
        which friends said what about you)
      </motion.h3>
      <motion.button
        variants={fadeInUp}
        className="bg-black text-white
        text-lg rounded-full mt-10 px-4 py-2"
      >
        Start a test
      </motion.button>
      <motion.span variants={fadeInUp} className="mt-2">
        Take only 5 minutes
      </motion.span>
    </motion.div>
  );
}
