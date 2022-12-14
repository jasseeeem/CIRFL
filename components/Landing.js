import Button from "./Button";
import Image from "next/image";
import { publicRuntimeConfig } from "../next.config";

export default function Landing({}) {
  const BASE_PATH = publicRuntimeConfig.BASE_PATH;
  return (
    <div className="flex flex-row">
      <div className="md:w-1/2">
        <h6 className="md:pt-10 text-xl font-semibold leading-tight text-sky-700">
          NIT Calicut
        </h6>
        <h4 className="pt-5 pb-7 text-4xl font-bold">
          Centre for International Relations and Foreign Languages
        </h4>
        {/* <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt ornare magna ullamcorper sodales.{" "}
        </p> */}
        <Button toLink="/about" text="Learn More" />
      </div>
      <div className="hidden md:block md:w-1/2">
        <Image
          src={`${BASE_PATH}/nitc.png`}
          alt="A faded image of NITC"
          width="60%"
          height="40%"
          layout="responsive"
          objectFit=""
          className="w-1/2 h-auto opacity-20 "
        />
      </div>
    </div>
  );
}
