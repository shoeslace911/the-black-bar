import Navbar from "./components/Navbar/Navbar";
import RecommendedCocktails from "./components/RecommendedCocktails";
import LandingPage from "./components/LandingPage";
import Cocktails from "./components/Cocktails";

function App() {
  return (
    <div className="text-white bg-gradient-to-br  from-zinc-950 from-30% to-zinc-800 ">
      <Navbar />
      <LandingPage />
      <RecommendedCocktails />
      <Cocktails />
    </div>
  );
}

export default App;
