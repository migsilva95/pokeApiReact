import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Info from './components/Info';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [showHomePage, setShowHomePage] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  
  useEffect(() => {
    if(localStorage.getItem("pokemons") === null){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then((response) => response.json())
        .then((data) => {
          const pokemons = data.results.map(obj => {
            return {...obj, favorite: false, detail: {}}
          })
          localStorage.setItem("pokemons", JSON.stringify(pokemons));
        })
      }
      setShowHomePage(true);
  },[])

  const pokeInfo = (name) => {
    const pokemons = JSON.parse(window.localStorage.getItem('pokemons'));
    const p = pokemons.find(obj => {
      return obj.name === name;
    })
    setSelectedPokemon(p);
    setShowHomePage(false);
    setShowInfo(true);
  }
  
  const backFunction = () => {
    setShowInfo(false);
    setShowHomePage(true);
  }

  return (
    <div className="App">
      {showHomePage && <HomePage pokeInfo={pokeInfo} />}
      {showInfo && <Info selectedPokemon={selectedPokemon} backFunction={backFunction} />}
    </div>
  );
}

export default App;
