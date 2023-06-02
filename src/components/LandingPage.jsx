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

  return (
    <div className="flex flex-col justify-center h-screen bg-hero bg-cover">
      <h1 className="text-center text-4xl drop-shadow-lg text-white">Search here</h1>
      <form>
        <Searchbar onChange={handleOnChange} className={"bg-grey-300 mx-96"} />
      </form>
    </div>
  );
}
