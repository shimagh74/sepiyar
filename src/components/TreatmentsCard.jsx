import React from "react";

const TreatmentsCard = (props) => {
  return (
    <div className="flex  w-[390px] flex-col md:flex-row md:h-[360px] h-[590px] md:w-[630px] bg-primary m-1 lg:m-1 md:relative rounded-tl-3xl rounded-br-3xl">
      <div className="md:w-[51%] w-[80%] flex items-center justify-center m-auto  md:p-0  md:h-[85%] h-[57%]">
        <img
          src={props.Image}
          className="md:w-full h-full rounded-tl-3xl rounded-br-3xl"
          alt="Service"
        />
      </div>
      <div className="md:w-[49%] w-full md:h-full h-[48%] p-2  md:p-3 flex flex-col relative ">
        <h3 className="font-medium md:text-lg absolute md:top-2 left-4">
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

        {/* <p className="text-sm  font-semibold absolute bottom-4  right-8">
          {props.time} | {props.cost}
        </p> */}
        <>
        {props.time && props.time.length > 0 ? (
          <p className="md:text-sm text-xs font-semibold absolute md:bottom-5 bottom-2 right-8">
            {props.time} | {props.cost}
          </p>
        ) : <></>}
        <div className="absolute md:bottom-4 bottom-2  md:left-8 left-18">
          {/* <a
            href="https://www.fresha.com/book-now/sepiyar-aesthetics-fl1if9ef/all-offer?id=1296763&pId=1231093"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-black hover:-translate-y-1 md:w-[120px] w-[100px] text-sm t duration-300 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-31 mt-1 px-6 py-1 rounded-2xl shadow-2xl"
          >
            Book Now
          </a> */}
           {!props.time ? (
            <div className="">
              <a
              href="https://www.fresha.com/book-now/sepiyar-aesthetics-fl1if9ef/all-offer?id=1296763&pId=1231093"
              target="_blank" rel="noopener noreferrer"
               className="hover:bg-black hover:-translate-y-1 md:w-[120px] w-[100px] md:text-sm text-xs duration-300 m-2 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-31 mt-1 px-4 py-1 rounded-2xl shadow-2xl">
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
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-black hover:-translate-y-1 md:w-[120px] w-[100px] text-sm t duration-300 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-31 mt-1 px-6 py-1 rounded-2xl shadow-2xl"
          >
            Book Now
          </a>
          )}
        </div>
        </>
      </div>
    </div>
  );
};

export default TreatmentsCard;
