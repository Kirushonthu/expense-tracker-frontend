import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-50 py-6 shadow-md mb-6">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">
          Expense Tracker
        </h1>
        <p className="text-slate-700 text-sm md:text-base mt-1">
          Track your expenses, view totals, and filter by month.
        </p>
      </div>
    </header>
  );
};

export default Header;
