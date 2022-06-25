import './../App.css';
import { useState, useEffect } from 'react';
import { Card, Row, Button, Col } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function HomePage(props) {

  const items = [];
  const pokemons = JSON.parse(window.localStorage.getItem('pokemons'));

  pokemons && pokemons.forEach((pokemon, index) => {
    if (index >= props.first && index <= props.last) {
      items.push(
        <Col>
          <Card
            tag="a"
            border="dark"
            style={{ cursor: 'pointer' }}
            onClick={() => props.pokeInfo(pokemon.name)}
          >
            <Card.Header>{pokemon.name}</Card.Header>
            <Card.Body>
              <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.number + ".png"} />
            </Card.Body>
          </Card>
        </Col>
      )
    }
  });

  const next = () => {
    props.setFirst(props.first + 18);
    props.setLast(props.last + 18);
  };

  const previous = () => {
    props.setFirst(props.first - 18);
    props.setLast(props.last - 18);
  };

  return (
    <>
      <Row xs={1} sm={2} md={6} className="g-2">
        {items}
      </Row>
      <br/>
      <Row>
        {props.first > 0 && <div style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}><Button variant="secondary" onClick={() => previous()} >Previous</Button></div>}
        {props.first <= pokemons.length - 18 && <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}><Button variant="secondary" onClick={() => next()} >Next</Button></div>}
      </Row>
    </>
  );
}

export default HomePage;
