import { useState } from "react";
import Searchbar from "../Search/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected && "silver", // Change the background color of selected and non-selected options
      color: state.isSelected && "black",
      "&:hover": {
        backgroundColor: "lightgray", // Change the background color on hover
        color: "black", // Change the text color on hover
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "none",
      color: "white",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }),
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
          styles={searchbarStyle}
          onChange={handleOnChange}
          className={" w-72 text-xl text-black  "}
          placeholder={`Cocktails`}
        />
      </ul>
    </nav>
  );
}
