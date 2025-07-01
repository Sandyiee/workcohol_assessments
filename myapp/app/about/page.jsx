'use client';
import React from 'react';
import Homepages from '@/components/Pages/Homepages';
import Link from 'next/link';
import { Home } from 'lucide-react'; // ✅ import the Home icon

const Page = () => {
  return (
    <div className="p-6 space-y-4">
      {/* 🔗 Home Icon as Link */}
      <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
        <Home className="mr-2" /> Home
      </Link>

      {/* 📄 Page Content */}
      <div className="text-2xl font-bold">About Us</div>
      <p>This is the about page content.</p>
    </div>
  );
};

export default Page;
