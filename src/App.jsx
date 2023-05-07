import { useState , useEffect, Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Loading from './component/loading';
import { useAuth0 } from "@auth0/auth0-react";
import Nav from './component/nav';
import Profile from './page/profile'
import SVG from './component/SVG'

function App({transition}) {

    const [ _loading, setIsLoading] = useState(true);
    const { isAuthenticated, isLoading } = useAuth0();
    useEffect(() => {
    // Simulate loading for 3 seconds
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);
    }, []);

    // if (_loading) {
    //     return <Loading/>
      
    // }
    
    return( 
  
    <>    
 
    <div className="grid grid-cols-1 grid-rows-3 h-96 place-items-center border-cyan border-solid border-emerald-100">
     <Nav />
     <Profile />

      <Link className="hover:bg-grey-800 font-black py-2 px-4 rounded-full absolute right-10 top-3"
      to='/login'>Log In </Link>
    
      <Link className='wea_link absolute top-36' to='/weather'>Weather</Link>
      <Link className='homelink absolute top-64' to='/home'>Let's Know Weather</Link>
      <Link className='statlink absolute top-96' to='/stat'>Stats</Link>
    
    <SVG />
    </div>
  
    </>
)}


export default App
