import React from 'react'
import { fadeInDown } from '../../variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function 
() {
  return (
    <motion.div
    variants={fadeInDown}
    whileInView={'animate'}
    initial='initial'
    className='flex items-center justify-center flex-col mt-[150px]'>

        <Image src='/logo.png' width={100} height={100} alt='logo' />
        <div className='mt-[15px]'>
            <span className='font-bold text-[25px] ml-5'>karnataka,Bengaluru</span>
            <span className='font-bold text-[25px] ml-5'>ahead@gmail.com</span>
        </div>
        <span>&copy; 2023 Ahead app</span>
    </motion.div>
  )
}