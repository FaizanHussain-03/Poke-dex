import { Link } from "react-router-dom";
import "./Pokemon.css";
function Pokemon({ name, image, id }) {
  return (
    <div className="pokemon-card">
      <Link className="pokemon-ancher" to={`/pokemon/${id}`}>
        <div className="name">
          <span>{name}</span>
        </div>
        <img className="image" src={image} alt={name} />
      </Link>
    </div>
  );
}
export default Pokemon;
