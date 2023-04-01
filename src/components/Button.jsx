import React from "react";
import '../styles/utilities/Button.scss';

import getClasses from "../utils/getClasses";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

const Button = ({ children, variant="secondary", type ,...rest}) => {
    return (
      <button
            className={getClasses(["button", `button--${buttonTypes[variant]}`])}
            type={type === 'submit' ? 'submit' : 'button'}
            {...rest}
            
      >
        {children}
      </button>
    );
};


const SelectButton = ({children, ...rest}) => {
    return (
        <select name="" className={getClasses(["button","button__select"])} {...rest} >{ children }</select>
    )
}


export default Button;
export { SelectButton };