// import { useState, useEffect } from "react";
// import AsyncSelect from "react-select/async";
// import Searchbar from "./Search/Searchbar";

// export default function Search() {
//   const [searchValue, setSearchValue] = useState("");

//   const handleOnChange = (e) => {
//     if (e) {
//       setSearchValue(e.value);
//     } else {
//       setSearchValue("");
//       console.log("No option selected");
//     }
//   };
//   const loadOptions = async (searchValue, callback) => {
//     try {
//       const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`);
//       const data = await response.json();
//       const drinks = data.drinks.map((drink) => ({
//         value: drink.strDrink,
//         label: drink.strDrink,
//       }));

//       console.log(data);
//       return drinks;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center h-screen">
//       <h1 className="text-center text-4xl drop-shadow-lg">Search here</h1>
//       <form>
//         <Searchbar loadOptions={loadOptions} onChange={handleOnChange} className={"bg-grey-300 mx-96"} />
//       </form>
//     </div>
//   );
// }
