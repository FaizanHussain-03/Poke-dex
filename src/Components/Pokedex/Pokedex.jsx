// import { useState } from "react";
import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pokedex-wrapper">
      <Search updateSearchTerm={setSearchTerm} />
      {
        !searchTerm ? (
          <PokemonList />
        ) : (
          <PokemonDetails
            key={searchTerm}
            pokemonName={searchTerm.toLowerCase()}
          />
        ) // Pass the search term as a prop
      }
    </div>
  );
}
export default Pokedex;
