import {Input} from "../index";
import "./style.css";


type FormProps = {
  placeholderText: string;
};

function Props({ placeholderText }: FormProps) {
  return (
    <div className='container-form'>
     < Input placeholderText={placeholderText} localImg={'./assets/search_1.png'} typeInput={'search'}/>
    </div>
  );
}

export default Props;
