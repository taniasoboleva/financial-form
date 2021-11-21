import styled from "styled-components";

export const Modal = styled.div`
  overflow: auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  cursor: initial;
`;

export const Container = styled.div`
  padding: 24px;
  min-height: 240px;
  border-radius: 16px;
  margin: auto;
  background-color: white;
  width: 440px;
`;

export const ModalHeader = styled.div`
  position: absolute;
  right: ${(props) => props.padding};

  &:hover {
    cursor: pointer;
  }
`;
