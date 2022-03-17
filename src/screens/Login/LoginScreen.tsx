import React, { useState } from "react";
import "./styles.css";
import { Input, Logo } from "../../components";

export default function LoginScreen() {

  
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
          containerCustomCss={{ marginBottom: "15px" }}
          iconCustomCss={{ width: "15px", height: "15px" }}
        />
        <Input
          containerCustomCss={{ marginBottom: "20px" }}
          placeholder='Digite seu senha:'
          src='./assets/lock.png'
          type='password'
          iconCustomCss={{ width: "15px", height: "15px"  }}
        />

        <button className='modal-acess-button'>Acessar Plataforma</button>
        <h1 className='modal-footer-text'>Esqueci minha senha</h1>
      </div>
    </div>
  );
}
