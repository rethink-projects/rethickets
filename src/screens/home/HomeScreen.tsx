import "./style.css";
import { Form, List } from "../../components/index";
import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { indexEventsServices } from "../../services/eventsServices";
import axios from "axios";

type ScreenHomeProps = {};

type EventsData = {
  name: String;
  eventImageSmall: String;
  resume: String;
  type: String;
  eventDate: String;
};

type ListItemType = {
  title: string;
  isActive: boolean;
  id: string;
  data: EventsData[];
};
type ListTypes = ListItemType[];
const getAllEvents = async (set: React.SetStateAction<any>) => {
  const categories = [
    "Principais Eventos na Rethink",
    "Principais eventos dos nossos Parceiros",
    "Principais eventos da TI",
    "Principais eventos do Designer",
  ];

  const response = categories.map(async (item) => {
    return {
      title: item,
      isActive: false,
      id: uuid(),

      data: (await axios.get(`http://localhost:3030/events?category=${item}`))
        .data.events,
    };
  });

  console.log(await Promise.all(response));
  set(await Promise.all(response));
};

const category = "Principais Eventos na Rethink";

function HomeScreen() {
  const [eventsList, setEventList] = useState<ListTypes>([]);

  useEffect(() => {
    getAllEvents(setEventList);
  }, [0]);

  const handleClick = (isActive: boolean, id: string) => {
    const formattedList =
      eventsList.length > 0
        ? eventsList.map((event: ListItemType) => {
            if (id === event.id) {
              return {
                ...event,
                isActive: isActive,
              };
            }
            return {
              ...event,
              isActive: false,
            };
          })
        : [];
    setEventList(formattedList);
  };

  return (
    <div className='home-container'>
      <Form placeholderText='Busque por Eventos, Palestras ou reuniões' />
      <div></div>
      <div className='events-container'>
        {eventsList.map((event) => {
          return (
            <List
              handleClick={handleClick}
              key={event.id}
              isActive={event.isActive}
              title={event.title}
              id={event.id}
              data={event.data}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
