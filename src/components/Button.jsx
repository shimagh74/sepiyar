import React  from "react";

const Button = ({children, ...props}) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
