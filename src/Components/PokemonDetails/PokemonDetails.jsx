import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
function PokemonDetails({ pokemonName }) {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null); // To track error state

  async function downloadPokemon(pokemonName) {
    let response;

    try {
      // Fetching Pokémon by name if pokemonName is provided
      if (pokemonName) {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
        );
      } else {
        // Fallback to fetch by ID if no pokemonName
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }

      // If response is successful, update the state
      if (response) {
        setPokemon({
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default,
          weight: response.data.weight,
          height: response.data.height,
          types: response.data.types.map((t) => t.type.name),
          abilities: response.data.abilities.map((a) => a.ability.name),
        });
        setError(null); // Reset error if data is fetched successfully
      }
    } catch (err) {
      setError("Oops! Something went wrong. Please try again later."); // Set error message
    }
  }

  // Fetch pokemon details when pokemonName or id changes
  useEffect(() => {
    setError(null); // Reset error on search term change
    downloadPokemon(pokemonName);
  }, [pokemonName, id]); // Fetch on pokemonName or id change

  if (error) {
    return <div className="error-message">{error}</div>; // Display error if any
  }

  if (!pokemon) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  return (
    <div className="pokemon-details-wrapper">
      <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
      <div className="pokemon-name">
        Name: <span>{pokemon.name}</span>
      </div>
      <div className="pokemon-weight">
        Weight: <span className="">{pokemon.weight}</span>
      </div>
      <div className="pokemon-height">
        Height: <span className="">{pokemon.height}</span>
      </div>
      <div className="pokemon-types">
        Types:{" "}
        {pokemon.types &&
          pokemon.types.map((t) => (
            <span className="" key={t}>
              {t}{" "}
            </span>
          ))}
      </div>
      <div className="pokemon-abilities">
        Abilities:{" "}
        {pokemon.abilities &&
          pokemon.abilities.map((a) => (
            <span className="" key={a}>
              {a}{" "}
            </span>
          ))}
      </div>
    </div>
  );
}

export default PokemonDetails;
