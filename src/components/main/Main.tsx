import "./style.css";
import Form from "../form/Form";
import List from "../list/List";


function MainProps () {

};

function Main () {
    return (

<div className="main">

<Form placeholderText='Busque por Eventos, Palestras ou reuniões'/>
<List ListText='Principais Eventos na Rethink'/>
<List ListText='Eventos dos nossos parceiros'/>
<List ListText='Eventos da área de Produtos'/>
</div>

    )
}



export default Main;