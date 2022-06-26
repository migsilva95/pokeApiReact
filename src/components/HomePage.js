import './../App.css';
import { Card, Row, Button, Col, Tabs, Tab } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function HomePage(props) {

  const items = [];
  const pokemons = JSON.parse(window.localStorage.getItem('pokemons'));
  const itemsFavorites = [];
  const pokemonsFavorites = [];

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
    if (pokemon.favorite) {
      pokemonsFavorites.push(pokemon)
    }
  });
  pokemonsFavorites && pokemonsFavorites.forEach((pokemon, index) => {
    if (index >= props.firstFavorite && index <= props.lastFavorite) {
      itemsFavorites.push(
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

  const nextFavorite = () => {
    props.setFirstFavorite(props.firstFavorite + 18);
    props.setLastFavorite(props.lastFavorite + 18);
  };

  const previousFavorite = () => {
    props.setFirstFavorite(props.firstFavorite - 18);
    props.setLastFavorite(props.lastFavorite - 18);
  };

  return (
    <>
      <Tabs
        id="controlled-tab"
        activeKey={props.key}
        onSelect={(k) => props.setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
          <Row xs={1} sm={2} md={6} className="g-2">
            {items}
          </Row>
          <br/>
          <Row>
            {props.first > 0 && 
              <div style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
                <Button variant="secondary" style={{ width: '15rem' }} onClick={() => previous()} >Previous</Button>
              </div>}
            {props.first <= pokemons.length - 18 && 
              <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
                <Button variant="secondary" style={{ width: '15rem' }} onClick={() => next()} >Next</Button>
              </div>}
          </Row>
        </Tab>
        <Tab eventKey="favorites" title="Favorites">
          {itemsFavorites.length > 0 &&
          <>
            <Row xs={1} sm={2} md={6} className="g-2">
              {itemsFavorites}
            </Row>
            <br/>
            <Row>
              {props.firstFavorite > 0 && 
                <div style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
                  <Button variant="secondary" style={{ width: '15rem' }} onClick={() => previousFavorite()} >Previous</Button>
                </div>}
              {props.firstFavorite <= pokemonsFavorites.length - 18 && 
                <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
                  <Button variant="secondary" style={{ width: '15rem' }} onClick={() => nextFavorite()} >Next</Button>
                </div>}
            </Row>
          </>}
        </Tab>
      </Tabs>
    </>
  );
}

export default HomePage;
