import { useState, useEffect } from "react";
import Searchbar from "./Search/Searchbar";

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
  const searchbarStyle = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "none",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderRadius: "0%",
      color: "white",
    }),
    indicatorSeparator: () => null, // Remove the separator
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (past) => ({
      ...past,
      color: "white",
    }),
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-hero bg-cover font-display ">
      <h1 className="text-center text-8xl drop-shadow-lg brightness-100 text-white">SEARCH FOR COCKTAILS</h1>
      <Searchbar
        onChange={handleOnChange}
        placeholder={"Cocktails"}
        className={"bg-grey-300 w-4/12 pt-5 mx-auto text-2xl "}
        styles={searchbarStyle}
      />
    </div>
  );
}
