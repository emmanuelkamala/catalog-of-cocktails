import React, {useState, useEffect} from "react";
import CocktailsList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        const {drinks} = data;
        if (drinks) {
          const newCocktail = drinks.map(item => {
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
            return {
              id:idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            }
          })
          setCocktail(newCocktail);
        } else {
          setCocktail([])
        }
      } catch(error){
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm])

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList loading={loading} cocktail={cocktail} />
    </main>
  );
}
