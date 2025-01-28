import { useDebounce } from "../Hookes/useDebounce";
import "./Search.css";

function Search({ updateSearchTerm }) {
  const deBounceCallBack = useDebounce((e) => updateSearchTerm(e.target.value));
  return (
    <div className="search-wrapper">
      <input
        id="pokemon-name-search"
        type="text"
        placeholder="Pokemon name..."
        onChange={deBounceCallBack}
      />
    </div>
  );
}

export default Search;