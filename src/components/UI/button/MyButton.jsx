import React from 'react';
import classes from './style.module.css';
export default function MyButton({ children, ...props }) {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
}
