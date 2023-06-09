export const handleIngredients = (drink) => {
  let ingredients = [];
  for (let i = 1; i < 14; i++) {
    if (drink[`strIngredient${i}`] !== null) {
      ingredients.push(drink[`strIngredient${i}`]);
    } else {
      return ingredients;
    }
  }
};
