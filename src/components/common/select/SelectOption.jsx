import React from "react";
import * as St from "../../../styles/Styles";

const SelectOption = ({ title, closeModal }) => {
  return (
    <>
      <St.BackGround onClick={closeModal}/>
      <St.Option onClick={closeModal}>{title}</St.Option>
    </>
  );
};

export default SelectOption;
