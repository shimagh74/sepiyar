import React, { useState } from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import emailjs from "emailjs-com";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };

    emailjs
      .send(
        "service_rt7yacd",
        "template_ywnqkln",
        templateParams,
        "nL_luaqTR2vB9hfhl"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 md:space-y-0 space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl text-black overflow-hidden">
        <div className="flex flex-col space-y-10">
          <div>
            <h1 className="text-4xl mb-2 ">Contact Us</h1>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center text-lg leading-6">
              <BsTelephone className="text-xl" />
              <span>AU: +61 488 103 982</span>
            </div>
            <div className="inline-flex space-x-2 items-center text-lg  leading-6">
              <TfiEmail className="text-xl" />
              <span>Info@sepiyar.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center  leading-6">
              <TfiLocationPin className="text-2xl" />
              <span>Cheltenham, Melbourne, VIC</span>
            </div>

            <div className="flex items-center text-3xl">
              <a
                href="/"
                className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-primary text-black mx-1.5 text-xl hover:translate-y-1
        duration-300 "
              >
                <FaFacebookSquare />
              </a>
              <a
                href="/"
                className="p-2  inline-flex items-center
        rounded-full bg-primary text-black mx-1.5 text-xl hover:translate-y-1
        duration-300"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative bg-primary rounded-xl shadow-lg p-4 text-gray-600 md:w-[28rem]">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <div>
                <label htmlFor="name" className="text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Your name"
                  className="border border-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:border-red-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email Address"
                  className="border border-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:border-red-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Phone Number"
                  className="border border-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:border-red-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  rows={4}
                  placeholder="Type your message here..."
                  className="border border-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:border-red-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="hover:bg-black delay-75 hover:text-white bg-[#A18168] border-[#A18168] border text-white w-32 mt-10 px-2 py-1 rounded-md shadow-2xl"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
