import "./style.css";
import { Logo } from "../../common/Logo";
import { useState } from "react";
import Modal from "react-modal";

type HeaderProps = {
  AcessButtonText: string;
  toggleModal: () => void;
};

Modal.setAppElement("#root");

function Header({ AcessButtonText, toggleModal }: HeaderProps) {
  return (
    <div className='container-header'>
      <Logo />
      <div className='button-access' onClick={toggleModal}>
        <div className='overlay' />
        <p className='button-access-text'>{AcessButtonText}</p>

        <img
          className='button-access-icon'
          src='./assets/access.png'
          alt='Icone de acesso'
        />
      </div>
    </div>
  );
}

export default Header;
