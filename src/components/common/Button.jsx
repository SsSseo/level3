import React from "react";
import * as St from "../../styles/Styles";

// 버튼 생성
const BasicButton = ({ children, icon, ...props }) => {
  return (
    <St.Button {...props}>
      <St.ButtonInner>
        <>{children}</>
        <>{icon}</>
      </St.ButtonInner>
    </St.Button>
  );
};

export default BasicButton;
