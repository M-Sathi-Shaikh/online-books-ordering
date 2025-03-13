import React from 'react';
import Img1 from "../assets/books/book1.jpg";
import Img2 from "../assets/books/book2.jpg";
import Img3 from "../assets/books/book3.jpg";
import { FaStar } from 'react-icons/fa';

const bookData = [
  {
    id: 1,
    img: Img2,
    title: "His Life",
    description: "An inspiring biography that delves deep into the struggles and triumphs of an extraordinary individual, revealing lessons of perseverance and resilience."
  },
  {
    id: 2,
    img: Img1,
    title: "Who is There",
    description: "A gripping mystery novel that will keep you on the edge of your seat, as secrets unravel and hidden truths come to light."
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    description: "A heartwarming tale of adventure and self-discovery, following a young boy's journey through unknown lands in search of his true destiny."
  },
];

const BestBooks = ({ handleOrderPopup }) => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-10">
          <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold dark:text-white">Best Books</h1>
          <p className="text-gray-500 dark:text-gray-300 max-w-lg mx-auto text-sm">
            Discover the top-rated books loved by readers worldwide. From thrilling mysteries to heartwarming tales, these books are sure to captivate your imagination.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bookData.map((book) => (
            <div
              key={book.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white shadow-lg transition-transform duration-300 group p-6 text-center"
            >
              <div className="h-32 flex justify-center">
                <img
                  src={book.img}
                  alt={book.title}
                  className="h-25 w-auto object-contain transition-transform duration-300 transform group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </div>
                <h2 className="text-lg font-bold mt-2">{book.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2 group-hover:text-white">
                  {book.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="mt-4 bg-primary text-white px-5 py-2 rounded-full hover:scale-105 transition duration-200 group-hover:bg-white group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestBooks;
