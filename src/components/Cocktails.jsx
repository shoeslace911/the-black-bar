import { useEffect, useState } from "react";
import { handleIngredients } from "../hooks/HandleIngredients";

export default function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  const activationCount = 2;

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
    <div className="mx-44 py-14 font-display">
      <h1 className="text-4xl text-center  py-20 ">Cocktails</h1>
      <div className="flex flex-wrap">
        {cocktails[0] &&
          cocktails[0].map((drink) => (
            <div className="flex gap-48 py-10" key={drink.cocktailId}>
              <img src={drink.thumbnail} alt="drink image" className="w-56" />
              <div>
                <h1>{drink.cocktailName}</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
