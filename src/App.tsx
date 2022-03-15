import "./App.css";

// SCREENS
import { HomeScreen, LoginScreen } from "./screens";

// COMPONENTS
import { Header, Modal } from "./components";
import { useState } from "react";

function App() {
  const [isModalOpen, toggleModal] = useState(false);
  console.log({ isModalOpen });
  return (
    <div>
      <Header
        toggleModal={() => toggleModal(!isModalOpen)}
        AcessButtonText='Acessar'
      />

      <Modal
        isModalOpen={isModalOpen}
        toggleModal={() => toggleModal(!isModalOpen)}
      >
        <LoginScreen />
      </Modal>
      <HomeScreen />
    </div>
  );
}

export default App;

{
  /* <Modal
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
        <button className='modal-button-footer'>Acessar Plataforma</button>
        <h1 className='modal-footer-text'>Esqueci minha senha</h1>
      </div>
    </div>
  </div>
</Modal>; */
}
