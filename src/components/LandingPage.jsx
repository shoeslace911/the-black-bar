import { useState, useEffect } from "react";
import Searchbar from "./Search/Searchbar";
import { SearchBarStyle } from "../hooks/SearchHooks";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e) => {
    if (e) {
      setSearchValue(e.value);
    } else {
      setSearchValue("");
      console.log("No option selected");
    }
  };

  // react-select async searchbar style

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-hero bg-cover grayscale opacity-25" />
      <div className="font-display">
        <h1 className="text-center text-8xl drop-shadow-lg brightness-100 text-white">SEARCH FOR COCKTAILS</h1>
        <Searchbar
          onChange={handleOnChange}
          placeholder={"Cocktails"}
          className={"bg-grey-300 w-4/12 pt-5 mx-auto text-2xl "}
          styles={SearchBarStyle}
          />
      </div>
    </div>
  );
}
