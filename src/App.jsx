import { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import RecommendedCocktails from "./components/RecommendedCocktails";
function App() {
  return (
    <>
      <Navbar />
      <Search />
      <RecommendedCocktails />
    </>
  );
}

export default App;
