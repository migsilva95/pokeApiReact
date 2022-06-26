import './../App.css';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Info(props) {

    const [pokemon, setPokemon] = useState({});
    const [show, setShow] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        fetch(props.selectedPokemon.url)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
                setShow(true);
            });
        setFavorite(props.selectedPokemon.favorite);
    },[])

    const clickFavorite = () => {
        const pokemons = JSON.parse(window.localStorage.getItem('pokemons'));
        localStorage.setItem("pokemons", JSON.stringify(
            pokemons.map(
                p => {
                    if (p.name === props.selectedPokemon.name) {
                        return ({
                            ...p,
                            favorite: !p.favorite
                        });
                    }
                    else {
                        return ({...p});
                    }
            }
            )
        ));
        setFavorite(!favorite);
    };

  return (
    <div className="list-group">
        {show &&
            <div>
            <br />
                <Button variant="secondary" style={{ width: '15rem' }} onClick={() => props.backFunction()} >Back</Button>
                <br />
                <br />
                <h1>{props.selectedPokemon.name + " "}
                    {favorite ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" onClick={()=>clickFavorite()}>
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" onClick={()=>clickFavorite()}>
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                    }
                </h1>
                <img src={pokemon.sprites.other["official-artwork"].front_default} width={"500rem"} height={"500rem"}/>
                <p>{pokemon.types.map(type => {
                    switch(type.type.name) {
                        case "normal":
                            return <><Button style={{ backgroundColor:"#797964", borderColor:"#797964" }} disabled>{type.type.name}</Button><a> </a></>;
                        case "fighting":
                            return <><Button style={{ backgroundColor:"#a84d3d", borderColor:"#a84d3d" }} disabled>{type.type.name}</Button><a> </a></>
                        case "flying":
                            return <><Button style={{ backgroundColor:"#556dff", borderColor:"#556dff" }} disabled>{type.type.name}</Button><a> </a></>
                        case "poison":
                            return <><Button style={{ backgroundColor:"#88447a", borderColor:"#88447a" }} disabled>{type.type.name}</Button><a> </a></>
                        case "ground":
                            return <><Button style={{ backgroundColor:"#bf9926", borderColor:"#bf9926" }} disabled>{type.type.name}</Button><a> </a></>
                        case "rock":
                            return <><Button style={{ backgroundColor:"#a59249", borderColor:"#a59249" }} disabled>{type.type.name}</Button><a> </a></>
                        case "bug":
                            return <><Button style={{ backgroundColor:"#83901a", borderColor:"#83901a" }} disabled>{type.type.name}</Button><a> </a></>
                        case "ghost":
                            return <><Button style={{ backgroundColor:"#5454b3", borderColor:"#5454b3" }} disabled>{type.type.name}</Button><a> </a></>
                        case "steel":
                            return <><Button style={{ backgroundColor:"#8e8ea4", borderColor:"#8e8ea4" }} disabled>{type.type.name}</Button><a> </a></>
                        case "fire":
                            return <><Button style={{ backgroundColor:"#d52100", borderColor:"#d52100" }} disabled>{type.type.name}</Button><a> </a></>
                        case "water":
                            return <><Button style={{ backgroundColor:"#0080ff", borderColor:"#0080ff" }} disabled>{type.type.name}</Button><a> </a></>
                        case "grass":
                            return <><Button style={{ backgroundColor:"#5cb737", borderColor:"#5cb737" }} disabled>{type.type.name}</Button><a> </a></>
                        case "electric":
                            return <><Button style={{ backgroundColor:"#c90", borderColor:"#c90" }} disabled>{type.type.name}</Button><a> </a></>
                        case "psychic":
                            return <><Button style={{ backgroundColor:"#ff227a", borderColor:"#ff227a" }} disabled>{type.type.name}</Button><a> </a></>
                        case "ice":
                            return <><Button style={{ backgroundColor:"#0af", borderColor:"#0af" }} disabled>{type.type.name}</Button><a> </a></>
                        case "dragon":
                            return <><Button style={{ backgroundColor:"#4e38e9", borderColor:"#4e38e9" }} disabled>{type.type.name}</Button><a> </a></>
                        case "dark":
                            return <><Button style={{ backgroundColor:"#573e31", borderColor:"#573e31" }} disabled>{type.type.name}</Button><a> </a></>
                        case "fairy":
                            return <><Button style={{ backgroundColor:"#e76de7", borderColor:"#e76de7" }} disabled>{type.type.name}</Button><a> </a></>
                        case "unknown":
                            return <><Button style={{ backgroundColor:"#737373", borderColor:"#737373" }} disabled>{type.type.name}</Button><a> </a></>
                        case "shadow":
                            return <><Button style={{ backgroundColor:"black", borderColor:"black" }} disabled>{type.type.name}</Button><a> </a></>
                    }
                })}</p>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <th>height</th>
                            <th>{pokemon.height}</th>
                        </tr>
                        <tr>
                            <th>weight</th>
                            <th>{pokemon.weight}</th>
                        </tr>
                        {pokemon.stats.map((stat) => {
                            return (<tr>
                                        <th>{stat.stat.name}</th>
                                        <th>{stat.base_stat}</th>
                                    </tr>)
                        })}
                    </tbody>
                </Table>
            </div>
        }
    </div>
  );
}

export default Info;
