import React, { useState } from "react";
import Button from "./common/button/Button";
import Modal from "./common/Modal";
import * as St from "../styles/Styles";

const ModalGroup = () => {
  const [isBackgroundClickClose, setIsBackgroundClickClose] = useState(false);
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openModal = (isBackgroundClickClose) => {
    setIsBackgroundClickClose(isBackgroundClickClose);
    setIsSecondModalOpen(true);
  };

  const closeModal = () => {
    if (isBackgroundClickClose) {
      setIsSecondModalOpen(false);
    }
  }

  return (
    <St.Container>
      <St.Title>Modal</St.Title>
      <St.Rows>
        <Button 
          onClick={() => setIsFirstModalOpen(true)} 
          typeButton="negative" 
          size="medium">
          open modal
        </Button>
        {isFirstModalOpen && (<Modal 
                                closeModal={() => setIsFirstModalOpen(false)}
                                text="닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요." 
                              />)}

        <Button
          onClick={openModal} 
          typeButton="primary" 
          size="large">
          open modal
        </Button>
        {isSecondModalOpen && (<Modal 
                                closeModal={() => setIsSecondModalOpen(false)} 
                                backCloseModal={closeModal} 
                                text="닫기버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요." 
                              />)}
      </St.Rows>
    </St.Container>
  );
};

export default ModalGroup;
