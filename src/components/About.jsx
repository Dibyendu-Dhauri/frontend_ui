import React from 'react'
import { motion } from 'framer-motion'
import { staggerTextContainer,fadeInRight,fadeInLeft , fadeInDown} from '../../variants'
export default function About() {
  return (
    <motion.div 
    variants={staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{once: false,amount:0.6}}
    className='flex justify-around my-[150px]  '>

        <motion.div
        variants={fadeInRight}
         className='m-5 text-4xl font-bold'>
            <h1>EQ beats IQ</h1>
        </motion.div>
        <motion.div variants={fadeInDown} className='text-2xl m-5'>
            <h3>People with high emotional <br/> intelligence(EQ) live more fulfilled <br/> lives. They tend to be happier and <br/> have healthier relationship</h3>
        </motion.div>

        <motion.div
        variants={fadeInLeft}
        className='text-2xl m-5'>
            <h3>
                They are more successful in their <br/> pursuits and make for inspiring <br/> leaders. According to science, they <br/> earn $29K a year.
            </h3>
        </motion.div>
    </motion.div>
  )
}
