import "./style.css";
import { Form, List } from "../../components/index";
import { useState } from "react";
import { v4 as uuid } from "uuid";

type ScreenHomeProps = {};
type ListItemType = {
  title: string;
  isActive: boolean;
  id:string;
};
type ListTypes = ListItemType[];

const list = [
  { title: "Principais Eventos na Rethink", isActive: false, id: uuid() },
  { title: "Eventos dos nossos Parceiros", isActive: false, id: uuid() },
  { title: "Eventos da Área de TI", isActive: false, id: uuid() },
  { title: "Eventos da Área de Design", isActive: false, id: uuid() },
  { title: "Eventos da Área de Projetos", isActive: false, id: uuid() },
  { title: "Eventos da Área de Marketing", isActive: false, id: uuid()},
];

function HomeScreen() {
  const [eventsList, setEventList] = useState<ListTypes>(list);

  const handleClick = (isActive: boolean, id: string) => {
    const formattedList = eventsList.map((event: ListItemType) => {
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
    });

    setEventList(formattedList);
  };
  return (
    <div className='home-container'>
      <Form placeholderText='Busque por Eventos, Palestras ou reuniões' />
      <div className='events-container'>
        {eventsList.map((event) => {
          return (
            <List
              handleClick={handleClick}
              key={event.id}
              isActive={event.isActive}
              title={event.title}
              id={event.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
