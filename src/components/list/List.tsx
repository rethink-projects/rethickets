import "./styles.css";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Title } from "..";

type ListProps = {
  title: string;
  isActive: boolean;
  id:number;
  handleClick: (isActive:boolean,id:number) => void;
};

function List({ title,isActive,handleClick,id }: ListProps) {
  

  const infos = {
    default: {
      img: "./assets/calendar_white.png",
      color: "#ffff",
      height: "180px",
    },
    clicked: {
      img: "./assets/calendar_yellow.png",
      color: "#d3f13a",
      height: "300px",
    },
  };

  return (
    <div className='title-list'>
      <Title
        clicked={isActive}
        colorClicked={infos.clicked.color}
        colorDefault={infos.default.color}
        imgClicked={infos.clicked.img}
        imgDefault={infos.default.img}
        title={title}
        id={id}
        handleClick={handleClick}
      />

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
                  height: isActive ? infos.clicked.height : infos.default.height,
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
