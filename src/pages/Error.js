import React from "react";
import { Link } from 'react-router-dom';
import classes from './Error.module.css';

export default function Error() {
  return (
    <section className={`${classes.error} ${classes.section}`}>
      <div className={classes.container}>
        <h1>Oops! It's a dead end!</h1>
        <Link to='/' className={`${classes.btn} ${classes.btnPrimary}`}>Back to Home</Link>
      </div>
    </section>
  );
}
