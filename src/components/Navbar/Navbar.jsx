import { useState } from "react";
import Searchbar from "../Search/Searchbar";
import { SearchBarStyle } from "../../hooks/SearchHooks";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e) => {
    if (e) {
      setSearchValue(e.value);
    } else {
      setSearchValue("");
      console.log("No Value!");
    }
  };

  return (
    <nav className="fixed top-0 w-full h-56 my-10 z-10">
      <ul className="flex gap-5 w-full text-white text-5xl justify-evenly  font-display">
        <li className="drop-shadow-lg">The Black Bar</li>
        <div className="flex gap-16">
          <a href="#">
            <li className="drop-shadow-lg text-2xl">Home</li>
          </a>
          <a href="#cocktails">
            <li className="drop-shadow-lg text-2xl">Cocktails</li>
          </a>
          <a href="#cocktails">
            <li className="drop-shadow-lg text-2xl">About</li>
          </a>
        </div>
        <Searchbar
          styles={SearchBarStyle}
          onChange={handleOnChange}
          className={" w-72 text-xl text-black  "}
          placeholder={`Cocktails`}
        />
      </ul>
    </nav>
  );
}
