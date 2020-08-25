import React, {useState, useEffect} from "react";
import CocktailsList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList loading={loading} cocktail={cocktail} />
    </main>
  );
}
