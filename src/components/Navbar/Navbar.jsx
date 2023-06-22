import { useState } from "react";
import Searchbar from "../Search/Searchbar";
import { SearchBarStyle } from "../../hooks/SearchHooks";
import { hoverStyle } from "../../hooks/NavHooks";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [background, setBackground] = useState(false);

  const handleOnChange = (e) => {
    if (e) {
      setSearchValue(e.value);
    } else {
      setSearchValue("");
      console.log("No Value!");
    }
  };

  const changeBackground = () => {
    window.scrollY >= 50 ? setBackground(true) : setBackground(false);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        background
          ? "fixed top-0 w-full py-8 z-10 bg-gradient-to-r from-stone-900 from-70% to-stone-950 ease-out duration-500 "
          : "fixed top-0 w-full py-8 z-10 ease-out duration-500"
      }
    >
      <ul className="flex gap-5 w-full text-white text-5xl justify-evenly font-display ">
        <Link to="/">
          <li className="drop-shadow-lg ease-out duration-500">The Black Bar</li>
        </Link>
        <div>
          <a href="#">
            <li className={hoverStyle}>Home</li>
          </a>
          <a href="#cocktails">
            <li className={hoverStyle}>Cocktails</li>
          </a>
          <a href="#about">
            <li className={hoverStyle}>About</li>
          </a>
        </div>
        <Searchbar
          styles={SearchBarStyle}
          onChange={handleOnChange}
          className={` w-72 text-xl text-black  `}
          placeholder={`Cocktails`}
        />
      </ul>
    </nav>
  );
}
