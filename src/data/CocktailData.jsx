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
