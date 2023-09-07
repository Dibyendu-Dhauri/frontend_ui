import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInDown } from '../../variants'
export default function Nav() {
  return (
    <motion.div
    initial= {{
      y: -70,
      opacity: 0,
    }}
    animate= {{
      y: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 1.1 },
    }} 
    
    className='fixed flex justify-around w-full top-0 bg-blue-100 h-[80px]' >
        <motion.div whileHover={{rotate:10}} className="logo">
          <Image src="/logo.png" 
           width={100}
           height={100}
           alt='logo'/>
        </motion.div>
        <div className='flex items-center justify-center text-lg font-semibold'>
        <span className='mx-3'>Emotions</span>
        <span className='mx-3'>MainFesto</span>
        <span className='mx-3'>self-awareness test</span>
        <span className='mx-3'>work with us</span>
        </div>
        <div className='flex items-center justify-center'>
            <button className='bg-black text-white rounded-full px-4 py-2'>Download app</button>
        </div>
    </motion.div>
  )
}
