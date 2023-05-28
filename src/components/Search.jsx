import { useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { useEffect } from "react";

export default function Search() {
  const [cocktail, setCocktail] = useState("");
  const [example, setExample] = useState(["bonon", "app", "wow", "wowowo"]);

  const loadOptions = (cocktail) => {
    setExample([...example, cocktail]);
  };

  const handleCocktailSearch = (e) => {
    setCocktail(e.target.value);
  };

  const handleCocktailSearchClick = (e) => {
    e.preventDefault();
  };

  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
      .then((response) => response.json())
      .then((data) => {
        const drinks = data.drinks.map((drink) => {
          return { cocktail: drink.strDrink, key: `${drink.strDrink}Cocktail` };
        });
        setCocktails(drinks && drinks);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("cocktail result", cocktails ? cocktails : "not found");
  }, [cocktail]);

  return (
    <div>
      <h1 className="text-center text-4xl">Search here</h1>
      <form>
        <AsyncSelect
          loadOptions={loadOptions}
          placeholder="Search for cocktails"
          value={cocktail}
          onChange={handleCocktailSearch}
        />
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
    </div>
  );
}
