import { useState, useEffect } from "react";

export function CocktailApi({ searchedCocktailName }) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchedCocktailName}`)
      .then((response) => response.json())
      .then((data) => {
        const drinks = data.drinks.map((drink) => {
          return drink.strDrink;
        });
        setCocktails(drinks && drinks);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(cocktails);
  }, [searchedCocktailName]);

  return (
    <>
      <ul>
        {cocktails.forEach((cocktail) => {
          return <li>{cocktail}</li>;
        })}
      </ul>
    </>
  );
}
