import React from 'react'
import { motion } from 'framer-motion'
import { fadeInRight, fadeInUp } from '../../variants'

export default function Careers() {
    return (
        <motion.div
            whileInView={'animate'}
            initial='initial'
            viewport={{ once: false, amount: 0.6 }}
            className='ml-10 mr-10 mb-[50px]'>
            <motion.h1 variants={fadeInRight} className='text-[40px] font-bold ml-[20px]'>Open Vacancies</motion.h1>

            <motion.div className='flex flex-row justify-around mt-[33px]'>

                <motion.div variants={fadeInUp} whileHover={{ scale: 1.1 }}

                    transition={{ duration: 1 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    className='bg-yellow-100 w-1/4 p-5 pl-10 h-[200px] rounded-[30px]' >
                    <h3 className='font-bold text-[30px]' >Senior Engineer</h3>
                    <ul className='mt-5 list-disc'>
                        <li>Full-time Position</li>
                        <li>Berlin</li>
                        <li>$65-85k</li>
                    </ul>
                </motion.div>

                <motion.div variants={fadeInRight} whileHover={{ scale: 1.1 }}

                    transition={{ duration: 1 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    className='bg-yellow-100 w-1/4 p-5 pl-10 h-[200px] rounded-[30px]' >
                    <h3 className='font-bold text-[30px]' >Senior Engineer</h3>
                    <ul className='mt-5 list-disc '>
                        <li>Full-time Position</li>
                        <li>Berlin</li>
                        <li>$65-85k</li>
                    </ul>
                </motion.div>

                <motion.div
                    variants={fadeInRight} whileHover={{ scale: 1.1 }}

                    transition={{ duration: 1 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}

                    className='bg-yellow-100 w-1/4 p-5 pl-10 h-[200px] rounded-[30px]' >
                    <h3 className='font-bold text-[30px]' >Senior Engineer</h3>
                    <ul className='mt-5 list-disc '>
                        <li>Full-time Position</li>
                        <li>Berlin</li>
                        <li>$65-85k</li>
                    </ul>
                </motion.div >
            </motion.div>
        </motion.div>
    )
}