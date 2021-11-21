import React, { useContext, useState } from "react";
import * as Styled from "./styles.js";
import { GlobalContext } from "../context/GlobalState.js";
import Liability from "./Liability.js";
import CalculatedTotalResults from "./CalculatedTotalResults.js";

const LiabilitiesList = () => {
  const { liabilities } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleEditModal = () => {
    setModalVisible(true);
  };

  const toggleEdit = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <ul>
        {liabilities.map((liability) => (
          <Liability key={liability.id} liability={liability} />
        ))}
        {liabilities.length > 1 && (
          <>
            <Styled.CountButtonContainer>
              <Styled.CountAllLiabilitiesButton onClick={toggleEditModal}>
                Saskaitīt visu
              </Styled.CountAllLiabilitiesButton>
            </Styled.CountButtonContainer>
            <CalculatedTotalResults
              modalVisible={modalVisible}
              liabilities={liabilities}
              toggleEdit={toggleEdit}
            />
          </>
        )}
      </ul>
    </>
  );
};

export default LiabilitiesList;
