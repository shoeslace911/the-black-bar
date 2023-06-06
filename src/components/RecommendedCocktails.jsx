import { useEffect, useState } from "react";

export default function RecommendedCocktails() {
  const [recommendedCocktails, setRecommendedCocktails] = useState([]);
  const [activationCount, setActivationCount] = useState(0);

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
          ingredient: drink.strIngredient1,
        }));

        setRecommendedCocktails((prevCocktails) => {
          return [...prevCocktails, ...gotCocktails];
        });
        console.log("random drink is", recommendedCocktails);
      } catch (error) {
        console.log(error);
      }
    };

    if (activationCount < 5) {
      fetchData();
      setActivationCount(activationCount + 1);
    }
  }, [recommendedCocktails]);
  return (
    <div className="mx-44 py-14">
      <h1 className="text-4xl text-center pt-5">Recommended Cocktails</h1>
      <div className="flex my-50 flex-wrap gap-8">
        {recommendedCocktails.map((cocktail) => (
          <div key={cocktail.drinkId} className="flex">
            <img src={cocktail.thumbnail} className="w-80" alt="drink picture" />
            <div>
              <h1>{cocktail.drink}</h1>
              <h1>{cocktail.isAlcoholic}</h1>
              <ul>
                <li>{cocktail.ingredient}</li>
              </ul>
              <h1>See More →</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
