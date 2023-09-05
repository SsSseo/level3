// components / InputGroup.jsx

import React, { useState } from "react";
import * as St from "../styles/Styles";
import Input from "./common/Input";
import Button from "./common/Button";
import {removeCommas} from "./common/Input"

const InputGroup = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const saveButtonHandler = () => {
    if (!name.trim() || !price.trim()) {
      return alert("빈 칸을 채워주세요");
    }
    alert(`
      name : ${name}, price : ${removeCommas(price)}
    `);
  };

  return (
    <St.Container>
      <St.Title>Input</St.Title>
      <Input title="이름" value={name} setValue={setName}/>
      <Input title="가격" value={price} setValue={setPrice} isNumber/>
      <Button onClick={saveButtonHandler}>저장</Button>
    </St.Container>
  );
};

export default InputGroup;
