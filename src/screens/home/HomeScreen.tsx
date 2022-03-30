import "./style.css";
import { Form, List } from "../../components/index";
import { useCallback, useEffect, useState } from "react";
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

const listCategories = [
  "Principais Eventos na Rethink",
  "Principais eventos dos nossos Parceiros",
  "Principais eventos da TI",
  "Principais eventos do Designer",
];

const getAllEvents = (eventsList) => {
  listCategories.forEach((category) => {
    axios
      .get(`http://localhost:3030/events?category=${category}`)
      .then((response) => {
        // console.log(response.data);
        eventsList.push({
          title: response.data.category,
          isActive: false,
          id: uuid(),
          info: response.data.events,
        });
      });
  });
  // console.log(eventsList);
  return eventsList;
};

function HomeScreen() {
  const [eventsList, setEventList] = useState([]);

  useEffect(() => {
    // console.log("getAllEvents(eventsList)");
    // console.log(getAllEvents([]));
    setEventList(getAllEvents([]));
  }, []);

  const handleClick = (isActive: boolean, id: string) => {
    const formattedList =
      eventsList.length > 0
        ? eventsList.map((event: ListItemType) => {
            console.log(id, event.id);
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
      {console.log(eventsList)}
      <Form placeholderText='Busque por Eventos, Palestras ou reunioes' />
      <div className='events-container'>
        {eventsList.length ??
          eventsList.map((event) => {
            console.log("event");
            console.log(event);
            return (
              <h1>
                {console.log({ log: event })}
                ooo
              </h1>
              // <List
              //   handleClick={handleClick}
              //   key={event.id}
              //   isActive={event.isActive}
              //   title={event.title}
              //   id={event.id}
              //   data={event.info}
              // />
            );
          })}
      </div>
    </div>
  );
}

export default HomeScreen;
