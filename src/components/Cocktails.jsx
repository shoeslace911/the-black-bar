import { useEffect, useState } from "react";

export default function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-44 py-14 font-display">
      <h1 className="text-4xl text-center  py-20 ">Cocktails</h1>
      <ul>
        <li>GAMER DRINk</li>
      </ul>
    </div>
  );
}
