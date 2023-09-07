import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInRight, fadeInLeft } from '../../variants'

export default function Demo() {
 

  return (
    <motion.div
    initial="initial" whileInView={'animate'} viewport={{once: false,amount:0.6}}
      className='bg-pink-50 flex mt-[200px] ml-10 mr-10 rounded-[20px] h-[450px]'>
      <motion.div variants={fadeInRight}
        className='flex flex-col w-1/2 ml-10'>
        <h3 className='text-[20px] font-bold mt-[80px]'>built out of frustration</h3>
        <h1 className='text-[60px] font-bold '>Meet The ahead app</h1>
        {/* <Image
            src="/dall.jpg"
            width={150}
            height={150}
            alt='dall'
            /> */}
            {/* <motion.div  className='w-[100px] h-[100px] rounded-t-full bg-pink-200 '></motion.div> */}
      </motion.div>
      <motion.div variants={fadeInLeft} 
        className='w-1/2 flex items-center justify-center  text-[20px]'>
        <span>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. <br /> Ad quaerat minima ea numquam assumenda iusto dolores <br />
          Ad quaerat minima ea numquam assumenda iusto dolores <br />
          Ad quaerat minima ea numquam assumenda iusto dolores <br />
        </span>
      </motion.div>
    </motion.div>
  )
}
