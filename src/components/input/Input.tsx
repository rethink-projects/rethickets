import { useState } from "react";
import "./styles.css";

type InputProps = {
  placeholder: string;
  src: string;
  type: string;
  hasIcon?: boolean;
  iconCustomCss?: object;
  inputCustomCss?: object;
  containerCustomCss?: object;
  clicked: boolean;
};

function Input({
  placeholder,
  src,
  type,
  clicked,
  hasIcon = true,
  iconCustomCss = {},
  inputCustomCss = {},
  containerCustomCss = {},
}: InputProps) {



  return (
    <div className='container-input' style={containerCustomCss}>
      <input
        type={type}
        name='search'
        className='input'
        style={inputCustomCss}
        placeholder={placeholder}
      />
      {hasIcon && (
        <img
          style={iconCustomCss}
          className='img-icon'
          src={src}
          alt='searchImg'
          
        />
      )}
    </div>
  );
}

export default Input;
