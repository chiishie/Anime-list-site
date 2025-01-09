import { useState } from 'react'
import './App.css'
import AnimeCard from './components/AnimeCard';

//display would need to be a 
function Text({display}) {
  return (
    <>
      <p>{display}</p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <AnimeCard anime={{title: "Howl's Moving Castle", release_data: "1994"}}  />
    </>
  );
}





export default App
