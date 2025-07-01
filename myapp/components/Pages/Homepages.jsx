'use client'; 
import React from 'react';
import Header from '../common/Header';
import Link from 'next/link';

const Homepages = () => {
  const name = "sandy";

  const handleClick = () => {
    alert("Hello world!");
  };

  return (
    <div className="m-4 space-y-4">
      <Header username={name} />
      
      <Link href="/about" className="text-blue-600 underline">
        About
      </Link>

      <h1 className="text-2xl font-bold">Hi, {name}</h1>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600"
      >
        Click
      </button>
    </div>
  );
};

export default Homepages;
