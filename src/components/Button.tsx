import React from 'react';
import classes from '../css/Button.module.css';

interface ButtonProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({ title, onClick, type = "button" }) => {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button