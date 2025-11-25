import React, { useState } from "react";

const AddExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      category,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("General");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-6 bg-white shadow p-6 rounded-lg"
    >
      <h2 className="text-xl font-semibold text-slate-800 mb-4">
        Add New Expense
      </h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full px-3 py-2 rounded mb-4"
      />

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border w-full px-3 py-2 rounded mb-4"
      />

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border w-full px-3 py-2 rounded mb-4"
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border w-full px-3 py-2 rounded mb-4"
      >
        <option>General</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
