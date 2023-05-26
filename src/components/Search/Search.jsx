import { useEffect, useState } from "react";
import { CocktailApi } from "../../api/CocktailApi";
import Select from "react-select/dist/declarations/src/Select";
import { AsyncPaginate } from "react-select-async-paginate";

export default function Search({ cocktails }) {
  const [cocktail, setCocktail] = useState("");

  const handleCocktailSearch = (e) => {
    setCocktail(e);
    console.log(e);
  };

  const handleCocktailSearchClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center text-4xl">Search heresads</h1>
      <Select />
      <Select
        placeholder="Search for wow"
        onChange={handleCocktailSearch}
        debounceTimeout={600}
        value={cocktail}
        className=" bg-slate-300"
      />
      <button type="drop" onClick={handleCocktailSearchClick}>
        Submit
      </button>

      <CocktailApi searchedCocktailName={cocktail} />
    </div>
  );
}
