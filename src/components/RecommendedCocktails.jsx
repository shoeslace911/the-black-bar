import { useEffect, useState } from "react";

export default function RecommendedCocktails() {
  const [recommendedCocktails, setRecommendedCocktails] = useState([]);
  const [activationCount, setActivationCount] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  const handleIngredients = (ingredients) => {
    console.log("asihf");
  };
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
        console.log(data);
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
    <div className="mx-44 py-14 font-display " id="cocktails">
      <h1 className="text-4xl text-center pt-5 mb-20">Recommended Cocktails</h1>
      <div className="flex my-50 flex-wrap gap-8">
        {recommendedCocktails.map((cocktail) => (
          <div key={cocktail.drinkId} className="flex">
            <img src={cocktail.thumbnail} className="w-80" alt="drink picture" />
            <div className="ml-5 w-96">
              <h1 className="text-3xl">{cocktail.drink}</h1>
              <h1 className="text-2xl">{cocktail.isAlcoholic}</h1>
              <div className="mt-5">
                <h1 className="text-2xl">Ingredients</h1>
                <ul>
                  <li className="text-2md ">{cocktail.ingredient}</li>
                </ul>
              </div>
              <h1 className="text-right mt-10 underline text-xl">See More →</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
