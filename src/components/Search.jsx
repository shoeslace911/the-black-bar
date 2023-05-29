import React from "react";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import { useEffect } from "react";

export default function Search() {
  const [cocktail, setCocktail] = useState("");

  const handleCocktailSearch = (e) => {
    setCocktail(e.target.value);
    console.log("cocktail value", cocktail);
  };

  const handleCocktailSearchClick = (e) => {
    e.preventDefault();
  };

  const loadOptions = async () => {
    try {
      const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
      const data = await response.json();

      const drinks = data.drinks.map((drink) => ({
        value: drink.strDrink,
        label: drink.strDrink,
      }));
      return drinks;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl">Search here</h1>
      <form>
        <AsyncSelect loadOptions={loadOptions} placeholder="Search for cocktails" onChange={handleCocktailSearch} />
        <button type="drop" onClick={handleCocktailSearchClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
