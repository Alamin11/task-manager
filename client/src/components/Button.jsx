/* eslint-disable react/prop-types */
// import React from "react";
import clsx from "clsx";

const Button = ({ icon, className, label, type, onClick = () => {} }) => {
  return (
    <button
      type={type || "button"}
      className={clsx("p-2 outline-none  ", className)}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
