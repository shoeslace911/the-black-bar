import { useState } from "react";
import Searchbar from "../Search/Searchbar";
import { SearchBarStyle } from "../../hooks/SearchHooks";
import { hoverStyle } from "../../hooks/NavHooks";
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
          ? "fixed top-0 w-full py-8 z-10 bg-black transition-colors"
          : "fixed top-0 w-full py-8 z-10 transition-colors"
      }
    >
      <ul className="flex gap-5 w-full text-white text-5xl justify-evenly font-display ">
        <li className="drop-shadow-lg transition-all duration-300">The Black Bar</li>
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
