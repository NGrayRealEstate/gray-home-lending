"use client";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-semibold">Get in Touch</h2>
      <p className="text-gray-600 mt-2">Fill out the form to contact us.</p>
      <input type="text" placeholder="Your Name" className="mt-4 p-2 border rounded w-64" />
      <input type="email" placeholder="Your Email" className="mt-2 p-2 border rounded w-64" />
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
    </main>
  );
}