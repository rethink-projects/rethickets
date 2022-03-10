import "./style.css";
import { Logo } from "../../common/Logo";


type HeaderProps = {
};

function Header (){
    return(
        <div className="container-header">
          <Logo />
          <button className="acess-button" >
            Acesssar 
          <img className='imgGroup' src='./assets/Group_4.png' alt="Imagem do botao" />
          </button>
        
        </div>
    )
}

export default Header;