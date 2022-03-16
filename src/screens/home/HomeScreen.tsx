import "./style.css";
import {Form,List} from "../../components/index";


type ScreenHomeProps = {};

function HomeScreen() {
  return (
    <div className='home-container'>
      
      <Form placeholderText='Busque por Eventos, Palestras ou reuniões' />
      <div className='events-container'>
        <List title='Principais Eventos na Rethink' />
        <List title='Eventos dos nossos Parceiros' />
      </div>
    </div>
  );
}

export default HomeScreen;
