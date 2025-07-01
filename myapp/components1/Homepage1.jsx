'use client';
import React, { useState, useEffect } from 'react';

const HomePage1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [count, setCount] = useState(0);             

  useEffect(() => {
    console.log(`User is ${isLoggedIn ? 'logged in' : 'logged out'}`);
  }, [isLoggedIn]);


  const handleLoginLogout = () => {
    setIsLoggedIn((prev) => !prev);
  };


  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleIncrement1 = () => {
    setCount((prev) => prev + 10);
  };

  return (
    <div className="p-6 flex flex-col items-center gap-8">
      
      <div className="flex justify-end w-full px-6">
        <div className="flex gap-6 items-center">
          <button
            onClick={handleLoginLogout}
            className={`px-4 py-2 rounded text-white ${
              isLoggedIn ? 'bg-red-500' : 'bg-green-600 end-2.5' 
            }`}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-green-500 text-white text-2xl px-6 py-2 rounded">
          {count}
        </div>

        <button
          onClick={handleIncrement}
          className="bg-green-700 text-white text-xl px-4 py-2 rounded hover:bg-green-800"
        >
          +1
        </button>

        <button
          onClick={handleIncrement1}
          className="bg-blue-600 text-white text-xl px-4 py-2 rounded hover:bg-blue-700"
        >
          +10
        </button>
      </div>
    </div>
  );
};

export default HomePage1;
