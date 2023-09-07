import React from "react";
import { motion } from "framer-motion";
import { staggerAccordionContainer,fadeInRight,fadeInUp } from '../../variants'

export default function Emotions() {
  return (
    <motion.div
// variants={staggerAccordionContainer}
whileInView={'animate'}
initial='initial'
viewport={{once: false,amount:0.6}}
className="flex flex-col">

<motion.div
variants={fadeInRight}
className="text-5xl font-bold ml-[50px]">
<h1>Does this sound familiar...</h1>
</motion.div>

<motion.div
variants={fadeInUp}
className="flex justify-around  mt-[55px] h-[200px]">

<motion.div
whileHover={{ rotate: 10 }}
transition={{ duration: 1 }}
onHoverStart={e => {}}
onHoverEnd={e => {}}
className="bg-gray-200 w-1/6 rounded-[30px] pt-[45px] pl-[25px] ">
<span>Emoji</span>
<h3 className="font-bold text-[20px]">Lorem ipsum dolor sit</h3>
<span className="text-[20px]">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
a,{" "}
</span>
</motion.div>

<motion.div whileHover={{  rotate: -10 }}
transition={{ duration: 1 }}
onHoverStart={e => {}}
onHoverEnd={e => {}}
 className="bg-blue-100 w-1/6 rounded-[30px] pt-[45px] pl-[25px]">
<span>Emoji</span>
<h3 className="font-bold text-[20px]">Lorem ipsum dolor sit</h3>
<span className="text-[20px]">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
a,{" "}
</span>
</motion.div>

<motion.div 
whileInView={{ rotate: -10 }}
whileHover={{rotate:10}}
initial= {{rotate:10}}
transition={{ duration: 1 }}
onHoverStart={e => {}}
onHoverEnd={e => {}}
 className="bg-pink-100 w-1/6 rounded-[30px] pt-[45px] pl-[25px]">
<span>Emoji</span>
<h3 className="font-bold text-[20px]">Lorem ipsum dolor sit</h3>
<span className="text-[20px]">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
a,{" "}
</span>
</motion.div>

<motion.div

whileHover={{ rotate:-10 }}

transition={{ duration: 1 }}
onHoverStart={e => {}}
onHoverEnd={e => {}}
 className="bg-yellow-100 w-1/6 rounded-[30px] pt-[45px] pl-[25px]">
<span>Emoji</span>
<h3 className="font-bold text-[20px]">Lorem ipsum dolor sit</h3>
<span className="text-[20px]">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
a,{" "}
</span>
</motion.div>

</motion.div>
</motion.div>
  );
}
