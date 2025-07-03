
// components/Navbar.jsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6 items-center">
      <Link href="/" className="text-2xl hover:text-yellow-300">🏠</Link>
      <Link href="/" className="hover:text-yellow-300">Home</Link>
      <Link href="/about" className="hover:text-yellow-300">About</Link>
      <Link href="/display-board" className="hover:text-yellow-300">Display Board</Link>
    </nav>
  );
}
