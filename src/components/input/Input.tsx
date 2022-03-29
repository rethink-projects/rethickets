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
  onClick?: () => void;
  onChangeText?: () => void;
};

function Input({
  placeholder,
  src,
  type,
  hasIcon = true,
  iconCustomCss = {},
  inputCustomCss = {},
  containerCustomCss = {},
  onClick,
}: // onChangeText,

InputProps) {
  return (
    <div className='container-input' style={containerCustomCss}>
      <input
        type={type}
        name='search'
        className='input'
        style={inputCustomCss}
        placeholder={placeholder}

        // onChangeText={onChangeText}
      />
      {hasIcon && (
        <img
          style={iconCustomCss}
          className='img-icon'
          src={src}
          alt='searchImg'
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default Input;
