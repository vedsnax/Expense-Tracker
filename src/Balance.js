import React from 'react';

function Balance({ transactions }) {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h2>Balance: ₹{balance}</h2>
      <p>Total Income: ₹{income}</p>
      <p>Total Expense: ₹{expense}</p>
    </div>
  );
}

export default Balance;
