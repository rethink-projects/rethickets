import "./style.css";
import { Logo } from "../../common/Logo";


type HeaderProps = {
};

function Header (){
    return(
        <div className="container-header">
          <Logo />
          <div className="button-and-img" >
          <button className="acess-button"  >
            Acessar 
          <img width="32px" src='./assets/Group_4.png' alt="Imagem do botao" />
          </button>
          </div>
        
        </div>
    )
}

export default Header;