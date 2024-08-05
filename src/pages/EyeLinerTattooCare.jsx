import React from "react";
import photoUrl from "../assets/img/prepost/eyeliner.JPEG";
import {
  cleaningEyelinerInstructions,
  pleaseNoteEyeliner,
  aftercareEyelinerInstructions,
  eyelinerTattooPreCare,
  eyelinerlongTermCare,
} from "../data/preCareInstructions";

const skinSigns = [
  "Minimal swelling",
  "Redness",
  "Flaking",
  "Tenderness",
  "Dryness and itching",
];
const EyeLinerTattooCare = () => {
  return (
    <>
      <h1 className="md:text-5xl text-3xl justify-center flex my-8 m-auto p-2">
        EyeLiner Tattoo Care
      </h1>

      <div className="flex flex-col-reverse md:mx-12 my-8 lg:flex-row flex-wrap items-start">
        <div className="w-full lg:w-3/5 pr-4 my-8 lg:mb-0">
          <div className="mb-6 p-8 ">
            <h2 className="md:text-3xl text-xl font-semibold mb-8 text-black">
              Eyeliner Tattoo Pre + Post Care
            </h2>
            <p className="text-base leading-loose lora-font text-gray-800 ">
              It is strongly advised to adhere to SEPIYAR's Pre & Post Care
              instructions to optimize the outcome and durability of your
              tattoo. Please note, that these guidelines serve as a general
              framework. Results cannot be guaranteed as individual skin
              responses vary in healing duration and the number of sessions
              required for color retention and desired outcomes. It is crucial
              to provide proper care for your brows during the healing process
              and beyond.
            </p>
            <p className="text-base leading-loose text-gray-800 ">
              Antihistamines such as Benadryl, taken before the procedure, may
              reduce swelling and promote relaxation. Benadryl can also help
              control excessive tear production during eyeliner procedures.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 p-4 md:p-0 md:pl-4 md:my-8 lg:mb-0">
          <img
            src={photoUrl}
            alt="Skincare"
            className="rounded-lg shadow-lg w-[600px] h-[400px] object-cover mx-auto lg:mx-0"
          />
        </div>
      </div>

      <div className=" bg-gradient-to-r from-primary via-white to-primary md:mx-12 p-12 mt-8">
        <div className="bg-white p-8 shadow-lg">
          <div className="flex flex-col-reverse lg:flex-row flex-wrap items-start">
            <div className="w-full pr-4 mb-8 lg:mb-0">
              <div className="mb-6">
                <h2 className="text-4xl font-semibold mb-4 text-black">
                  Eyeliner Tattoo Pre-Care
                </h2>
                <ul className="list-disc list-inside leading-loose">
                  {eyelinerTattooPreCare.map((instruction, index) => (
                    <li key={index} className="mb-2">
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 p-6 md:mx-12  mx-4">
        <h2 className="my-4 text-4xl font-semibold text-black">
          Eyeliner Tattoo Post-Care
        </h2>
        <h3 className="text-xl my-4 text-gray-800">
          WHAT TO EXPECT IMMEDIATELY AFTER THE PROCEDURE?
        </h3>
        <p className="text-base leading-7 text-gray-800 mb-4">
          Swelling and redness are typical immediately after the procedure due
          to the delicate skin in this area, resembling the aftermath of crying.
          Itching can also be expected. Healing time varies individually.
          Swelling typically diminishes within a few hours; placing chilled
          spoons on the eyelids can expedite this process. Scabs usually take
          about 4-5 days to naturally shed. The true color of your eyeliner
          tattoo may not fully reveal itself until around the 4-6 week mark.
        </p>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          On the day of your appointment:
        </h4>
        <p className="text-base leading-7 text-gray-800 mb-4">
          After the procedure, use freshly washed hands to gently blot the area
          with clean tissue or paper towel to absorb excess lymph fluid. Repeat
          this hourly throughout the day until oozing stops. This helps prevent
          fluid buildup and reduces the chance of scabbing.{" "}
          <span className="capitalize font-medium">
            **Do not apply ointment!**
          </span>
        </p>
        <p className="text-base leading-7 text-gray-800 mb-4">
          Your eyes may range from slightly puffy to swollen, with heavy lids.
          They may also be light-sensitive and possibly bloodshot. Sleeping in a
          slightly elevated position can help reduce residual swelling.
        </p>
        <p className="text-base leading-7 text-gray-800 mb-4">
          Once you leave, ice packs can be applied for 10 to 15 minutes each
          hour during the first 4-8 hours to minimize swelling and enhance
          comfort. If there's lingering swelling the next day, you can apply ice
          packs again. However, ice is no longer beneficial after the initial 24
          hours.
        </p>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          From Days 1 to 7:
        </h4>
        <p className="text-base leading-7 text-gray-800 mb-4">
          The treated area may experience common symptoms lasting from 1 to 10
          days after the procedure:
        </p>
        <ul className="list-disc list-inside leading-loose">
          {skinSigns.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ul>
        <h4 className="text-xl font-semibold mb-2 text-gray-800 leading-loose">
          From Day 2 to 7:
        </h4>
        <ul className="list-disc list-inside mb-6">
          {cleaningEyelinerInstructions.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ul>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">Note:</h4>
        <p className="text-base leading-7 text-gray-800 mb-4">
          - Healing typically takes 5 to 7 days.
        </p>
        <p className="text-base leading-7 text-gray-800 mb-4">
          - When showering, ensure you tilt your head backward to prevent
          shampoo and conditioner from reaching the treated areas. You may apply
          the provided ointment or Aquaphor to cover your eyeliner. Avoid facing
          the shower head due to water pressure. Dry healing is essential—no
          water contact for at least 10 days, including sweating. Use oil-free
          wipes for facial cleansing, avoiding the eye area
        </p>
        <p className="text-base mb-4 font-semibold  font-sans leading-7 text-gray-800">
          Strictly follow pre-care instructions to minimize bleeding and skin
          sensitivities during the procedure. Excessive bleeding and sensitivity
          can dilute pigment and result in poor outcomes.
        </p>
        <ul className="list-none list-inside mb-6 leading-7">
          {aftercareEyelinerInstructions.map((instruction, index) => (
            <li key={index} className="mb-2">
             - {instruction}
            </li>
          ))}
        </ul>
        <h4 className="text-xl font-semibold mb-2 text-gray-800 leading-loose">
        Please Note:
        </h4>
        <ul className="list-disc list-inside mb-6 leading-7">
          {pleaseNoteEyeliner.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="md:mx-12 mx-4 my-4">
          <h2 className="text-4xl font-semibold mb-4 text-black">
            Long-Term Care
          </h2>
          <p className="mb-4">
            Your cosmetic tattoo is designed to last approximately 3 to 5 years
            following the touch-up session.
          </p>
          <ul className="list-disc list-inside leading-loose">
            {eyelinerlongTermCare.map((instruction, index) => (
              <li key={index} className="mb-2">
                {instruction}
              </li>
            ))}
          </ul>
          <p className="text-base font-semibold font-sans leading-7 text-gray-800">
            Following these guidelines will help preserve the longevity and
            vibrancy of your cosmetic tattoo. If during the healing process, you
            have any questions or concerns, do not hesitate to email us at{" "}
            <span className="text-pink-700 font-bold">info@sepiyar.com</span> or
            call us at{" "}
            <span className="text-pink-700 font-bold">0488103982</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default EyeLinerTattooCare;
