import "./style.css";
import { faker } from "@faker-js/faker";
import {useState} from "react";

const Title = () =>{
  
  const [color, setColor] = useState("#D3F13A");
  
  const [img, setImg] = useState()
  
  const setStyle = (color, img) =>{
    setColor(color);
    setImg(img)
  }
}


type ListProps = {
  title: string;
};

function List({ title }: ListProps) {
  return (
    <div className='list'>
      <div className='title-container'>
        <img className='calendarImg' src='./assets/calendar_white.png' alt='' />
        <h1 className='list-title'>{title}</h1>
      </div>
      <div className='list-container'>
        {Array.from({ length: 4 })
          .map((_, index) => {
            return {
              title: faker.definitions.title,
            };
          })
          .map((item) => {
            return (
              <div className='event-container'>
                <p className='event-title'>{item.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
