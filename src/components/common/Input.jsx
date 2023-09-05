// common / Input.jsx

import React, { useState } from 'react'
import * as St from "../../styles/Styles"

const addCommas = (num) => num
                            .toString()
                            .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
const removeCommas = (str) => str.replace(/[^\d]+/g, "");

const Input = ({ value, setValue, isNumber, title }) => {
  const onChangeHandler = (e) => {
    console.log(!e.target.value)
    if (!e.target.value) return;
    const num = Number(removeCommas(e.target.value));
    setValue(addCommas(num))
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{title}</p>
      <St.InputBox value={value} onChange={(e) => isNumber ? onChangeHandler(e) : setValue(e.target.value)}/>
    </div>
    
  )
}

export default Input;
