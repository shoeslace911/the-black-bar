import { useState } from "react";
import { CocktailApi } from "../api/CocktailApi";

export default function Search({ cocktails }) {
  const [cocktail, setCocktail] = useState("");

  const handleCocktailSearch = (e) => {
    setCocktail(e.target.value);
  };

  const handleCocktailSearchClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center text-4xl">Search here</h1>
      <form>
        <input
          type="dropbox"
          placeholder="Search for cocktails"
          onChange={handleCocktailSearch}
          value={cocktail}
          className=" bg-slate-300"
        />
        <button type="drop" onClick={handleCocktailSearchClick}>
          Submit
        </button>
      </form>

      <CocktailApi searchedCocktailName={cocktail} />
    </div>
  );
}
