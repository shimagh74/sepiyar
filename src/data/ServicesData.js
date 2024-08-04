import BROWSLASHES from "../assets/img/BROWS&LASHES.jpg";
import BROWSCOSMETICTATTOO from "../assets/img/BROWSCOSMETICTATTOO.jpg";
import EYESCOSMETICTATTOO from "../assets/img/EYESCOSMETICTATTOO.JPEG";
import LIPSCOSMETICTATTOO from "../assets/img/LIPSCOSMETICTATTOO.JPEG";
import BrowSculp from "../assets/img/treatments/BrowSculp.JPEG";
import Browlamination from "../assets/img/treatments/Browlamination.JPEG";
import Lashlift from "../assets/img/treatments/Lashlift.JPEG";
import Microblading from "../assets/img/treatments/microblading.JPEG";
import Combination from "../assets/img/treatments/Combinationbrows.JPEG";
import Ombrebrows from "../assets/img/treatments/Ombrebrows.JPEG";
import Nanobrows from "../assets/img/treatments/Nanobrows.JPEG";
import LashEnhancement from "../assets/img/treatments/LashEnhancement.JPEG";
import Eyeliner from "../assets/img/treatments/Eyeliner.JPEG";
import Classiceyeliner from "../assets/img/treatments/Classiceyeliner.JPEG";
import Lowerlashline from "../assets/img/treatments/Lowerlashline.JPEG";
import Lipblush from "../assets/img/treatments/Lipblush.JPEG";
import Lipcontour from "../assets/img/treatments/Lipcontour.JPEG";
import Lipcorrection from "../assets/img/treatments/Lipcorrection.JPEG";

