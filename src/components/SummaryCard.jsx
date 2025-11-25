import React from "react";

const SummaryCard = ({ expenses }) => {
  const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const totalCount = expenses.length;

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-indigo-600 text-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Expense Summary</h2>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-indigo-200">Total Expenses</p>
            <p className="text-2xl font-bold">{totalCount}</p>
          </div>

          <div>
            <p className="text-sm text-indigo-200">Total Spent</p>
            <p className="text-2xl font-bold">₹{totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
