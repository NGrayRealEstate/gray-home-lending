"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [monthly, setMonthly] = useState(0);

  const calculateLoan = () => {
    if (amount && rate) {
      const monthlyPayment = (amount * (rate / 100)) / 12;
      setMonthly(monthlyPayment.toFixed(2));
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h2 className="text-3xl font-semibold">Mortgage Loan Calculator</h2>
      <p className="text-gray-600 mt-2">Estimate your monthly payments.</p>
      <input
        type="number"
        placeholder="Loan Amount ($)"
        className="mt-4 p-2 border rounded w-64"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        className="mt-2 p-2 border rounded w-64"
        onChange={(e) => setRate(e.target.value)}
      />
      <button
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        onClick={calculateLoan}
      >
        Calculate
      </button>
      {monthly > 0 && (
        <p className="mt-4 text-xl font-semibold text-gray-800">
          Estimated Monthly Payment: ${monthly}
        </p>
      )}
    </main>
  );
}