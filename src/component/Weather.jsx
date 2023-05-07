import { motion ,AnimatePresence} from "framer-motion"
import { useEffect, useState } from "react";
import {React, forwardRef} from 'react'

import CustomButton from "../utils/custom_button";

const pageMotion = {
    initial: {opacity: 0, x: 0},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x:0}
};

    const Weather = forwardRef (function Weather({} , weatheref ) {
    
    const [wea_default , setDefault] = useState(false)

    const weatherstyle = {
        height : "100vh",
        display: "flex",
        flexDirection : 'column',
        gap :' 10px'
       
    }
    useEffect(() => {

    }, [])
    
    return (
        
        <AnimatePresence>
        <motion.div
        ref={weatheref}
        initial="initial" 
        animate="animate" 
        exit="exit"
        variants={pageMotion}

        style={ weatherstyle}

        className="weather grid_2 hover:cursor-pointer"><a href="http://google.com"> Weather Store</a>
        { wea_default &&
        <CustomButton />
        }
        </motion.div>
        </AnimatePresence>
  )
})

  
export default Weather

