import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddExpenseForm from "./components/AddExpenseForm";
import SummaryCard from "./components/SummaryCard";
import ExpenseList from "./components/ExpenseList";
import MonthFilter from "./components/MonthFilter";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("expenses");
    if (stored) {
      setExpenses(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add expense
  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  // Delete expense
  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  // Month filter logic
  const filteredExpenses = selectedMonth
    ? expenses.filter((exp) => exp.date.slice(5, 7) === selectedMonth)
    : expenses;

  return (
    <div className="bg-slate-50 min-h-screen pb-10">
      <Header />

      <AddExpenseForm onAddExpense={handleAddExpense} />

      <SummaryCard expenses={filteredExpenses} />

      <MonthFilter
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
      />

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
};

export default App;
