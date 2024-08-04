import React from "react";
import Button from "./Button";

const Services = (props) => {
  return (
    <div className="flex w-full sm:w-[500px] md:h-[360px] h-[340px] md:w-[630px] bg-primary m-1 lg:m-1 relative rounded-tl-3xl rounded-br-3xl">
      <div className="w-[51%]">
        <img
          src={props.Image}
          className="w-full h-[85%] rounded-tl-3xl rounded-br-3xl"
          alt="Service"
        />

      </div>
      <div className="w-[49%] sm:p-2 md:p-3 flex flex-col relative ">
       
        <h3 className="font-semibold md:text-lg text-sm  absolute top-2 left-2">
          {props.title}
        </h3>
        <div className="absolute md:top-9 top-5">
          <p className="text-sm p-2">{props.description}</p>
          {props.subtitle && props.subtitle.length > 0 && (
            <ul className="md:text-sm text-xs">
              {props.subtitle.map((item, index) => (
                <li key={index} className="pt-1">
                  - {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <>
        {props.time && props.time.length > 0 && (
          <p className="md:text-sm text-xs font-semibold absolute md:bottom-5 bottom-2 right-8">
            {props.time} | {props.cost}
          </p>
        )}
                <div className="absolute bottom-4 left-4 ">
          {!props.time ? (
            <div className="">
              <a
              href="https://www.fresha.com/book-now/sepiyar-aesthetics-fl1if9ef/all-offer?id=1296763&pId=1231093"
              target="_blank" rel="noopener noreferrer"
               className="hover:bg-black hover:-translate-y-1
         md:w-[120px] w-[100px] md:text-sm text-xs duration-300 m-2 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-31 mt-1 px-4 py-1 rounded-2xl shadow-2xl">
                Book Now
              </a>
              <a href="https://www.sepiyar.com/Treatments"
              target="_blank" rel="noopener noreferrer"
               className="hover:bg-black hover:-translate-y-1 md:w-[120px] w-[100px] md:text-sm text-xs duration-300 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-31 mt-1 px-4 py-1 rounded-2xl shadow-2xl">
                Read more
             </a>
            </div>
          ) : (
            <a
            href="https://www.fresha.com/book-now/sepiyar-aesthetics-fl1if9ef/all-offer?id=1296763&pId=1231093"
           target="_blank" rel="noopener noreferrer"
            className="hover:bg-black hover:-translate-y-1 md:w-[120px] w-[100px] md:text-sm text-xs duration-300 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-31 mt-1 px-3 py-1 rounded-2xl shadow-2xl">
              Book Now
            </a>
          )}
        </div>
        </>
      </div>
    </div>
  );
};

export default Services;
