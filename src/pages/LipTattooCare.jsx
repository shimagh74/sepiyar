import React from "react";
import photoUrl from "../assets/img/prepost/lip.JPEG";
import {
  lipsTattooPreCare,
  actionAvoidedLips,
  noteLips,
  liplongTermCare,
} from "../data/preCareInstructions";

const LipSigns = [
  "Swelling and redness",
  "Tenderness",
  "Flaking and mild itchiness as lips heal",
  "Dryness, which may persist for up to 3 weeks",
  "In the first 12-48 hours, as the skin forms a protective scab and lymph secretion is active, you may notice fluid or oozing. Gently pat any fluids with a water-wet wipe and dry with a clean paper towel to prevent crusting, which can hinder skin breathing.",
  "Maintain cleanliness and apply the provided ointment lightly with a Q-tip or clean hands several times daily for at least 7 days post-procedure. Avoid allowing lips to become dry, as this can affect healed color. Be gentle and avoid aggressive movements on the skin.",
  "Lips will peel for about a week; allow flakes to shed naturally. Picking at or pulling skin prematurely can cause pigment loss and damage deeper tissue. The lip liner or edges will be the last to shed; pulling them prematurely may result in uneven color or indentation.",
  "During the peeling phase, it may appear that the color has faded significantly. Color will become more apparent by the second week and will continue to clarify up to 5 weeks.",
];
const LipTattooCare = () => {
  return (
    <>
      <h1 className="md:text-5xl text-3xl justify-center flex my-8 m-auto p-2">
        Lip Tattoo Care
      </h1>
      <div className="flex flex-col-reverse md:mx-12 my-8 lg:flex-row flex-wrap items-start">
        <div className="w-full lg:w-3/5 pr-4 my-8 lg:mb-0">
          <div className="mb-6 p-8 ">
            <h2 className="md:text-3xl text-xl font-semibold mb-8 text-black">
              Lips Tattoo Pre + Post Care
            </h2>
            <p className="text-base lora-font leading-loose text-gray-800 ">
              It is strongly advised to adhere to SEPIYAR's Pre & Post Care
              instructions to maximize the effectiveness and durability of your
              tattoo. Please note that these guidelines serve as general advice.
              We cannot promise specific outcomes, as healing times and the
              number of sessions required for optimal color retention and
              desired results vary for each individual. It is crucial to provide
              attentive care to your lips during the healing process and
              thereafter.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 pl-4 md:my-8 lg:mb-0">
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
                  Lips Tattoo Pre-Care
                </h2>
                <p className="text-base leading-7 text-gray-800 mb-4">
                  Strict adherence to SEPIYAR's Pre-Care instructions is
                  essential to minimize bleeding and skin sensitivities during
                  your lip tattoo service. Excessive bleeding or sensitivity can
                  dilute and expel the pigment, leading to less favorable
                  results.
                </p>
                <ul className="list-disc list-inside leading-loose">
                  {lipsTattooPreCare.map((instruction, index) => (
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
          Lips Tattoo Post-Care
        </h2>
        <h3 className="text-xl my-4 text-gray-800">
          WHAT TO EXPECT IMMEDIATELY AFTER THE PROCEDURE?
        </h3>
        <p className="text-base leading-7 text-gray-800 mb-4">
          The color will appear vivid, akin to lipstick immediately after
          application. Your lips will temporarily appear slightly fuller,
          resembling the effect of lip filler injections. This effect will
          diminish within a day or two. Lip size will return to normal and the
          color will fade significantly, up to 50%, in the first three days.
          Initially, color loss will be more noticeable on the inner lips, with
          the edges retaining color longer.
        </p>
        <p className="text-base leading-7 text-gray-800 mb-4">
          A crust will form and start to flake off, revealing a lighter, more
          natural color underneath.
        </p>
        <p className="text-base leading-7 text-gray-800 mb-4">
          In many cases, clients opt for a darker shade during their touch-up
          appointment. It's advisable to be conservative during the initial
          procedure. Adding more color is easier than removing it.
        </p>
        <p className="text-base leading-7 text-gray-800 mb-4">
          Lips may feel tender initially. Drink through a straw and opt for
          fork-friendly foods to avoid touching the lips.
        </p>

        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          Day of Appointment (Day 1)
        </h4>
        <p className="text-base leading-7 text-gray-800 mb-4">
          You may apply an ice pack (covered with a clean, wet barrier of paper
          towel, towel, or cloth) for 10-minute intervals during the first 24
          hours. Ice can be reapplied hourly if desired, but avoid direct
          contact with the skin.
        </p>

        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          (Days 1 – 10)
        </h4>
        <p className="text-base leading-7 text-gray-800 mb-4">
          Following treatment, the treated area may exhibit the following
          symptoms for 1 to 10 days, all of which are common and will subside
          shortly:
        </p>
        <ul className="list-disc list-inside leading-loose">
          {LipSigns.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ul>

        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          The following actions should be avoided:
        </h4>
        <ul className="list-none list-inside leading-loose">
          {actionAvoidedLips.map((instruction, index) => (
            <li key={index} className="mb-2">
              - {instruction}
            </li>
          ))}
        </ul>

        <h4 className="text-xl font-semibold mb-2 text-gray-800 leading-loose">
          NOTE:
        </h4>
        <ul className="list-disc list-inside mb-6 leading-7">
          {noteLips.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ul>

        <p className="text-base font-semibold font-sans leading-7 text-gray-800">
          Following proper post-care is crucial for achieving the best results.
          When scheduling a cosmetic tattoo appointment, consider that healing
          time depends on your body’s regeneration, age, immune system, and
          lifestyle.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="md:mx-12 mx-4 my-4">
          <h2 className="text-4xl font-semibold mb-4 text-black">
            Long-Term Care
          </h2>
          <p className="mb-4">
          Your cosmetic tattoo is expected to last between 3 to 5 years following your touch-up session.
          </p>
          <ul className="list-disc list-inside leading-loose">
            {liplongTermCare.map((instruction, index) => (
              <li key={index} className="mb-2">
                {instruction}
              </li>
            ))}
          </ul>
          <p className="text-base font-semibold font-sans leading-7 text-gray-800">
            If during the healing process, you
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

export default LipTattooCare;
