import "./styles.css";

type TitleType = {
  clicked: boolean;
  imgClicked: string;
  imgDefault: string;
  colorClicked: string;
  colorDefault: string;
  title: string;
  id: number;
  handleClick: (clicked: boolean, id:number) => void;
};

const Title = ({
  clicked,
  colorClicked,
  colorDefault,
  imgClicked,
  imgDefault,
  title,
  handleClick,
  id,
}: TitleType) => {
  return (
    <div className='title-container'>
      <img
        className='calendarImg'
        src={clicked ? imgClicked : imgDefault}
        alt='Calendar Image'
      />
      <h1
        onClick={() => handleClick(!clicked,id)}
        className='list-title'
        style={{ color: clicked ? colorClicked : colorDefault }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
