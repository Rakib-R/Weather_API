
import React, { useEffect ,useState } from "react";
import Home from "../component/Home";
import Weather from "../component/Weather";
import { OpenWeatherContext } from '../context/context';


const Open_Cage = () => {

  const api_key = import.meta.env.VITE_Open_Cage
  const PLACENAME = 'Dhaka'

  const [cage_result , setCage_result] = useState('')

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${PLACENAME}&key=${api_key}
  `

  useEffect(() => {
      fetch(url)
      .then(response =>{
          if(response.ok){
              return response.json()}
              })
              .then(data => {
                  console.log("Data" ,data.results[1].geometry)
                  setCage_result(data.results[1].geometry)
              })  

  }, [])
  
  return (
    
    // {JSON.stringify(results)}
      <div>Latitude: {cage_result.lat}, Longitude: {cage_result.lng}
      </div>
  )
}



export {Open_Cage }