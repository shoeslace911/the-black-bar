export function CocktailApi({ searchedCocktailName }) {
  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchedCocktailName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(
      (error) => {
        console.log(error);
      },
      [searchedCocktailName]
    );
}
