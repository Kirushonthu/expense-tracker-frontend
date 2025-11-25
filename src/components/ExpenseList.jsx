import React from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  // Helper to format date strings or Date objects safely
  const formatDate = (d) => {
    if (!d) return "";
    const dateObj = d instanceof Date ? d : new Date(d);
    if (isNaN(dateObj)) return d; // fallback to original value if invalid
    return dateObj.toLocaleDateString();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-3">All Expenses</h2>

      {expenses.length === 0 ? (
        <p className="text-slate-600">No expenses added yet.</p>
      ) : (
        <ul className="space-y-3">
          {expenses.map((exp) => (
            <li
              key={exp.id}
              className="bg-white shadow p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium text-indigo-600">
                  {exp.title}
                </p>
                <p className="text-slate-700 text-sm">
                  ₹{exp.amount} — {formatDate(exp.date)}
                </p>
              </div>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                onClick={() => onDelete && onDelete(exp.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
