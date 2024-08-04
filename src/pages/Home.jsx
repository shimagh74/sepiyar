import React from "react";
import banner2 from "../assets/img/mainSlider/banner2.JPG";
import banner3 from "../assets/img/mainSlider/banner3.JPEG";
import banner4 from "../assets/img/mainSlider/banner4.JPEG";
import banner5 from "../assets/img/mainSlider/banner5.JPEG";
import about from "../assets/img/about.JPEG";
import Services from "../components/Services";
import { ServicesData } from "../data/ServicesData";
import Slider from "../components/Slider";
import Gallery from "../components/gallery";
import SliderReview from "../components/sliderReview";
import { IoMdHeartEmpty } from "react-icons/io";
import TreatmentsCard from "../components/TreatmentsCard";


function Home() {
  let slides = [banner5, banner2, banner4, banner3];

  return (
    <>
      <div className="w-full m-auto">
        <Slider slides={slides} />
      </div>
      <div className=" bg-secondary flex items-center justify-center lg:p-8 p-4">
      <p className="md:text-3xl text-center lg:text-5xl  sm:text-2xl text-xl  m-auto great-vibes-regular"> 
         The art of creating hyper-realistic, ultra-natural cosmetic tattoos
      </p>
      {/* <IoMdHeartEmpty /> */}
      </div>   
      <div className="md:my-8 my-4 lg:px-10  flex flex-col-reverse md:flex-row h-auto  md:h-[930px] lg:h-[800px]">
        <div className="md:w-1/2 w-full px-4 md:px-8 flex flex-col justify-center">
          <p className="font-semibold text-sm">INTRODUCTION</p>
          <h2 className="font-extrabold md:text-4xl lg:text-5xl text-xl py-4">
            About Sepi Yar
          </h2>
          <p className="text-base leading-8 text-gray-800 mb-4 lora-font">
            A friendly and talented beautician whose unique background blends
            artistic excellence, teaching, and scientific expertise, Sepi has a
            lifelong passion for helping others feel beautiful. As an award-
            winning painter, Sepi creates bespoke Cosmetic Tattoos known for
            their natural look and perfect blend with each client’s features.
            She holds a master’s degree in developmental biology and has
            published three ISI articles, providing her with a deep
            understanding of skin physiology and healing processes. With lots of
            international certificates in the field of beauty and skin and a
            valuable Certification in infection prevention for skin penetration
            treatments (HLTINF005), Sepi ensures the highest standards of
            hygiene and safety. She is also an international educator with
            numerous students benefiting from her expertise. Combining artistic
            talent, scientific knowledge, and a commitment to safety, Sepi
            delivers stunning, natural-looking treatments that enhance your
            beauty with care and precision.
          </p>
        </div>
        <div className="md:w-1/2 w-full md:px-5 flex justify-center mb-5 md:mb-0">
          <img
            src={about}
            className="object-cover w-full h-auto md:h-[750px]"
            alt="banner"
          />
        </div>
      </div>
        <h2 className="text-5xl justify-center flex mb-8 m-auto bg-[#EAD4BD] p-2">
          Treatments
        </h2>
        <div className="flex flex-wrap gap-4 justify-center p-3 md:p-0">
          {ServicesData.map((service) => (
            <TreatmentsCard
              key={service.id}
              Image={service.Image}
              title={service.title}
              description={service.description}
              subtitle={service.subtitle}
            />
          ))}
        </div>
   
        <h2 className="text-5xl justify-center flex mt-12 m-auto bg-[#EAD4BD] p-2">
          Follow Us
        </h2>
        <h3 className="text-xl my-4 text-center "><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sepiyar.aesthetics/" className="cursor-pointer">@sepiyar.aesthetics</a></h3>
        <Gallery />
        <h2 className="md:text-5xl text-3xl justify-center flex mt-12 m-auto bg-[#EAD4BD] p-2">
        Our Customers Love Us
        </h2>
        <div className="overflow-x-hidden h-[301px]">
        <SliderReview />
        </div>
       

    </>
  );
}

export default Home;
