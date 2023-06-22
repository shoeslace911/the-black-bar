import { useEffect, useState } from "react";
import { handleIngredients } from "../hooks/HandleIngredients";
import { FetchRandomDrinks } from "../data/CocktailData";

export default function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
        const data = await response.json();
        const cocktailData = data.drinks.map((drink) => ({
          cocktailId: drink.idDrink,
          cocktailName: drink.strDrink,
          isAlcoholic: drink.strAlcohol,
          thumbnail: drink.strDrinkThumb,
          ingredients: handleIngredients(drink),
        }));
        setCocktails((prevCocktails) => {
          return [...prevCocktails, cocktailData];
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-30 py-14 font-display">
      <h1 className="text-4xl text-center  py-20 ">Cocktails</h1>
      <div className="flex flex-wrap justify-evenly">
        {cocktails[0] &&
          cocktails[0].map((drink) => (
            <div className="flex w-96 py-10 relative" key={drink.cocktailId}>
              <img src={drink.thumbnail} alt="drink image" className="w-56" />
              <div className="pl-5">
                <h1 className="text-3xl pb-5">{drink.cocktailName}</h1>
                <h2 className="text-xl font-text underline">Ingredients</h2>
                {drink.ingredients.map((item) => {
                  return (
                    <p className="text-sm font-text" key={crypto.randomUUID}>
                      {item}
                    </p>
                  );
                })}
                <h3 className="absolute right-10 bottom-14 font-text font-semibold hover:underline cursor-pointer">
                  More →
                </h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// //loader functins
// const cocktailsLoader = async () = {

// }
