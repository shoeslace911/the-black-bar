export async function LoadOptions(searchValue) {
  try {
    const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`);
    const data = await response.json();
    const drinks = data.drinks.map((drink) => ({
      value: drink.strDrink,
      label: drink.strDrink,
    }));

    console.log(data);
    return drinks;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function FetchRandomDrinks(handleIngredients, setCocktails) {
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
}
