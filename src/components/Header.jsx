import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-100 flex flex-row items-center justify-center h-full m-10 rounded-lg mt-[130px] ">
      <motion.div
        initial= {{
          x: -70,
          opacity: 0,
        }}
        animate= {{
          x: 0,
          opacity: 1,
          transition: { type: 'tween', duration: 1.5 },
        }} // Delay the animation
        className="w-1/2 p-4 flex flex-col  justify-around m-8"
      >
        <p className="text-lg text-gray-500 mb-5">ahead app</p>
        <h1 className="text-7xl font-bold">
          Master Your Life by Mastering Emotions
        </h1>

        <div className="flex flex-row">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.1,type:'tween' }}
            whileHover={{scale:1.05}}
            className="w-1/2 bg-black text-white rounded-full mt-9  text-lg"
          >
            Download app
          </motion.button>
          {/* <button className=" w-1/2 bg-black text-white rounded-full mt-9  shadow-md">
          Download app
        </button> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.1,type:'tween'  }}
            className="w-1/2 ml-7 mt-5"
          >
            <Image src="/stars.png" width={250} height={100} alt="stars" />
            <span className="text-lg mt-2">100+ app store reviews</span>
          </motion.div>
        </div>
      </motion.div>
      {/* // right part */}

      <motion.div
       initial= {{
        x: 70,
        opacity: 0,
      }}
      animate= {{
        x: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1.5 },
      }} 
        className="w-1/2 p-4 "
      >
        <Image
          src="/header1.png"
          width={500}
          height={500}
          alt="header"
          
        />
      </motion.div>
    </div>
  );
}
