
import React from 'react'
import {easeInOut, motion} from 'framer-motion'

const svgMotion = {
    initial : {x : 0 , y:0},
    animate : {y :20 , transition :
        {ease: 'easeInOut' ,repeat:{Infinity}}},

    
  };

function SVG() {
  return (
    
    <div
      className='h-5 absolute bottom-40 left-1/2 transform -translate-x-1/2 border-solid border-2 border-red-100'>
   
      <motion.svg
      
      initial="initial" 
    animate="animate" 
      variants={svgMotion}
       width="122" height="153" viewBox="0 0 122 253" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="110" rx="70" ry="70" fill="white"/>
</motion.svg>
</div>
  )
}

export default SVG