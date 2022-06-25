import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Info from './components/Info';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [showHomePage, setShowHomePage] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(17);
  
  useEffect(() => {
    if(localStorage.getItem("pokemons") === null){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then((response) => response.json())
        .then((data) => {
          const pokemons = data.results.map((obj, index) => {
            return {...obj, favorite: false, id: index, number: obj.url.slice(34, -1) }
          })
          localStorage.setItem("pokemons", JSON.stringify(pokemons));
        })
      }
      setShowHomePage(true);
      setShowInfo(false);
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
      {showHomePage && <HomePage pokeInfo={pokeInfo} first={first} last={last} setFirst={setFirst} setLast={setLast} />}
      {showInfo && <Info selectedPokemon={selectedPokemon} backFunction={backFunction} />}
    </div>
  );
}

export default App;
