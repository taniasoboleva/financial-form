import React from "react";
import Modal from "./Modal/Modal";
import { calculateSumm, calculateTotalSumm } from "../../helpers/calculateSumm";
import * as Styled from "./styles.js";

const CalculatedTotalResults = ({ modalVisible, toggleEdit, liabilities }) => {
  let totalListOfBodies = [];
  let totalListOfPercentage = [];
  for (let i = 0; i < liabilities.length; i++) {
    let liability = liabilities[i];
    let periods = Array.from(Array(liability.month).keys());
    let percentage = parseFloat(liability.percentage / 100);
    let summ = parseFloat(liability.amount);

    let calcSum = calculateSumm(periods, summ, percentage);

    totalListOfBodies.push(calcSum.listOfSummBody);
    totalListOfPercentage.push(calcSum.listOfPercentageBody);
  }

  let totals = calculateTotalSumm(totalListOfBodies, totalListOfPercentage);

  let totalPeriods = Array.from(Array(totals.totalSumListBody.length).keys());
  return (
    <Modal show={modalVisible} onClose={toggleEdit}>
      <Styled.ModalContainer>
        <Styled.FieldContainer>
          <Styled.TableTitle>Mēnesis</Styled.TableTitle>
          {totalPeriods.map((period) => (
            <Styled.Results key={period.id}>{period + 1}</Styled.Results>
          ))}
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.TableTitle>Pamatsumma</Styled.TableTitle>
          {totals.totalSumListBody.map((period) => (
            <Styled.Results key={period.id}>
              {period.toFixed(2)}
            </Styled.Results>
          ))}
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.TableTitle>Procenti</Styled.TableTitle>
          {totals.totalSumListPercentage.map((period) => (
            <Styled.Results key={period.id}>
              {period.toFixed(2)}
            </Styled.Results>
          ))}
        </Styled.FieldContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default CalculatedTotalResults;
