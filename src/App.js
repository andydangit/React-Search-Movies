import { useEffect } from 'react';
import './App.css';
import SearchIcon from './Search.svg'

function App() {

  const API_URL = 'http://www.omdbapi.com?apikey=b8d1252e';

const searchMovies = async (title) => {
const res = await fetch (`${API_URL} &s=${title}`);
const data = await res.json() 

console.log((data.Search));
  }

  useEffect(() => { 
searchMovies('Superman')
  },[])


  return (
    <div className="app">
<h1> Movies Database </h1>

<div className='search'>
<input 
placeholder='Search for movies'
value="Superman"
onChange={() => {}}
/>

<img 
src={SearchIcon}
alt='search' 
/>

</div>
    </div>
  );
}

export default App;
