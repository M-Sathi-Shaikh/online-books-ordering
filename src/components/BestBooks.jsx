import React from 'react'
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
    <div className="py-10">
      <div className='container'>
        {/* Header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className='text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Trending Books</p>
          <h1 className='text-3xl'>Best Books</h1>
          <p className='text-xl text-gray-400'>
            Discover the top-rated books loved by readers worldwide. From thrilling mysteries to heartwarming tales, these books are sure to captivate your imagination.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
          {bookData.map((book) => (
            <div
              data-aos="zoom-in"
              className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'
              key={book.id}
            >
              <div className='h-[100px]'>
                <img src={book.img} alt={book.title} className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md' />
              </div>
              <div className='p-4 text-center'>
                <div className='w-full flex items-center justify-center'>
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <h1 className='text-xl font-bold'>{book.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{book.description}</p>
                <button onClick={handleOrderPopup} className='bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary'>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestBooks;
