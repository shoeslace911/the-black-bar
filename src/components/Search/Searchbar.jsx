import AsyncSelect from "react-select/async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Searchbar({ onChange, className, placeholder, styles }) {
  const loadOptions = async (searchValue, callback) => {
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
  };
  return (
    <div>
      <AsyncSelect
        loadOptions={loadOptions}
        styles={styles}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
}
