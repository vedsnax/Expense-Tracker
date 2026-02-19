import React from 'react';

function TransactionList({ transactions, setTransactions }) {

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (t) => t.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <h2 style={{ marginBottom: "15px" }}>Transactions</h2>

      {transactions.length === 0 && (
        <p style={{ textAlign: "center", opacity: "0.6" }}>
          No transactions yet
        </p>
      )}

      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            <span className={t.type === "income" ? "income" : "expense"}>
              {t.description} - ₹{t.amount}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTransaction(t.id)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;

