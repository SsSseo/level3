// common / Input.jsx

import React, { useState } from 'react'
import * as St from "../../styles/Styles"

export const removeCommas = (str) => str.replace(/[^\d]+/g, "");

const addCommas = (num) => num
                            .toString()
                            .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

const Input = ({ value, setValue, isNumber, title }) => {

  const onChangeHandler = (e) => {
    if (!isNumber) return setValue(e.target.value)
    const num = Number(removeCommas(e.target.value));
    setValue(addCommas(num))
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{title}</p>
      <St.InputBox value={value} onChange={(e) =>  onChangeHandler(e)}/>
    </div>
    
  )
}

export default Input;
