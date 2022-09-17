import Image from "next/image";

export default function PhotoText({
  heading1,
  paragraph1,
  heading2,
  paragraph2,
  imgSrc,
  imgAlt,
}) {
  return (
    <div className="flex flex-col md:flex-row space-y-10 space-x-0 md:space-x-10 md:space-y-0 items-center">
      <div className="md:w-1/2">
        <Image
          src={`/${imgSrc}`}
          alt={imgAlt}
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="cover"
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </div>
      <div className="flex flex-col space-y-7 md:w-1/2">
        <div className="flex flex-col space-y-2">
          <h2 className="text-sky-700 text-3xl font-semibold">{heading1}</h2>
          <p className="text-lg">{paragraph1}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-sky-700 text-3xl font-semibold">{heading2}</h2>
          <p className="text-lg">{paragraph2}</p>
        </div>
      </div>
    </div>
  );
}

PhotoText.defaultProps = {
  heading: "Heading",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ornare magna ullamcorper sodales. ",
  imgSrc: "nitc.jpg",
  imgAlt: "Image Alternative",
};
