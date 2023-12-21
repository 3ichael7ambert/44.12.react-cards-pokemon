import React, { useState } from "react";
import {v1 as uuid} from "uuid";
//import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from './hooks/useAxios'; 

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */



function PokeDex() {
  const [pokemonData, fetchPokemonData] = useAxios(
    'https://pokeapi.co/api/v2/pokemon/'
  );
  const [pokemonName, setPokemonName] = useState('');

  const addPokemon = async () => {
    await fetchPokemonData(pokemonName.toLowerCase());
    setPokemonName('');
  };


  /*
function PokeDex() {
  const [pokemon, setPokemon] = useState([]);
  const addPokemon = async name => {
   /// // const response = await axios.get(
    ////   `https://pokeapi.co/api/v2/pokemon/${name}/`
    //// );

    // const [pokemonData, fetchPokemonData] = useAxios(
    //   'https://pokeapi.co/api/v2/pokemon/'
    // );

    //// setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
    // const [pokemonName, setPokemonName] = useState('');

    // const searchPokemon = () => {
    //   fetchPokemonData(pokemonName.toLowerCase());
    //   setPokemonName('');
    // };
    const [pokemonData, fetchPokemonData] = useAxios(
      'https://pokeapi.co/api/v2/pokemon/'
    );
  
    const [pokemonName, setPokemonName] = useState('');
  
    const searchPokemon = () => {
      // Update the function to use fetchPokemonData
      fetchPokemonData(pokemonName.toLowerCase());
      setPokemonName('');
    };
    
  };
*/

return (
  <div className="PokeDex">
    <div className="PokeDex-buttons">
      <h3>Please select your pokemon:</h3>
      <PokemonSelect add={addPokemon} />
    </div>
    <div className="PokeDex-card-area">
      {pokemonData.map((cardData) => (
        <PokemonCard
          key={cardData.id}
          front={cardData.sprites?.front_default}
          back={cardData.sprites?.back_default}
          name={cardData.name}
          stats={cardData.stats?.map((stat) => ({
            value: stat.base_stat,
            name: stat.stat.name,
          })) || []} // Use default value if stats is undefined
        />
      ))}
    </div>
  </div>
);

/*
  return (
    
    // <div className="PokeDex">
    //   <div className="PokeDex-buttons">
    //     <h3>Please select your pokemon:</h3>
    //     <PokemonSelect add={addPokemon} />
    //   </div>
    //   <div className="PokeDex-card-area">
    //     {pokemon.map(cardData => (
    //       <PokemonCard
    //         key={cardData.id}
    //         front={cardData.sprites.front_default}
    //         back={cardData.sprites.back_default}
    //         name={cardData.name}
    //         stats={cardData.stats.map(stat => ({
    //           value: stat.base_stat,
    //           name: stat.stat.name
    //         }))}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="PokeDex">
      <h3>Search for a Pokemon</h3>
      <div>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={searchPokemon}>Search</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard key={uuid()} data={pokemon} />
        ))}
      </div>
    </div>
  );
}
*/
}
export default PokeDex;
