import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

// const companies = [
//   "Google",
//   "Microsoft",
//   "Amazon",
//   "Netflix",
//   "YouTube",
//   "Instagram",
//   "Uber",
//   "Spotify",
// ];

export default function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          TRUSTED BY VENDORS AND STORES ACROSS THE NATION
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            <Image
              // key={idx}
              width={125}
              height={40}
              src={`/swwholesalelogo.png`}
              className="h-14 w-28 dark:brightness-0 dark:invert grayscale opacity-30 mr-1"
              alt={"swift wholesale"}
            />
            <Image
              // key={idx}
              width={125}
              height={40}
              src={`/Amoco_logo.svg.png`}
              className="h-14 w-28 dark:brightness-0 dark:invert grayscale opacity-30 mr-1"
              alt={"DSD Wholesale"}
            />
            <Image
              // key={idx}
              width={125}
              height={40}
              src={`/BP_Helios_logo.png`}
              className="h-16 w-16 dark:brightness-0 dark:invert grayscale opacity-30 mr-1"
              alt={"BP Store"}
            />
            <Image
              // key={idx}
              width={125}
              height={40}
              src={`/Exxon_Mobil_Logo.png`}
              className="h-10 w-32 dark:brightness-0 dark:invert grayscale opacity-30 mr-1"
              alt={"Exxon Mobile Store"}
            />
            <Image
              // key={idx}
              width={125}
              height={40}
              src={`/walker_express_logo.jpeg`}
              className="h-16 w-32 dark:brightness-0 dark:invert grayscale opacity-30 mr-1"
              alt={"Walker express store"}
            />
            {/* {companies.map((logo, idx) => (
              <Image
                key={idx}
                width={112}
                height={40}
                src={`https://cdn.magicui.design/companies/${logo}.svg`}
                className="h-10 w-28 dark:brightness-0 dark:invert grayscale opacity-30"
                alt={logo}
              />
            ))} */}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
