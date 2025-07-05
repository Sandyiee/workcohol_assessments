'use client';

import { useState, useEffect } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function BookReviewForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      title,author,rating,review,createdAt: new Date()
    };

    try {
      const docRef = await addDoc(collection(db, 'bookReviews'), newReview);
      console.log("Added:", docRef.id);
      setReviews([...reviews, newReview]);
      setTitle('');
      setAuthor('');
      setRating('');
      setReview('');
    } catch (err) {
      console.error("Error adding document:", err);
    }
  };

  const fetchReviews = async () => {
    const querySnapshot = await getDocs(collection(db, 'bookReviews'));
    const data = querySnapshot.docs.map(doc => doc.data());
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700"> Book Review App</h1>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
          ✅ Add Review
        </button>
      </form>

      <div className="space-y-4">
        {reviews.map((r, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p><strong> Title:</strong> {r.title}</p>
            <p><strong> Author:</strong> {r.author}</p>
            <p><strong> Rating:</strong> {r.rating}</p>
            <p><strong> Review:</strong> {r.review}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
