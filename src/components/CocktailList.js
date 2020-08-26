import React from 'react';
import Cocktail from './Cocktail';
import classes from './CocktailList.module.css';

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <h2 className={classes.title}>Loading...</h2>;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className={classes.title}>
        No cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Cocktails</h2>
      <div className={classes['cocktails-center']}>
        {
          cocktails.map(item => {
            return (
              <Cocktail key={item.id} {...item} />
            );
          })
        }
      </div>
    </section>
  );
}
