import React from "react";
import Button from "./common/button/Button";
import * as St from "../styles/Styles";
import { IconArrow, IconBell } from "./common/button/Icon";

const ButtonGroup = () => {
  return (
    <St.Container>
      <St.Title>Button</St.Title>
      <St.ButtonGroup>
        <Button
          icon={<IconArrow />}
          typeButton="primary"
          size="large"
          onClick={() => alert("버튼을 만들어보세요")}
        >
          Large Primary Button
        </Button>
        <Button typeButton="primary" size="medium">
          Medium
        </Button>
        <Button typeButton="primary" size="small">
          Small
        </Button>
      </St.ButtonGroup>

      <St.ButtonGroup>
        <Button
          icon={<IconBell />}
          typeButton="negative"
          size="large"
          onClick={() => console.log(prompt("어렵나요?"))}
        >
          Large Negative Button
        </Button>
        <Button typeButton="negative" size="medium">
          Medium
        </Button>
        <Button typeButton="negative" size="small">
          Small
        </Button>
      </St.ButtonGroup>
    </St.Container>
  );
};

export default ButtonGroup;
