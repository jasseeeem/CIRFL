import Button from "./Button";
import Image from "next/future/image";

export default function Landing({}) {
  return (
    <div className="flex flex-row">
      <div className="md:w-1/2">
        <h6 className="md:pt-10 text-xl font-semibold leading-tight text-sky-700">
          NIT Calicut
        </h6>
        <h4 className="pt-5 text-4xl font-bold">
          Centre for International Relations and Foreign Languages
        </h4>
        <p className="py-7 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt ornare magna ullamcorper sodales.{" "}
        </p>
        <Button toLink="/learn-more" text="Learn More" />
      </div>
      <div className="hidden md:block md:w-1/2">
        <Image
          src={"/nitc.jpg"}
          alt="A faded image of NITC"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
