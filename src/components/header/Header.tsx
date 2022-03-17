import "./style.css";
import { Logo } from "..";

type HeaderProps = {
  AcessButtonText: string;
  toggleModal: () => void;
};

function Header({ AcessButtonText, toggleModal }: HeaderProps) {
  return (
    <div className='container-header'>
      <Logo />
      <div className='button-access' onClick={toggleModal}>
        <div className='overlay' />
        <p className='button-access-text'>{AcessButtonText} </p>

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
