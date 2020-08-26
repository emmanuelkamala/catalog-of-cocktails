import React, { useRef, useEffect } from 'react';
import classes from './SearchForm.module.css';

export default function SearchForm({ setSearchTerm }) {
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  })

  const handleSubmit = (e) => e.preventDefault();

  const searchCocktail = () => setSearchTerm(searchValue.current.value);

  return (
    <section className={classes.section}>
      <h2 className={classes.title}>search cocktails</h2>
      <form className={`${classes.form} ${classes['search-form']}`} onSubmit={handleSubmit}>
        <div className={classes['form-control']}>
          <label htmlFor="name">Search your favorite cocktail</label>
          <input type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue} />
        </div>
      </form>
    </section>
  );
}
