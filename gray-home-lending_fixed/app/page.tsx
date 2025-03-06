"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to Gray Home Lending</h1>
      <p className="mt-2 text-lg text-gray-700 text-center">
        Innovative home lending solutions with cutting-edge technology.
      </p>
      <a
        href="/calculator"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Try our Loan Calculator
      </a>
    </main>
  );
}