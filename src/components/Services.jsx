import React from "react";
import Button from "./Button";

const Services = (props) => {
  return (
    <div className="flex w-full sm:w-[500px] md:h-[360px] h-[280px] md:w-[630px] bg-primary m-1 lg:m-1 relative rounded-tl-3xl rounded-br-3xl">
      <div className="w-[51%]">
        <img
          src={props.Image}
          className="w-full h-[90%] rounded-tl-3xl rounded-br-3xl"
          alt="Service"
        />

      </div>
      <div className="w-[49%] p-2 md:p-3 flex flex-col relative ">
        <>
        <h3 className="font-medium md:text-lg text-sm  absolute top-2 left-4">
          {props.title}
        </h3>
        </>
        <div className="absolute top-9 p-1 ">
          <p className="md:text-sm text-xs ">{props.description}</p>
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
          <p className="md:text-sm text-xs font-semibold absolute bottom-5 right-8">
            {props.time} | {props.cost}
          </p>
        )}
                <div className="absolute bottom-4 left-2 ">
          {!props.time ? (
            <div className="">
              <a
              href="https://www.fresha.com/book-now/sepiyar-aesthetics-fl1if9ef/all-offer?id=1296763&pId=1231093"
              target="_blank" rel="noopener noreferrer"
               className="hover:bg-black hover:-translate-y-1
         md:w-[120px] w-[100px] md:text-sm text-xs duration-300 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-31 mt-1 px-3 py-1 rounded-2xl shadow-2xl">
                Book Now
              </a>
              <a href="http://localhost:3000/Treatments"><Button className="hover:bg-black hover:-translate-y-1 md:w-[120px] w-[100px] md:text-sm text-xs duration-300 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-31 mt-1 px-3 py-1 rounded-2xl shadow-2xl">
                Read more
              </Button></a>
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
