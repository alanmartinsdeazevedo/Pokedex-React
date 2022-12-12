import React, { useEffect, useState } from "react";
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const Content = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
      try {
          
          const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
          const pokemons = response.data.results
          setPokemons(pokemons)

          
          console.log(typeof pokemons)
          console.log(pokemons)
      }
          catch(error){
          console.log(error);
          }
      
  }
    useEffect(() => {
      getPokemons();
    }, [])

  return (
    <div>{
      pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
        </div>
      ))}</div>
  )
}

export default Content

