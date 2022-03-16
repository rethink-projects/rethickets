import React from "react";
import "./style.css";
import {Input} from "../../components/index";
import { Logo } from "../../common/Logo";

export default function LoginScreen() {

  return(
    <div className="login-screen-content">
     <div className='modal-body'>
      <Logo />
      <h1 className='modal-body-text'>
        Faça login e participe dos nossos principais eventos!
      </h1>
    </div>
    <div  className="modal-body">
    < Input placeholderText={ "Digite seu nome:" } localImg={'./assets/access.png'} typeInput={'search'}/>
    < Input  placeholderText={ "Digite sua senha:" } localImg={'./assets/lock1.png'} typeInput={'password'} />
    <button className='modal-acess-button'>
      Acessar Plataforma
    </button>
    <h1 className='modal-footer-text'>
      Esqueci minha senha
    </h1>
    </div>
    </div>

  )
}
