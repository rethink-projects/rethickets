import "./style.css";

type InputProps = {
  placeholderText: string;
  localImg: File;
  type: string;
};

function Input({ placeholderText, localImg, typeInput }: InputProps) {
  return (
    <div className='container-input'>
      <input
        type={typeInput}
        name='search'
        className='input'
        placeholder={placeholderText}
      />

      <button className='searchButton'>
       <div >
        <img
          className='imgButtom'
          src={localImg}
          alt='searchImg'
        ></img>
        </div>
      </button>
    </div>
  );
}

export default Input;
