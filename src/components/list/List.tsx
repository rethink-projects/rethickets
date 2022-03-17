import "./styles.css";
import { faker } from "@faker-js/faker";
import {useState} from "react";

type ListProps = {
  title: string;
};

function closeList(){
  
}

function List({title}: ListProps){
  const [clicked, titleClicked] = useState(false);

const infos = {
  default: {
    img: "./assets/calendar_white.png",
    color: "#ffff",
    height: "180px",
    index: ""
  },
  clicked: {
    img: "./assets/calendar_yellow.png",
    color: "#d3f13a",
    height: "300px",
    index: ""
  },
};
  return (
    <div className='title-list'>
      <div className='title-container'>
        <img 
        className='calendarImg' 
        src={clicked ? infos.clicked.img : infos.default.img } 
        alt='' 
        />
        <h1 
        onClick= {()=> titleClicked(!clicked)}
        className='list-title'
        style={{color: clicked ? infos.clicked.color : infos.default.color }}
        >
        {title}
        </h1>
      </div>
      
      <div className='list-container'>
        {Array.from({ length: 4 })
          .map((_, index) => {
            return {
              title: faker.definitions.title,
            };
          }) 
          .map((item, index) => {
            return (
              <div 
              key={index}
              className='event-container'
              style={{
                height: clicked ? infos.clicked.height : infos.default.height
              }}
              >
                <p className='event-title'>{item.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
