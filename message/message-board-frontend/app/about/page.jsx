'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main className="p-6 max-w-2xl mx-auto bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">About This Project</h1>

      <p>
        This is a simple message board built using:
      </p>

      <ul className="list-disc pl-5 mt-2">
        <li>Django REST API for backend</li>
        <li>MySQL as the database</li>
        <li>Next.js App Router for frontend</li>
        <li>Axios for API calls</li>
        <li>Tailwind CSS for styling</li>
      </ul>

      <div className="mt-6">
        <Link href="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            🏠 Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
