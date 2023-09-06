import React from "react";
import * as St from "../../styles/Styles";
import Button from "./button/Button";

const Modal = ({ closeModal, backCloseModal, text }) => {

  const okClick = () => {
    console.log('OK!')
  }

  return (
    <>
      <St.BackGround onClick={backCloseModal}/>
      <St.Modal>
        Modal
        {text}
        <Button style={{display:backCloseModal?"none":"block"}} onClick={okClick} typeButton="primary" size="medium">
          확인
        </Button>
        <Button onClick={closeModal} typeButton="negative" size="medium">
          Close
        </Button>
        
      </St.Modal>
    </>
  );
};

export default Modal;
