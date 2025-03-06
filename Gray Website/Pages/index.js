/**
 * GrayHomeLoans.com - Next.js Starter
 * This is a boilerplate Next.js project for an innovative home lending website.
 */

// 1️⃣ Install Next.js
default export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to Gray Home Loans</h1>
      <p className="mt-2 text-lg text-gray-700">Bringing innovation to home lending & technology.</p>
      <a href="/calculator" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Try our Loan Calculator</a>
    </div>
  );
}

// 2️⃣ Loan Calculator Page
export function LoanCalculator() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-3xl font-semibold">Mortgage Loan Calculator</h2>
      <p className="text-gray-600 mt-2">Estimate your monthly payments.</p>
      <input type="number" placeholder="Loan Amount ($)" className="mt-4 p-2 border rounded" />
      <input type="number" placeholder="Interest Rate (%)" className="mt-2 p-2 border rounded" />
      <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">Calculate</button>
    </div>
  );
}

// 3️⃣ Contact Page
export function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-semibold">Get in Touch</h2>
      <p className="text-gray-600 mt-2">Fill out the form to contact us.</p>
      <input type="text" placeholder="Your Name" className="mt-4 p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="mt-2 p-2 border rounded" />
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Submit</button>
    </div>
  );
}
