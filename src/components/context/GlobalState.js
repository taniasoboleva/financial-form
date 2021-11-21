import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  liabilities: [],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteLiability = (id) => {
    dispatch({
      type: "DELETE_LIABILITY",
      payload: id,
    });
  };

  const addLiability = (liability) => {
    dispatch({
      type: "ADD_LIABILITY",
      payload: liability,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ liabilities: state.liabilities, deleteLiability, addLiability }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
