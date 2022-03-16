import { Input } from "../index";
import "./style.css";

type FormProps = {
  placeholderText: string;
};

function Form({ placeholderText }: FormProps) {
  return (
    <div className='container-form'>
      <Input
        iconCustomCss={{ width: "20px", height: "20px" }}
        placeholder={placeholderText}
        src={"./assets/search_1.png"}
        type={"search"}
      />
    </div>
  );
}

export default Form;
