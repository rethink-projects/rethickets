import "./style.css";
import { Form, List } from "../../components/index";

type ScreenHomeProps = {};

function HomeScreen() {
  return (
    <div className='home-container'>
      <Form placeholderText='Busque por Eventos, Palestras ou reuniões' />
      <div className='events-container'>
        <List title='Principais Eventos na Rethink' />
        <List title='Eventos dos nossos Parceiros' />
        <List title='Eventos da Área de TI' />
        <List title='Eventos da Área de Design' />
        <List title='Eventos da Área de Projetos' />
        <List title='Eventos da Área de Marketing' />
        </div>
    </div>
  );
}

export default HomeScreen;
