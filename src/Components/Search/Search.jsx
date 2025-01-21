import { useState } from "react";

function Search({ updateSearchTerm }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search your pokemon..."
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
    </div>
  );
}
export default Search;
