import React from 'react'
import ReactDOM from "react-dom";

const SelectPortal = ({ children }) => {
  const portalTarget = document.getElementById("portal-target");

  if (!portalTarget) {
    return null;
  }

  return ReactDOM.createPortal(children, portalTarget);
};

export default SelectPortal