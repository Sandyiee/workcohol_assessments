// 'use client';

// import { useEffect, useState } from 'react';
// import { auth, provider, signInWithPopup, signOut } from '../firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import Link from 'next/link';

// export default function Home() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogin = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => setUser(result.user))
//       .catch((error) => console.error('Login error:', error));
//   };

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => setUser(null))
//       .catch((error) => console.error('Logout error:', error));
//   };

//   return (
//     <main className="p-8 text-center">
//       <h1 className="text-3xl font-bold text-blue-700 mb-4">👋 Welcome to Message Board</h1>

//       {user ? (
//         <>
//           <p className="mb-6 text-green-600">Hello, {user.displayName}</p>

//           <div className="flex justify-center gap-4 mb-4 flex-wrap">
//             <Link href="/display-board">
//               <button className="bg-green-600 text-white px-4 py-2 rounded">
//                 Go to Board
//               </button>
//             </Link>
//             <Link href="/about">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                 About
//               </button>
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Logout
//             </button>
//           </div>
//         </>
//       ) : (
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Sign in with Google
//         </button>
//       )}
//     </main>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error('Login error:', error));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error('Logout error:', error));
  };

  const handleBoardAccess = () => {
    if (user) {
      router.push('/display-board');
    } else {
      alert('⚠️ Please sign in to access the Message Board');
    }
  };

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">👋 Welcome to Message Board</h1>

      {user && (
        <p className="mb-4 text-green-600">Hello, {user.displayName}</p>
      )}

      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={handleBoardAccess}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Go to Board
        </button>

        <Link href="/about">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            About
          </button>
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </main>
  );
}
