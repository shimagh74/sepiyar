import React from "react";
import profileImage from "../assets/img/about.JPG"; 

const About = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-5xl justify-center flex mb-8 m-auto  p-2">About</h1>
      <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-primary via-white to-primary p-8 rounded-xl shadow-lg">
        <div className="lg:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <img
            src={profileImage}
            alt=" Sepi  "
            className="w-96 h-96 object-cover rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-gray-900"> Sepi Yar</h2>
          <p className="text-lg font-semibold mb-4 text-gray-500">
            COSMETIC TATTOO ARTIST | INTERNATIONAL TRAINER
          </p>
          <p className="text-base leading-7 mb-4 text-gray-700">
            Meet SEPIYAR, a friendly and exceptionally talented beautician whose
            unique background and passion for beauty set her apart in the
            industry. Inspired by her mother’s deep roots in the beauty world,
            Sepi grew up surrounded by the transformative power of aesthetics,
            sparking a lifelong dedication to helping others feel beautiful and
            confident. As an award-winning painter, Sepi brings a keen eye for
            detail, color, and composition to every cosmetic tattoo she creates.{" "}
          </p>
          <p className="text-base leading-7 text-gray-700">
            Her artistic journey has honed her ability to design bespoke
            treatments that are not only visually stunning but also perfectly
            tailored to enhance each client’s unique facial features. Whether
            you’re looking for subtle enhancements or bold statements, Sepi
            ensures that every piece is a personalized work of art.
          </p>
        </div>
      </div>
      <div className="mt-16 text-base leading-7 text-gray-700 space-y-4">
        <p>
        Adding to her artistic prowess, Sepi holds a master’s degree in developmental biology and has
published three ISI articles in the field. This scientific expertise provides her with an in-depth
understanding of skin physiology, healing processes, and the intricate relationship between skin
structure and pigmentation. This knowledge allows her to approach each tattoo with precision,
ensuring optimal results that complement the natural beauty of your skin.
        </p>
        <p>
        SEPIYAR is renowned for her cosmetic tattoos and beauty treatments, which are celebrated for
looking incredibly natural! Her ability to seamlessly blend pigments to match skin tones and mimic
natural features ensures that the results are subtle, and realistic, and enhances her clients’ beauty
without appearing artificial.

        </p>
        <p>
        Sepi is a distinguished educator in cosmetic tattoo and beauty, renowned for her international
certifications and exceptional teaching talent. She imparts not only technical expertise but also a
deep understanding of aesthetics and client relations to her students. Sepi’s dedication to excellence
and her ability to inspire make her a leader in shaping future industry professionals.
        </p>
        <p>
        What truly sets Sepi apart is her unwavering commitment to your safety and well-being. She is
certified in maintaining infection prevention for skin penetration treatments, known as HLTINF005.
This certification ensures that she adheres to rigorous Safe and Effective Practice of Infection Control
(SEPI) protocols, guaranteeing the highest standards of hygiene and safety during every cosmetic

tattoo and all beauty/skin procedures. You can rest assured that your skin and health are
meticulously protected throughout the entire process.
        </p>
        <p>Combining artistic talent, scientific knowledge, and top-notch safety practices, Sepi creates
beautiful, personalized cosmetic tattoos that celebrate and enhance your natural beauty. Her
friendly demeanor and professional approach make every client feel comfortable and confident in
her capable hands. With Sepi, you’re not just getting a cosmetic tattoo—you’re receiving a
masterpiece crafted with care, precision, and a genuine passion for making you look and feel your
best.</p>
      </div>
    </div>
  );
};

export default About;
