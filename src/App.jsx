import "./App.css";
import CustomRoutes from "./Components/Routes/CustomRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="pokemon-app">
      <Link className="heading" to={"/"}>
        <h1>Pokedex</h1>
      </Link>
      <div className="pokemon-app-content">
        <CustomRoutes />
      </div>
    </div>
  );
}

export default App;
