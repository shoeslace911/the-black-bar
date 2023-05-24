import { useState } from "react";
import { CocktailApi } from "../api/CocktailApi";

export default function Search() {
  const [cocktail, setCocktail] = useState("");

  const handleCocktailSearch = (e) => {
    setCocktail(e.target.value);
  };

  const handleCocktailSearchClick = (e) => {
    e.preventDefault();
    console.log(cocktail);
  };
  return (
    <div>
      <h1 className="text-center text-4xl">Search here</h1>
      <form>
        <input onChange={handleCocktailSearch} value={cocktail} type="text" className=" bg-slate-300" />
        <button type="drop" onClick={handleCocktailSearchClick}>
          Submit
        </button>
        <CocktailApi searchedCocktailName={cocktail} />
      </form>
      <h1></h1>
    </div>
  );
}
