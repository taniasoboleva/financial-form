import React from "react";
import "./App.css";
import FinancialForm from "./components/Body/FinancialForm";
import GlobalProvider from "./components/context/GlobalState";

const App = () => (
  <GlobalProvider>
    <FinancialForm />
  </GlobalProvider>
);

export default App;
