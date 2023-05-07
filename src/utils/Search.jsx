

import React, { useState ,useRef} from 'react';
import { CountryContext } from '../context/context';


function Search() {
  const [query, setQuery] = useState('');
  const ulRef = useRef(null);

  const [countries, setCountries] = useState(['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Brazl', 'Bra', 'Brazi', 'l'])

  const [showCountry , setShowCountries] = useState(countries)

  const handleInput = event => {

    setQuery(event.target.value);
    ulRef.current.style.display='block'
    
    const filtered = countries.filter(country =>
      country.toLowerCase().startsWith(query.toLowerCase())
    );
      setShowCountries(filtered);
      
      if(event.target.value == ''){
        setShowCountries(countries)
    }
  };


  const handleClick = event =>{
    
    if (ulRef.current.style.display === "none") {
      ulRef.current.style.display = "block";
    } else {
      ulRef.current.style.display = "none";
    }
  }

  const ulClick = event =>{
    console.log(' SELECT CLICK ')
  }
 
  const filteredCountries = showCountry.filter(country =>
    country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <form className="mt-3 shrink-0" autoComplete="off">
      <label htmlFor="default-search" className="mb-1 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           pointer-events-none="true"
          onChange={handleInput}
          onClick={handleClick}
          placeholder="Country..."
          required
        />
        <button
          type="submit"
          className="text-white vertical-middle absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          
        >
          Search
        </button>

        <ul className='absolute hidden overflow-y-scroll scrollbar-hide
        bg-white text-blue-600 rounded-md w-full h-20 -mt-2.5'
         ref={ulRef}
         onClick={ulClick} 
          >
        {filteredCountries.map(country => (
            <li key={country}>{country}</li>
          ))}
      
      </ul>
      </div>
      
    </form>
  );
}

export default Search;
