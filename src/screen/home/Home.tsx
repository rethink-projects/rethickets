import "./style.css";
import Form from "../../components/form/Form";
import List from "../../components/list/List";


type ScreenHomeProps = {}; 

function Home (){
    return (

        <div className="Home">
        
        <Form placeholderText='Busque por Eventos, Palestras ou reuniões'/>
        <div className="Events-Container">
        <List title='Principais Eventos na Rethink'/>
        <List title='Eventos dos nossos Parceiros'/>
        <List title='Eventos da área de Produtos'/>
        </div>
        </div>
        
            )
}



export default Home;