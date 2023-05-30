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

    if (activationCount < 4) {
      fetchData();
      setActivationCount(activationCount + 1);
    }
  }, [recommendedCocktails]);
  return (
    <div>
      <h1 className="text-4xl text-center pt-5">Recommended Cocktails</h1>
      {recommendedCocktails.map((cocktail) => (
        <div key={cocktail.drinkId}>
          <h1>{cocktail.drink}</h1>
        </div>
      ))}
    </div>
  );
}
