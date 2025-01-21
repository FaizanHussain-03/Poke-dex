import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";

function PokemonList() {
  const [pokemonListState, setPokemonListState] = useState({
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    pokemonList: [],
    isLoading: true,
    nextUrl: "",
    prevUrl: "",
  });
  async function downloadPokemons() {
    setPokemonListState({ ...pokemonListState, isLoading: true });
    const response = await axios.get(pokemonListState.pokedexUrl);

    setPokemonListState((state) => ({
      ...state,
      nextUrl: response.data.next,
      prevUrl: response.data.previous,
    }));

    const pokemonResult = response.data.results;

    const pokemonResultPromises = pokemonResult.map((pokemon) => {
      return axios.get(pokemon.url);
    });
    const pokemonData = await axios.all(pokemonResultPromises);

    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.other.front_shiny,
        id: pokemon.id,
        types: pokemon.types.map((type) => type.type.name),
      };
    });
    setPokemonListState((state) => {
      return {
        ...state,
        pokemonList: res,
        isLoading: false,
      };
    });
  }
  useEffect(() => {
    downloadPokemons();
  }, []);

  return (
    <div className="pokemon-list-wrapper">
      {pokemonListState.isLoading ? (
        <div>Loading...</div>
      ) : (
        pokemonListState.pokemonList.map((p) => (
          <Pokemon key={p.id} name={p.name} image={p.image} id={p.id}/>
        ))
      )}
    </div>
  );
}

export default PokemonList;
