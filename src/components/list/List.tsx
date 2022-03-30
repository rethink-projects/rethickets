import "./styles.css";
import { faker } from "@faker-js/faker";
import { Title } from "..";
import axios from "axios";
import { useEffect, useState } from "react";

type ListProps = {
  title: string;
  isActive: boolean;
  id: string;
  data: EventsData[];
  handleClick?: (isActive: boolean, id: string) => void;
};

type EventsData = {
  name: String;
  eventImageSmall: String;
  resume: String;
  type: String;
  eventDate: String;
};

function List({ handleClick, title, isActive, id, data }: ListProps) {
  const infos = {
    default: {
      img: "./assets/calendar_white.png",
      color: "#ffff",
      height: "180px",
      textColor: "#212529",
    },
    clicked: {
      img: "./assets/calendar_yellow.png",
      color: "#d3f13a",
      height: "300px",
      textColor: "white",
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
        {data.length &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className='event-container'
                style={{
                  height: isActive
                    ? infos.clicked.height
                    : infos.default.height,
                }}
              >
                <div className='event-title-container'>
                  <p className='event-title'>{item.name}</p>
                </div>
                <div className='event-img'></div>
                <div
                  style={{
                    color: isActive
                      ? infos.clicked.textColor
                      : infos.default.textColor,
                  }}
                  className='description-event-container'
                >
                  <p style={{ display: isActive ? "flex" : "none" }}>
                    {item.resume}
                  </p>
                  <div
                    style={{
                      color: isActive
                        ? infos.clicked.textColor
                        : infos.default.textColor,
                      display: isActive ? "flex" : "none",
                    }}
                    className='event-footer'
                  >
                    <p>type</p>
                    <p> {item.eventDate}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
