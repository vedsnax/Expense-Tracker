import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Balance from './Balance';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <Balance transactions={transactions} />

      <TransactionForm 
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <TransactionList 
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
