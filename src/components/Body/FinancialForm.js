import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import LiabilitiesList from "./LiabilitiesList.js";
import * as Styled from "./styles.js";

const FinancialForm = () => {
  const { addLiability } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [month, setMonth] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    document.title = "Financial Liabilities Form";
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newLiability = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount,
      month: +month,
      percentage,
    };
    addLiability(newLiability);
  };

  const handleRemove = () => {
    setText("");
    setAmount(0);
    setMonth(0);
    setPercentage(0);
  };

  return (
    <>
      <h1>Ikmēneša tēriņu aprēķināšana</h1>
      <form onSubmit={handleSubmit}>
        <h3>Lūdzu ievadiet finansiālās saīstības:</h3>
        <label>Saistības nosaukums</label>
        <input
          type="text"
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
        />
        <label>Aizdevuma pamatsumma</label>
        <input
          type="number"
          min="0"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Aizdevuma termiņš (mēneši)</label>
        <input
          type="number"
          min="1"
          max="12"
          value={month}
          required
          onChange={(e) => setMonth(e.target.value)}
        />
        <label>Aizdevuma procenti mēnesī no atlikušās pamatsummas (%)</label>
        <input
          type="number"
          min="0"
          step=".01"
          required
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
        <Styled.Container>
          <button as="input" type="submit" disabled={!text}>
            Pievienot
          </button>
          <button onClick={handleRemove} type="button">
            Dzēst
          </button>
        </Styled.Container>
      </form>
      <LiabilitiesList />
    </>
  );
};

export default FinancialForm;
