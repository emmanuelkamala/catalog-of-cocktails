import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from './SingleCocktail.module.css';

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            idDrink: id,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
            strCategory: category,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = { 
            id,
            name,
            image,
            info,
            glass,
            category,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getCocktail();
  }, [id]);

  if (loading) {
    return <h2 className={classes.title}>Loading...</h2>;
  }

  if (!cocktail) {
    return <h2 className={classes.title}>No cocktail to display</h2>
  } else {
    const {
      image,
      info,
      name,
      instructions,
      ingredients,
      glass,
      category
    } = cocktail;

    return (
      <section className={`${classes.section} ${classes['cocktail-section']}`}>
        <Link to="/" className={`${classes.btn} ${classes.btnPrimary}`}>Back Home</Link>
        <h2 className={classes.title}>{name}</h2>
        <div className={classes.drink}>
          <img src={image} alt={name} />
          <div className='drink-info'>
            <p>
              name: 
              {name}
            </p>
            <p>
              category: 
              {category}
            </p>
            <p>
              info: 
              {info}
            </p>
            <p>
              glass: 
              {glass}
            </p>
            <p>
              instructions: 
              {instructions}
            </p>
            <p>ingredients: 
              {
                ingredients.map((item, index) => {
                  return item ? <span key={index}>{item}</span> : null;
                })
              }
            </p>
          </div>
        </div>
      </section>
    );
  }
}
