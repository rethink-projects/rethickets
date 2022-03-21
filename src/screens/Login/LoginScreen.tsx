import React, { useState } from "react";
import "./styles.css";
import { Input, Logo } from "../../components";



export default function LoginScreen() {
  
  const[clicked, toggleClicked] = useState(false);

   const setClick = () => {
     toggleClicked(clicked => !clicked);
  }

   const infos = {
     default: {
       img: './assets/eye-off.png',
       type:'password',
     },
     clicked: {
       img:'./assets/eye.png',
       type:'text'
     }
   }


  return (
    <div className='login-container'>
      <div className='login-header'>
        <Logo width='200px' customCss={{ marginBottom: "20px" }} />
        <h1 className='login-title'>
          Faça login e participe dos nossos principais eventos!
        </h1>
      </div>
      <div className='form-modal-container'>
        <Input
          placeholder='Digite seu email:'
          src='./assets/user.png'
          type='email'
          iconCustomCss={ { width: "15px", height: "15px" } }
          containerCustomCss={ { marginBottom: "15px" } }      
        />

        <Input
          containerCustomCss={ { marginBottom: "20px" } }
          placeholder='Digite seu senha:'
          onClick={setClick}
          src={ clicked ? infos.clicked.img : infos.default.img }
          type={ clicked ? infos.clicked.type : infos.default.type }
          iconCustomCss={ { width: "15px", height: "15px" } }       
          />

        <button className='modal-acess-button'>Acessar Plataforma</button>
        <h1 className='modal-footer-text'>Esqueci minha senha</h1>
      </div>
    </div>
  );
}
