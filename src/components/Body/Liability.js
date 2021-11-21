import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import CalculatedSingleResult from "./CalculatedSingleResult.js";
import * as Styled from "./styles.js";

const Liability = ({ liability }) => {
  const { deleteLiability } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleEditModal = () => {
    setModalVisible(true);
  };

  const toggleEdit = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <li>
      <div>{liability.text}</div>
      <Styled.ListItemButtons>
        <button alt="" onClick={toggleEditModal}>
          Izrēķināt
        </button>
        <button alt="" onClick={() => deleteLiability(liability.id)}>
          Atcelt
        </button>
      </Styled.ListItemButtons>
      <CalculatedSingleResult
        modalVisible={modalVisible}
        key={liability.id}
        liability={liability}
        toggleEdit={toggleEdit}
      />
    </li>
  );
};

export default Liability;
