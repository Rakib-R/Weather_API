import { motion, AnimatePresence } from "framer-motion"
import React, {useContext, useState, useEffect } from 'react'
import rain  from '../assets/rain.jpg';
import cloud from '../assets/cloud.png' ;
import white_cloud from '../assets/white_cloud.png'
import Search from "../utils/Search";
import { useLocation} from "react-router-dom";
// import { Open_Weather } from "../utils/Open_Weather";
import { OpenWeatherContext } from "../context/context";
import Map_comp from "../utils/Map";

const Home = () => { 
  
  const pageMotion = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  };

  const { wind,temp } = useContext(OpenWeatherContext);
  const [inputValue, setInputValue] = useState('');

  const location = useLocation()
  console.log('LOCATION ', location.pathname)
  
  const homestyle = {
    display : 'flex',
    textAlign: 'center',
    fontSize: 'large',
    fontFamily: 'Roboto',
    curson: 'wait'
  }

  useEffect(() => {
    
  }, []);

  const handleInput = (e) =>{ setInputValue(e.target.value)
    console.log('inputValue' ,inputValue )
  };
  
  return (
    <>
        <motion.div
          style={ homestyle}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageMotion}
          className="home hover:cursor-pointer"
        >
        <div className="main grid grid-rows-3 w-screen h-screen">
          <div className="Hero w-screen h-1/3 grid grid-cols-4 grid-rows-3">
              <p className="font-black row-start-3 col-start-2 text-2xl">Search :</p>
              <div className="row-start-2 col-start-3">
              <Search onChange={handleInput}/>
              </div>
          </div>
          <div className=""><Map_comp /></div>
          <div className='Second_row grid row-start-2 w-screen grid-cols-4'>
            <div className="text-4xl w-32 rows-start-2 place-self-center border-2">Today</div>
            
            <div className ='cols-start-1 w-1/3 border-2 border-blue-500 py-5 place-self-center'>Temperature <div> {temp}</div>
              </div>
              
              <div className="cols-start-2 w-1/3 border-2 place-self-center border-blue-500 py-5">Wind Effect <div>{wind}</div>
              </div>

              <div className="cols-start-3 w-1/3 py-5 place-self-center border-blue-500 border-2">Rain Fall <img className="inline ml-1" width={50} height={50} src={rain} alt='rain'/></div>
          </div>
          
        <div className="Third_row grid row-start-3">

          <div className="border-2 border-blue-500 w-1/3 py-2 place-self-center">Last Day</div>
            <div className="w-1/3 border-2 place-self-center border-blue-500 py-2">Tomorrow</div>
        
          </div>
        </div>

          {/* {homedefault ? <Open_cage/> : ''} */}

        </motion.div>

  </>
  )
  
}

export default Home
