'use client';

import { useEffect, useState } from 'react';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';

export default function HomePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get('clients/');
        onAuthStateChanged(auth, (firebaseUser) => {
          if (firebaseUser) {
            setUser(firebaseUser);
          } else {
            setUser(null);
          }
        });
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken(true);
      console.log('Firebase ID token:', token);

      await api.post('verify-token/', { token }, { withCredentials: true });
      setUser(result.user);
    } catch (error) {
      console.error('Google login failed:', error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    document.cookie = 'access_token=; Max-Age=0; path=/;';
    setUser(null);
  };

  const NavButton = ({ label, path }) => (
    <button
      onClick={() =>
        user ? router.push(path) : alert('Please login with Google to access this page.')
      }
      className={`${
        user ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
      } text-white px-4 py-2 rounded-lg transition`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔒 Top navigation with sign-in/out button */}
      <div className="flex justify-between items-center p-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-800">Project Tracker 🔐</h1>

        <button
          onClick={user ? handleLogout : handleGoogleLogin}
          className={`${
            user ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          } text-white px-4 py-2 rounded shadow`}
        >
          {user ? 'Logout' : 'Sign in with Google'}
        </button>
      </div>

      {/* 🧭 Protected Routes Navbar */}
      <div className="flex justify-center mt-10 space-x-4 flex-wrap">
        <NavButton label="Client" path="/client" />
        <NavButton label="Project" path="/project" />
        <NavButton label="Manager" path="/manager" />
        <NavButton label="Tech Team" path="/techteam" />
        <NavButton label="Feedback" path="/feedback" />
        <NavButton label="About" path="/about" />
      </div>
    </div>
  );
}
