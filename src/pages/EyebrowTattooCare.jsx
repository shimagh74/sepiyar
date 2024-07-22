import React from "react";
import photoUrl from "../assets/img/prepost/brows.JPEG";
import {
  eyebrowsTattooPreCare,
  eyebrowslongTermCare,
} from "../data/preCareInstructions";

const EyebrowTattooCare = () => {
  return (
    <>
      <h1 className="md:text-5xl text-3xl justify-center flex my-8 m-auto p-2">
        Eyebrow Tattoo Care
      </h1>

      <div className="flex flex-col-reverse md:mx-12 my-8 lg:flex-row flex-wrap items-start">
        <div className="w-full lg:w-3/5 pr-4 my-8 lg:mb-0">
          <div className="mb-6 p-8 ">
            <h2 className="md:text-3xl text-xl font-semibold mb-8 text-black">
              Eyebrows Tattoo Pre + Post Care
            </h2>
            <p className="text-base leading-loose text-gray-800 ">
              Ensuring optimal results and the lasting beauty of your cosmetic
              tattoo requires following Sepi Yar's recommended pre + post-care
              instructions diligently. Please note that individual skin
              responses vary in healing time and sessions required for color
              retention and desired outcomes. Your commitment to proper care
              during healing and thereafter is crucial for maintaining your
              brows' appearance.
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
                  Eyebrows Tattoo Pre-Care
                </h2>
                <p className="text-base leading-7 text-gray-800 mb-4">
                  Strict adherence to pre-care instructions is essential to
                  minimize bleeding and skin sensitivities during your eyebrow
                  tattoo procedure. Excessive bleeding and sensitivity can
                  dilute pigment color and compromise the quality of the
                  results.
                </p>
                <ul className="list-disc list-inside leading-loose">
                  {eyebrowsTattooPreCare.map((instruction, index) => (
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
          Eyebrows Tattoo Post-Care
        </h2>
        <h3 className="text-xl my-4 text-gray-800">
          WHAT TO EXPECT IMMEDIATELY AFTER THE PROCEDURE?
        </h3>
        <p className="text-base leading-7 text-gray-800 mb-4">
          Immediately after your eyebrow tattoo procedure, expect the color to
          appear significantly darker and sharper than anticipated. This is
          normal and part of the initial healing process. Over the next ten
          days, the color will gradually fade, and it may take 6-8 weeks for the
          true color to emerge. Temporary disappearance of color during healing
          is common due to the formation of skin layers.
        </p>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          On the day of your appointment:
        </h4>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">
            Gently blot the treated area with a wet wipe every hour for 4 hours
            to absorb excess lymph fluid. Continue this as needed until oozing
            stops to prevent fluid from hardening and affecting the healing
            process.
          </li>
          <li className="mb-2">
            During scab formation and active lymph secretion, occasional fluid
            or ooze on the skin is normal. Ensure to clean it off to prevent
            crust formation that can block the skin.
          </li>
        </ul>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">Days 2-3:</h4>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">
            Common symptoms may include redness, minimal swelling, tenderness,
            flaking, dryness, and itching. These are expected and typically
            subside within 1 to 10 days.
          </li>
        </ul>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          Daily Care:
        </h4>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">
            Wash your brows daily with lukewarm water and a mild, fragrance-free
            soap using gentle patting motions. Avoid scrubbing, rubbing, wiping,
            or scratching to protect the pigment.
          </li>
          <li className="mb-2">
            Ensure the area is completely dry before applying a thin layer of
            provided ointment with clean fingertips to moisturize. Avoid
            applying ointment on wet or damp skin to prevent infection.
          </li>
        </ul>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          Days 3-10 (Dry Healing Phase):
        </h4>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">
            Apply a rice-sized amount of ointment 2 to 3 times daily. Pat gently
            with clean fingertips or a q-tip, avoiding excessive rubbing to
            allow scabs to naturally flake off without disrupting pigment
            retention.
          </li>
          <li className="mb-2">
            Avoid activities that may cause sweating, including intense
            exercise, swimming, saunas, and steam rooms, for 10 days.
          </li>
          <li className="mb-2">
            Protect your brows from direct sun exposure, tanning beds, heavy
            skincare products, and cosmetics for at least 4 weeks to prevent
            premature fading and ensure proper healing.
          </li>
          <li className="mb-2">
            Use a fresh pillowcase and avoid sleeping on your face during the
            initial healing period.
          </li>
          <li className="mb-2">
            Refrain from scheduling facials, microdermabrasion, peels, or laser
            treatments for 4 weeks post-procedure to avoid pigment distortion.
          </li>
        </ul>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">
          After Healing:
        </h4>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">
            Understand that brows may initially appear lighter due to natural
            skin regeneration, and some areas may seem uneven or patchy. This is
            normal and can be addressed during a follow-up session after 6-8
            weeks to refine the color and symmetry.
          </li>
          <li className="mb-2">
            Healing outcomes vary per individual due to factors like skin
            regeneration, age, immune system, and lifestyle. Additional touch-up
            sessions may be needed for optimal results, with associated charges.
          </li>
        </ul>
        <p className="text-base font-semibold font-sans leading-7 text-gray-800">
          Following these post-care instructions diligently is crucial for
          achieving the best results. Consider these factors when scheduling
          your appointment, as healing times vary based on individual factors
          and the body's natural regeneration process.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="md:mx-12 mx-4 my-4">
          <h2 className="text-4xl font-semibold mb-4 text-black">
            Long-Term Care
          </h2>
          <p className="mb-4">
            Your cosmetic tattoo typically retains its color for 1 to 3 years
            following the touch-up session.
          </p>
          <ul className="list-disc list-inside text-base leading-7 text-gray-800 mb-4">
            {eyebrowslongTermCare.map((instruction, index) => (
              <li key={index} className="mb-4">
                {instruction}
              </li>
            ))}
          </ul>
          <p className="text-base font-semibold font-sans leading-7 text-gray-800">
            If during the healing process, you have any questions or concerns,
            do not hesitate to email us at{" "}
            <span className="text-pink-700 font-bold"> info@sepiyar.com </span>{" "}
            or call us at
            <span className="text-pink-700 font-bold"> 0488103982 </span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default EyebrowTattooCare;
