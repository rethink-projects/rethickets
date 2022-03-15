import React from "react";
import "./styles.css";

type ModalParams = {
  children: React.ReactNode;
  isModalOpen: boolean;
  toggleModal: () => void;
};

export default function Modal({
  children,
  isModalOpen,
  toggleModal,
}: ModalParams) {
  let containerClass = isModalOpen ? "modal-container-open" : "modal-container";

  let overlayClass = isModalOpen ? "modal-overlay-open" : "modal-overlay";

  return (
    <div className={overlayClass}>
      <div className={containerClass}>
        <div onClick={toggleModal} className='modal-close-button'>
          <img src='./assets/close-button.png' alt='Fechar Modal' />
        </div>
        <div className='modal-inner'>{children}</div>
      </div>
    </div>
  );
}
