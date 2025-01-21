import { Route, Routes } from "react-router-dom";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import Pokedex from "../Pokedex/Pokedex";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
}
export default CustomRoutes;
