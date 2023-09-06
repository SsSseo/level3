import { styled, css } from "styled-components";

// features 스타일
export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Modal = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1000;
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

// feature 제목
export const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

// 아이콘 + 버튼글자
export const ButtonInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// 버튼 스타일
export const Button = styled.button`
  cursor: pointer;
  margin: 5px;
  border: none;
  border-radius: 8px;
  font-weight: bold;

  ${({ typeButton }) => {
    switch (typeButton) {
      case "primary":
        return css`
          background-color: #89caff;
          color: #000052;
          border: 5px solid #89caff;
        `;
      case "negative":
        return css`
          background-color: #ffcbcb;
          color: #a84141;
          border: 5px solid #ffcbcb;
        `;
    }
  }};

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 60px;
          width: 200px;
          background-color: white;
        `;
      case "medium":
        return css`
          height: 40px;
          width: 100px;
          border: none;
        `;
      case "small":
        return css`
          height: 25px;
          width: 80px;
          border: none;
        `;
    }
  }};
`;

// 버튼 한 줄
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

// input 그룹
export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
`;

export const InputBox = styled.input`
  height: 20px;
  width: 180px;
  margin-left: 5px;
  border-radius: 5px;
  border: none;
  background-color: #ececec;
  padding: 5px;

  &:focus {
    outline: none;
  }
`;
