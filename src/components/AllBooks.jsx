import React from 'react'
import Img1 from "../assets/books/book1.jpg";
import Img2 from "../assets/books/book2.jpg";
import Img3 from "../assets/books/book3.jpg";
import { FaStar } from 'react-icons/fa';


const booksData = [
  {
    id: 1,
    img: Img2,
    title: "His Life",
    rating: "4.1",
    author: "John",
    description: "An inspiring journey of a man who defied all odds to achieve greatness. A must-read for those who seek motivation and wisdom."
  },
  {
    id: 2,
    img: Img1,
    title: "Who is There",
    author: "John",
    rating: "4.1",
    description: "A thrilling mystery novel that keeps you on the edge of your seat. Follow the protagonist as they uncover hidden secrets."
  },
  {
    id: 3,
    img: Img3,
    rating: "4.1",
    title: "Lost Boy",
    author: "John",
    description: "A gripping tale of survival and resilience, following a young boy lost in the wilderness, fighting against the odds to find his way back home."
  },
  {
    id: 4,
    img: Img2,
    rating: "4.1",
    title: "His Life",
    author: "John",
    description: "An inspiring journey of a man who defied all odds to achieve greatness. A must-read for those who seek motivation and wisdom."
  },
  {
    id: 5,
    img: Img1,
    rating: "4.1",
    title: "Who is There",
    author: "John",
    description: "A thrilling mystery novel that keeps you on the edge of your seat. Follow the protagonist as they uncover hidden secrets."
  },
  {
    id: 6,
    img: Img3,
    rating: "4.1",
    title: "Lost Boy",
    author: "John",
    description: "A gripping tale of survival and resilience, following a young boy lost in the wilderness, fighting against the odds to find his way back home."
  },
];

const AllBooks = () => {
  return (
    <div className='py-10'>
      <div className='container placeholder-gray-100'>
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Trending Books</p>
          <h1 className='text-3xl'>Top Books</h1>
          <p className='text-xl text-gray-400'>
            Discover our best-selling books, carefully curated for readers of all genres. From thrilling mysteries to inspiring life stories, there's something for everyone.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {booksData.map((data) => (
              <div key={data.id} className='space-y-3'>
                <img src={data.img} alt={data.title} className='h-[210px] w-[150px] object-cover rounded' />
                <div>
                  <h2 className='font-semibold'>{data.title}</h2>
                  <p className='text-sm text-gray-700 dark:text-gray-400'>{data.author}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-500' />
                    <span>{data.rating}</span>
                  </div>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center '>
            <button className='text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full'>View All Books</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllBooks;
