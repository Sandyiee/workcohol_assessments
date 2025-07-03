// // app/display-board/page.jsx
// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// export default function DisplayBoard() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/messages/')
//       .then(res => setMessages(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const res = await axios.post('http://127.0.0.1:8000/api/messages/', {
//         content: newMessage
//       });
//       setMessages([...messages, res.data]);
//       setNewMessage('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <main className="p-4 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">📝 Message Board</h1>

//       <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={e => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//           className="flex-1 border rounded px-3 py-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
//       </form>

//       <ul className="space-y-2">
//         {messages.map((msg) => (
//           <li key={msg.id} className="bg-green-500 p-3 rounded shadow">
//             {msg.content}
//           </li>
//         ))}
//       </ul>
//       <div className="mt-6">
//         <Link href="/">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             🏠 Back to Home
//           </button>
//         </Link>
//       </div>
//     </main>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function DisplayBoard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push('/'); // redirect if not logged in
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    if (user) {
      axios.get('http://127.0.0.1:8000/api/messages/')
        .then(res => setMessages(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/messages/', {
        content: newMessage
      });
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return null; // or show loader

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">📝 Message Board</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>

      <ul className="space-y-2">
        {messages.map((msg) => (
          <li key={msg.id} className="bg-green-500 p-3 rounded shadow">
            {msg.content}
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <Link href="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            🏠 Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
