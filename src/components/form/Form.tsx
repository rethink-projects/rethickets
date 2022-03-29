import { useState } from "react";
import { Input } from "../index";
import "./style.css";

type FormProps = {
  placeholderText: string;
};

function Form({ placeholderText }: FormProps) {
  // function search(s){
  //  setData(data.filter(d => d.title.includes(s)));
  // }

  return (
    <div className='container-form'>
      <Input
        iconCustomCss={{ width: "20px", height: "20px" }}
        placeholder={placeholderText}
        src={"./assets/search_1.png"}
        type={"search"}
        // onChangeText={(s) => search(s)}
      />
    </div>
  );
}

export default Form;
