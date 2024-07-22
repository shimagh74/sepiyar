import React from "react";
import SliderReview from "../components/sliderReview";

const Reviews = () => {
  return (
    <>
      <div className="w-[80%] rounded-3xl justify-center my-4 m-auto overflow-hidden shadow-lg bg-primary ">
        <div className="px-6 py-4">
          <div className="text-5xl justify-center flex mb-8 m-auto p-2">
            Client Reviews
          </div>
          <p className="text-gray-700 text-base">
            At SEPIYAR AESTHETICS, client satisfaction is our top priority. We
            take immense pride in the positive reviews and feedback we receive.
            Our goal is to provide each client with a personalized experience
            that caters to their unique brow, lash, and hyper-realistic or
            ultra-natural permanent and semi-permanent makeup aspirations. We
            work diligently to ensure every treatment is performed with
            precision, care, and meticulous attention to detail, all made with
            love.
          </p>
        </div>
        <div className="flex justify-center duration-300 my-6 hover:-translate-y-1">
          <a href="https://www.fresha.com/book-now/sepiyar-aesthetics-fl1if9ef/all-offer?id=1296763&pId=1231093"
           target="_blank" rel="noopener noreferrer"
          className="bg-white text-black font-semibold py-2 px-6 rounded">
            BOOK NOW
          </a>
        </div>
      </div>

      <div className="text-2xl justify-center bg-primary flex mt-10 m-auto p-2">
      Google Reviews - Sepi Yar
          </div>
      <SliderReview />
    </>
  );
};

export default Reviews;
