import { useEffect, useState } from "react";
import { handleIngredients } from "../hooks/HandleIngredients";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RecommendedCocktails() {
  const [recommendedCocktails, setRecommendedCocktails] = useState([]);
  const [activationCount, setActivationCount] = useState(0);
  const [ingredientId, setIngredientId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const data = await response.json();
        const gotCocktails = data.drinks.map((drink) => ({
          drinkId: drink.idDrink,
          drink: drink.strDrink,
          isAlcoholic: drink.strAlcoholic,
          thumbnail: drink.strDrinkThumb,
          ingredients: handleIngredients(drink),
        }));
        setIngredientId(() => {
          ingredientId + 1;
        });
        setRecommendedCocktails((prevCocktails) => {
          return [...prevCocktails, ...gotCocktails];
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (activationCount < 5) {
      fetchData();
      setActivationCount(activationCount + 1);
    }
  });

  return (
    <div className="mx-30 py-14 font-display" id="cocktails">
      <h1 className="text-4xl text-center pt-5 mb-20">Recommended Cocktails</h1>
      <div className="flex my-50 justify-evenly flex-wrap gap-8">
        {recommendedCocktails.map((cocktail) => (
          <div key={cocktail.drinkId} className="flex">
            <img src={cocktail.thumbnail} className="w-60" alt="drink picture" />
            <div className="ml-5 w-96 relative">
              <h1 className="text-4xl">{cocktail.drink}</h1>
              <h1 className="text-2xl font-text ">{cocktail.isAlcoholic}</h1>
              <div className="mt-5">
                <h1 className="text-2xl font-text underline">Ingredients</h1>
                <ul>
                  {cocktail.ingredients.map((item) => {
                    return (
                      <li className="text-12 font-text " key={ingredientId}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <h1 className="text-right mt-10 underline text-xl absolute bottom-10 right-10">See More →</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
