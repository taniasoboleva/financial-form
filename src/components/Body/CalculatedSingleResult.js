import React from "react";
import Modal from "./Modal/Modal";
import * as Styled from "./styles.js";
import { calculateSumm } from "../../helpers/calculateSumm";

const CalculatedSingleResult = ({ modalVisible, toggleEdit, liability }) => {
  const periods = Array.from(Array(liability.month).keys());
  const percentage = parseFloat(liability.percentage / 100);
  const summ = parseFloat(liability.amount);

  let { listOfSummBody, listOfPercentageBody } = calculateSumm(
    periods,
    summ,
    percentage
  );

  return (
    <Modal show={modalVisible} onClose={toggleEdit}>
      <Styled.ModalContainer>
        <Styled.FieldContainer>
          <Styled.TableTitle>Mēnesis</Styled.TableTitle>
          {periods.map((period) => (
            <Styled.Results key={period.id}>{period + 1}</Styled.Results>
          ))}
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.TableTitle>Pamatsumma</Styled.TableTitle>
          {listOfSummBody.map((period) => (
            <Styled.Results key={period.uid}>
              {period.toFixed(2)}
            </Styled.Results>
          ))}
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.TableTitle>Procenti</Styled.TableTitle>
          {listOfPercentageBody.map((period) => (
            <Styled.Results key={period.ids}>
              {period.toFixed(2)}
            </Styled.Results>
          ))}
        </Styled.FieldContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default CalculatedSingleResult;
