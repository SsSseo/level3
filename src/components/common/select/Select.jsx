import React, { useState } from "react";
import * as St from "../../../styles/Styles";
import SelectOption from "./SelectOption";

const Select = ({ title, icon, options, selectedOption, setSelectedOption }) => {
  const [isSelectOptionOpen, setSelectOptionOpen] = useState(false);

  const handleOptionSelect = (optionTitle) => {
    setSelectedOption(optionTitle);
    setSelectOptionOpen(false);
  };

  return (
    <>
      <St.SelectButton
        onClick={() => setSelectOptionOpen(true)}
        typeButton="negative"
      >
        <St.Rows>
          <St.SelectTitle>{selectedOption || title}</St.SelectTitle>
          <div>{icon}</div>
        </St.Rows>
      </St.SelectButton>

      {isSelectOptionOpen && (
        <St.SelectOptionGroup>
          {options.map((option) => (
            <SelectOption
              key={option}
              title={option}
              closeModal={() => handleOptionSelect(option)}
            />
          ))}
        </St.SelectOptionGroup>
      )}
    </>
  );
};

export default Select;
