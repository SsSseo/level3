import React, { useState } from "react";
import Select from "./common/select/Select";
import SelectPortal from "./common/select/SelectPortal";
import * as St from "../styles/Styles";

const SelectGroup = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const options = ["리액트", "자바", "스프링", "노드"];

  return (
    <St.SelectBox>
      <St.Title>Select</St.Title>
      <St.Rows>

        <St.Position>
          <St.VisibleList>
            <Select
              title="안가려집니다"
              icon="🔻"
              options={options}
              selectedOption={selectedOption1}
              setSelectedOption={setSelectedOption1}
            />
          </St.VisibleList>
        </St.Position>

        <St.HiddenList>
          <Select
            title="가려집니다"
            icon="🔻"
            options={options}
            selectedOption={selectedOption2}
            setSelectedOption={setSelectedOption2}
          />
        </St.HiddenList>

      </St.Rows>
    </St.SelectBox>
  );
};

export default SelectGroup;
