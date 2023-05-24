import { useState } from "react";
import { CocktailApi } from "../api/CocktailApi";
import Select from "react-select";

export default function Search() {
  const [cocktail, setCocktail] = useState("");

  const handleCocktailSearch = (e) => {
    setCocktail(e.target.value);
    console.log(cocktail);
  };

  const handleCocktailSearchClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center text-4xl">Search here</h1>
      <form>
        <CocktailApi searchedCocktailName={cocktail} />
        <input
          type="text"
          placeholder="Search for cocktails"
          onChange={handleCocktailSearch}
          value={cocktail}
          className=" bg-slate-300"
        />
        <button type="drop" onClick={handleCocktailSearchClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
