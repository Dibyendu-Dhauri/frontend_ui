import React from 'react'
import { motion, useScroll } from 'framer-motion'


import { fadeInDown , fadeInUp, fadeInRight, fadeInLeft} from '../../variants'
export default function Collaboration() {
    // const { scrollXProgress } = useScroll();
  return (
    <div
    className='bg-purple-100 flex rounded-[20px] m-[50px] h-[600px] '>
        <motion.div 
        whileInView={'animate'} 
        initial='initial'
        viewport={{once: false,amount:0.6}} className='flex w-1/2 flex-col m-10 '>

            <h1 className='font-bold text-[35px]'>WorkWith Us</h1>

            <motion.div variants={fadeInRight} className='flex flex-col bg-white mt-5 rounded-[20px] pl-[20px] w-1/2 p-5 shadow-lg'>
                <span className='font-bold text-[30px]'>About</span>
                <span className='text-[18px]'>At ahead our goal is to make self-<br/> improvement fun and lasting. We 
                know there's<br/> a way how to make it work. And that's what aHead is all About!</span>
            </motion.div>

            <motion.div variants={fadeInDown} className='flex flex-col bg-pink-200  rounded-[20px] pl-[20px] w-1/2 p-5 mt-5 shadow-lg'>
                <span className='font-bold text-[30px]'>Product</span>
                <span className='text-[15px]'>At ahead our goal is to make self-<br/> improvement fun and lasting. We 
                know there's<br/> a way how to make it work. An </span>
            </motion.div>

        </motion.div>
        <motion.div  className='flex flex-col justify-center items-center w-1/2 mt-[50px] overflow-y-scroll custom-scrollbar '>

            <motion.div className='flex flex-col justify-around bg-white  rounded-[30px] w-1/2  mt-[400px] h-[200px]
            p-10'>

                <span className='font-bold text-[20px] mb-6'>Lorem ipsum dolor sit </span>
                <span>We halp you spot and work around whatever stands in the way, be it bad habits,fears,etc</span>
            </motion.div>

            <div className='flex flex-col bg-white m-[15px]
            w-1/2 rounded-[30px] p-10'>
                <span className='font-bold text-[20px] mb-6'>Lorem ipsum dolor sit </span>
                <span>We halp you spot and work around whatever stands in the way, be it bad habits,fears,etc</span>
            </div>

            <div className='flex flex-col bg-white m-[15px]
            w-1/2 p-10 rounded-[30px]'>
                <span className='font-bold text-[20px] mb-6'>Lorem ipsum dolor sit </span>
                <span>We halp you spot and work around whatever stands in the way, be it bad habits,fears,etc</span>
            </div>

            <div className='flex flex-col bg-white m-[15px]
            w-1/2 p-10 rounded-[30px]'>
                <span className='font-bold text-[20px] mb-6'>Lorem ipsum dolor sit </span>
                <span>We halp you spot and work around whatever stands in the way, be it bad habits,fears,etc</span>
            </div>
            <div className='flex flex-col bg-white m-[15px]
            w-1/2 p-10 rounded-[30px]'>
                <span className='font-bold text-[20px] mb-6'>Lorem ipsum dolor sit </span>
                <span>We halp you spot and work around whatever stands in the way, be it bad habits,fears,etc</span>
            </div>
            <div className='flex flex-col bg-white m-[15px]
            w-1/2 p-10 rounded-[30px]'>
                <span className='font-bold text-[20px] mb-6'>Lorem ipsum dolor sit </span>
                <span>We halp you spot and work around whatever stands in the way, be it bad habits,fears,etc</span>
            </div>
        </motion.div>
    </div>
  )
}
