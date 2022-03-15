import "./style.css";
import { Logo } from "../../common/Logo";
import { useState } from "react";
import Modal from "react-modal";

type HeaderProps = {
  AcessButtonText: string;
};

Modal.setAppElement("#root");

function Header({ AcessButtonText }: HeaderProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleModalOpen() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
    },
  };

  return (
    <div className='container-header'>
      <Logo />
      <div className='button-and-img'>
        <button className='acess-button' onClick={handleModalOpen}>
          {AcessButtonText}
          <img width='32px' src='./assets/Group_4.png' alt='Imagem do botao' />
        </button>

        <Modal
          className='Modal-container'
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
        >
          <div className='modal'>
            <div className='modal-header'>
              <button className='closeButton' onClick={handleCloseModal}>
                X
              </button>
            </div>

            <div className='modal-body'>
              <Logo />
              <h1 className='modal-body-text'>
                Faça login e participe dos nossos principais eventos!
              </h1>
            </div>

            <div className='modal-footer'>
              <div className='modal-form'>
                <input
                  type='text'
                  placeholder='Digite seu nome:'
                  className='modal-input'
                />

                <input
                  type='password'
                  placeholder='Digite sua senha:'
                  className='modal-input'
                />
                <button className='modal-button-footer'>
                  Acessar Plataforma
                </button>
                <h1 className='modal-footer-text'>Esqueci minha senha</h1>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
