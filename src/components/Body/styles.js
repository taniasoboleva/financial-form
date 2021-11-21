import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 16px;
`;

export const ListItemButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 120px;
  font-size: 16px;
`;

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TableTitle = styled.span`
  font-weight: bold;
  color: #009767;
`;

export const CountButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CountAllLiabilitiesButton = styled.button`
  max-width: 30%;
  background-color: #484848;
  border-color: #484848;
`;

export const Results = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 4px;
`;
