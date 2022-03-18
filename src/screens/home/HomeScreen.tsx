import "./style.css";
import { Form, List } from "../../components/index";
import { useState } from "react";

type ScreenHomeProps = {};
type ListItemType = {
  title: string;
  isActive: boolean;
  id:number;
};
type ListTypes = ListItemType[];

const list = [
  { title: "Principais Eventos na Rethink", isActive: false, id:(Math.random()*100) },
  { title: "Eventos dos nossos Parceiros", isActive: false, id:(Math.random()*100) },
  { title: "Eventos da Área de TI", isActive: false, id:(Math.random()*100) },
  { title: "Eventos da Área de Design", isActive: false, id:(Math.random()*100) },
  { title: "Eventos da Área de Projetos", isActive: false, id:(Math.random()*100) },
  { title: "Eventos da Área de Marketing", isActive: false, id:(Math.random()*100)},
];

function HomeScreen() {
  const [eventsList, setEventList] = useState<ListTypes>(list);

  const handleClick = (isActive: boolean, id: number) => {
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
              key={event.title}
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