export const ServicesData = [
  {
    id: 1,
    title: "BROWS & LASHES",
    description:
      "These techniques enhance natural features by shaping, lifting, and defining eyebrows and eyelashes, resulting in a more striking and defined look.",
    Image: BROWSLASHES,
    time: "",
    subtitle: ["Keratin Brow Lamination", "Keratin Lash Lift", "Brow Sculpt "],
    cost: "100$",
  },
  {
    id: 2,
    title: "BROWS COSMETIC TATTOO",
    description:
      "SEPIYAR is renowned for natural-looking eyebrows and hyper-realistic cosmetic tattoos. Their techniques use hairlike strokes to reshape, fill in, and add density to brows, or create a powdered look resembling brow pencil or powder.",
    Image: BROWSCOSMETICTATTOO,
    time: "",
    subtitle: [
      "Microblading",
      "Ombré Brows",
      "Nano Brows",
      "Combination Brows",
      "Brow Tattoo Correction",
    ],
    cost: "100$",
  },
  {
    id: 3,
    title: "EYES COSMETIC TATTOO",
    description:
      "Eyeliner tattooing enhances the lash line for fuller, more defined eyes. Ideal for those with light eyelashes or who love the look of eyeliner, results range from subtle to bold and are customized for each client.",
    Image: EYESCOSMETICTATTOO,
    time: "",
    subtitle: ["Eyeliner", "Lash Enhancement", "Lower Lash Line"],
    cost: "100$",
  },
  {
    id: 4,
    title: "LIPS COSMETIC TATTOO",
    description:
      "SEPIYAR offers the most natural lip tattooing technique, providing a soft, natural look with no harsh outlines. This method adds a flush of color and definition to your lips with minimal maintenance. It's a time-saving and highly beneficial treatment.",
    Image: LIPSCOSMETICTATTOO,
    time: "",
    subtitle: ["LIP Blush", "Full Lip Contour ", "Lip Correction"],

    cost: "100$",
    // description: " ",
  },
];
export const servicesPrice = [
  {
    title: "Lashes & Brows",
    items: [
      { name: "Keratin Brow Lamination + tint", price: "$75" },
      { name: "Keratin Lash Lift + Tint", price: "$85" },
      { name: "Brow Sculpt Incl Tint", price: "$55" },
      { name: "Wax, Trim, Tweeze Excl Tint", price: "$35" },
      { name: "Keratin Lash Lift & Brow Sculpt package", price: "$120" },
      { name: "Keratin Lash Lift & Beiw Lamination package", price: "$140" },
    ],
  },
  {
    title: "Eyebrow Tattoo",
    items: [
      { name: "Combo Brows", price: "$490" },
      { name: "Microblading", price: "$450" },
      { name: "Nano Brows ", price: "$450" },
      { name: "Ombre Brows", price: "$450" },
      { name: "Old Tattoo Correction", price: "$550" },
    ],
  },
  {
    title: "Eyes Tattoo",
    items: [
      { name: "Lash Enhancement", price: "$290" },
      { name: "Eyeliner", price: "$390" },
      { name: "Winged Eyeliner", price: "$390" },
      { name: "Classic Eyeliner", price: "$490" },
      { name: "Lower Lash Line", price: "$150" },
    ],
  },
  {
    title: "Lips Tattoo",
    items: [
      { name: "Full Lip Contour", price: "$550" },
      { name: "Lip Blush", price: "$450" },
      { name: "Lip Correction", price: "$450" },
    ],
  },
  {
    title: "Touch-ups",
    items: [
      { name: "1-2 Month Touch Up ( Brows/Lips)", price: "$150" },
      { name: "1-2 Month Touch Up (Eyes)", price: "$99" },
      {
        name: "Annual Refresher (12-18 months) Depending on the technique",
        price: "$250-$350",
      },
    ],
  },
];
export const BrowsLashesData = [
  {
    id: 1,
    title: "Brow Sculpt",
    Image: BrowSculp,
    time: "30 min",
    cost: "$55",
    description:
      "Our signature brow sculpt service is meticulously tailored to enhance your natural features through precise shaping, customized tinting, and a range of techniques including gentle waxing, meticulous trimming and tweezing, and a flawless finish with concealer. We embrace the thick and fluffy brow trend, sculpting brows to be dense and full by expertly removing excess hairs and adding tint for a fuller, more pronounced look.",
  },
  {
    id: 2,
    title: "Keratin Brow Lamination",
    Image: Browlamination,
    time: "30 min",
    cost: "$75",
    description:
      "Discover our Keratin Brow Lamination and Tint, the ultimate solution for taming unruly brows and achieving effortlessly groomed perfection. This transformative treatment incorporates keratin to smooth and relax coarse or grey brow hairs, ensuring they lie seamlessly against your skin. Enjoy a customized experience that includes brow sculpting and tinting as needed in just one relaxing hour. Perfect for those seeking thicker, fuller brows with a fluffy, natural look that lasts 4-6 weeks.",
  },
  {
    id: 3,
    title: "Keratin Lash Lift",
    Image: Lashlift,
    time: "60 min",
    cost: "85$",
    description:
      "Introducing the Keratin Lash Lift: an innovative Australian-developed treatment that nourishes and strengthens natural lashes with added keratin. Using silicone moulds, it instantly lifts and curls lashes, providing a youthful, refreshed appearance around the eyes without the maintenance of extensions. Ideal for enhancing even the shortest or straightest lashes, giving them a beautifully curved and lengthened look that lasts 6-8 weeks. ",
  },
];
export const BrowsData = [
  {
    id: 1,
    title: "Microblading",
    Image: Microblading,
    time: "2.5 Hrs",
    cost: "$450",
    description:
      "Microblading is a cosmetic procedure that enhances eyebrows with natural-looking results. Technicians use a fine hand tool to implant pigment into the skin, creating hair-like strokes that mimic real eyebrows. This technique fills sparse areas, reshapes brows, and offers a semi-permanent solution lasting 12 to 24 months. It provides a long-lasting, low-maintenance beauty enhancement but may not be suitable for oily skin types.",
  },
  {
    id: 2,
    title: "Ombré/Powder Brows",
    Image: Ombrebrows,
    time: "2.5 Hrs",
    cost: "$450",
    description:
      "Ombré/Powder Brows use fine dots of pigment to create a soft, shaded effect resembling makeup. This technique transitions from lighter shading at the front to deeper tones at the ends, providing a defined and filled-in look. It lasts longer than Microblading and is suitable for all skin types, offering a semi-permanent enhancement of natural eyebrow beauty.",
  },
  {
    id: 3,
    title: "Nano Brows",
    Image: Nanobrows,
    time: "2.5 Hrs",
    cost: "$450",
    description:
      "Nano Brows are the epitome of long-lasting, natural-looking eyebrow enhancements suitable for all skin types, including oily skin. This cutting-edge technique utilizes intricate machine hair-stroke methods to create hyper-realistic results. By delicately implanting pigments into the skin, Nano brows enhance facial symmetry with precision, ensuring beautiful, low-maintenance brows that endure. ",
  },
  {
    id: 4,
    title: "Combination Brows",
    Image: Combination,
    time: "2.5 Hrs",
    cost: "$490",
    description:
      "Combination Brows blend Microblading with Ombre or Powder Techniques for optimal eyebrow enhancement. Hair-like strokes are feathered at the front for a natural look, while the tail is shaded for definition. This approach achieves balanced, defined, and aesthetically pleasing brows, making it a favorite method for achieving perfect eyebrows.",
  },
  {
    id: 5,
    title: "Eyebrow tattoo correction",
    Image: Microblading,
    time: "3.5 Hrs",
    cost: "$550",
    description:
      "Eyebrow tattoo correction improves the appearance of existing eyebrow tattoos. Whether dealing with bad tattoos, faded ink, incorrect shapes, or weird colors, this procedure offers a fast and painless solution. Ombre brow correction blends and neutralizes old pigments, achieving a softer, more natural look that enhances facial features and restores confidence.",
  },
];
export const EyesData = [
  {
    id: 1,
    title: "Lash Enhancement",
    Image: LashEnhancement,
    time: "1 Hrs",
    cost: "$290",
    description:
      "Permanent lash enhancement, offers a natural and subtle enhancement to the lash line, perfect for those who prefer a minimalist approach. By delicately tattooing pigment along the lash line, this procedure creates the illusion of fuller lashes and subtly accentuates the eyes. It's an ideal choice for individuals looking to enhance their natural beauty with a very subtle liner that defines it without appearing overly dramatic or heavy.",
  },
  {
    id: 2,
    title: "Eyeliner",
    Image: Eyeliner,
    time: "2 Hrs",
    cost: "$390",
    description:
      "Permanent makeup eyeliner is a cosmetic technique where pigments are tattooed onto the eyelid to create the look of eyeliner. It enhances the eyes by defining the lash line, making them appear larger, and eliminates the need for daily eyeliner application. The pigment is implanted into the dermal layer, lasting several years with touch-ups needed for maintenance. Thickness, color, and style can be customized based on individual preferences.",
  },
  {
    id: 3,
    title: "Classic Eyeliner",
    Image: Classiceyeliner,
    time: "3 Hrs",
    cost: "$490",
    description:
      "Classic Eyeliner with a thick line and long tail is a dramatic, timeless makeup style. It features a bold line along the upper lash line, extending into a tapered tail, accentuating the eyes for a larger, more expressive look. This glamorous style creates a statement without overpowering natural features, suiting various occasions and makeup preferences for an elegant appearance.",
  },
  {
    id: 4,
    title: "Lower Lash Line",
    Image: Lowerlashline,
    time: "1 Hrs",
    cost: "$150",
    description:
      "Permanent lower lash line makeup refers to the tattooing of pigment along the lower lash line to enhance eye definition and thickness naturally, providing a long-lasting alternative to daily makeup application.",
  },
];
export const LipsData = [
  {
    id: 1,
    title: "LIP Blush",
    Image: Lipblush,
    time: "3 Hrs",
    cost: "$450",
    description:
      "Lip blush is a cosmetic tattooing technique that enhances the shape, color, and definition of the lips, providing a semi-permanent alternative to daily makeup. This procedure deposits pigment into the outer lip layers, creating a soft, natural-looking tint. It subtly defines the lip contour, mimicking lipstick or a delicate stain. Customizable for individual preferences, lip blush tattoos can achieve a pronounced or subtle finish, lasting 2 to 4 years before needing a touch-up.",
  },
  {
    id: 2,
    title: "Full Lip Contour ",
    Image: Lipcontour,
    time: "3 Hrs",
    cost: "$550",
    description:
      "Full Lip Contour with lip line is a cosmetic procedure that tattoos pigment along the natural lip line and blends it into the lips. This enhances shape, corrects asymmetry, and defines the lip borders, creating a fuller, more balanced look. Lasting 3 to 5 years, this semi-permanent solution offers customizable results, from natural to more pronounced lips. Compared to lip blush, it provides a fuller and more saturated color for a long-lasting enhancement.",
  },
  {
    id: 3,
    title: "Lip Neutralization/ Correction",
    Image: Lipcorrection,
    time: "3 Hrs",
    cost: "$450",
    description:
      "Lip neutralizing is an advanced tattoo treatment that improves dark areas on the lips caused by hyperpigmentation. Using expert color-correcting techniques and neutralizing pigments, this procedure enhances natural lip color, shape, and symmetry. It lightens dark hyperpigmented areas, resulting in a more uniform and balanced lip appearance.",
  },
];
