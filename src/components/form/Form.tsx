import "./style.css";

type FormProps = {
  placeholderText: string;
};

function Props({ placeholderText }: FormProps) {
  return (
    <div className='container-form'>
      <div className='form'>
        <input
          type='search'
          name='search'
          className='input'
          placeholder={placeholderText}
        />

        <button className='searchButton'>
          <img
            src='./assets/search_1.png'
            alt='searchImg'
            className='search'
          ></img>
        </button>
      </div>
    </div>
  );
}

export default Props;
