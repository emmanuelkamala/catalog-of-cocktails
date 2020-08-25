import React from "react";
import { Link } from 'react-router-dom';
import classes from './Cocktail.module.css';

export default function Cocktail({ id, image, info, name, glass }) {
  return (
    <article className={classes.cocktail}>
      <div className={classes['img-container']}>
        <img src={image} alt={name} />
      </div>
      <div className={classes['cocktail-footer']}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className={`${classes.btn} ${classes.btnPrimary} ${classes.btnDetails}`}>Details</Link>
      </div>
    </article>
  )
}
