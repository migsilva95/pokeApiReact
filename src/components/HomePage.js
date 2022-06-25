import './../App.css';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function HomePage(props) {

  const items = [];
  const pokemons = JSON.parse(window.localStorage.getItem('pokemons'));

  pokemons && pokemons.forEach((pokemon, index) => {
    items.push(
        <Card
          tag="a"
          border="dark"
          style={{ width: '18rem', cursor: 'pointer' }}
          onClick={() => props.pokeInfo(pokemon.name)}
        >
          <Card.Header>{pokemon.name}</Card.Header>
          <Card.Body>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} />
          </Card.Body>
        </Card>
    )
  })


  return (
    <div className="list-group">
      {items}
    </div>
  );
}

export default HomePage;
