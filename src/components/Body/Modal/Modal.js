import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";

import * as Styled from "./Modal.styles";

const Modal = ({ show, onClose, children, padding, middleModalSize }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const position = window.pageYOffset;

  useEffect(() => {
    if (show) {
      const { body } = document;
      body.style.position = "fixed";
      body.style.top = `-${position}px`;
      setScrollPosition(position);
    } else {
      const { body } = document;
      body.style.position = "";
      window.scrollTo(0, scrollPosition);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <Styled.Modal onClick={onClose}>
      <Styled.Container
        onClick={(e) => e.stopPropagation()}
        padding={padding}
        middleModalSize={middleModalSize}
      >
        <div>{children}</div>
      </Styled.Container>
    </Styled.Modal>,
    document.getElementById("root")
  );
};

export default Modal;
