import React from "react";
import classes from './About.module.css';

export default function About() {
  return (
    <section className={`${classes.about} ${classes.section}`}>
      <h1 className={classes.title}>About Catalog of Cocktails</h1>
      <p>I love mixing drinks and drinking them</p>
    </section>
  )
}
