import React, { useState } from 'react';

function TransactionForm({ transactions, setTransactions }) {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || amount <= 0) {
      alert("Please enter valid data");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: Number(amount),
      type
    };

    setTransactions([...transactions, newTransaction]);

    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input 
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select 
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
