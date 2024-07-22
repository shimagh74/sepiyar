import React from "react";
import { BrowsData, BrowsLashesData, EyesData, LipsData } from "../data/ServicesData";
import Services from "../components/Services";
import ServicesPriceCard from "../components/servicesPriceCard";

const treatmentItems = [
  { title: "Brows & Lashes", data: BrowsLashesData },
  { title: "Brows", data: BrowsData },
  { title: "Eyes", data: EyesData },
  { title: "Lips", data: LipsData },
];

const Treatments = () => {
  return (
    <>
      <h2 className="text-5xl justify-center flex my-8 m-auto p-2">Treatments</h2>
      <ServicesPriceCard/>
      {treatmentItems.map((item, index) => (
        <div key={index} className="mb-8">
          <h4 className="text-2xl justify-center flex mb-8 m-auto bg-secondary p-2">
            {item.title}
          </h4>
          <div className="flex flex-wrap gap-1 justify-center">
            {item.data.map((x) => (
              <Services
                key={x.id}
                Image={x.Image}
                title={x.title}
                cost={x.cost}
                time={x.time}
                description={x.description}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Treatments;
