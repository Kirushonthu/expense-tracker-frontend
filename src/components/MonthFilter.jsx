import React from "react";

const MonthFilter = ({ selectedMonth, onMonthChange }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 mt-4">
      <select
        value={selectedMonth}
        onChange={(e) => onMonthChange(e.target.value)}
        className="w-full bg-white border px-3 py-2 rounded-lg shadow-sm"
      >
        <option value="">All Months</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  );
};

export default MonthFilter;
