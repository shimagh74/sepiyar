import React,{ useState } from "react";
import { servicesPrice } from "../data/ServicesData";

const ServiceCard = ({ title, items }) => (
    <div className="border p-2 m-1 w-full lg:w-[19%]">
      <h3 className="text-xl font-semibold border-b-2 border-primary text-center pb-2 mb-2">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex text-[13px] justify-between py-1 leading-7">
            <span>{item.name}</span>
            <span className="font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const ServicesPriceCard = () => (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        {servicesPrice.map((service, index) => (
          <ServiceCard key={index} title={service.title} items={service.items} />
        ))}
      </div>
      <div className="flex justify-center duration-300 my-6 hover:-translate-y-1">
        <button className="bg-black text-white py-2 px-6 rounded">BOOK NOW</button>
      </div>
    </div>
  );
  
  export default ServicesPriceCard;