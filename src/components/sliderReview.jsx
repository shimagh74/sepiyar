import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { IoIosStar } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderReview = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      const url = '/mockReviews.json';

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.reviews) {
        setReviews(data.reviews);
      } else {
        throw new Error('No reviews found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="container mx-auto p-4">
      {error && <p>Error: {error}</p>}
      {reviews.length > 0 ? (
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center mr-3" style={{ backgroundColor: review.avatar ? 'transparent' : getRandomColor() }}>
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xl font-bold text-white">{review.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="mb-4 h-20 overflow-y-scroll">
                  <p>{review.review}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, index) => (
                    <IoIosStar key={index} className="w-4 h-4 text-yellow-500 mr-1" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading reviews...</p>
      )}
    </div>
  );
};

export default SliderReview;
