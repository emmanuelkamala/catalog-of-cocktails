import React, {useState} from "react";
import CocktailsList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktail, setCocktail] = useState([]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList loading={loading} cocktail={cocktail} />
    </main>
  );
}
