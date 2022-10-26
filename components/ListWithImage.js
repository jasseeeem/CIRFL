import Image from "next/image";
import Link from "next/link";
import { publicRuntimeConfig } from "../next.config";

export default function ListWithImage({ heading, list }) {
  const BASE_PATH = publicRuntimeConfig.BASE_PATH;

  return (
    <ul className="flex flex-col space-y-8 list-disc max-w-4xl mx-auto">
      <h2 className="text-sky-700 text-3xl font-semibold text-center">
        {heading}
      </h2>
      {list.map((item, i) => {
        return (
          <li
            key={i}
            className={`flex flex-col md:flex-row ${
              item.imgSrc && "space-x-0 md:space-x-5 space-y-2 md:space-y-0"
            }`}
          >
            <div className={`${item.imgSrc ? "w-full md:w-2/3" : "w-4xl"}`}>
              <p>{item.text}</p>
              {item.link && (
                <div className="mt-1">
                  <a className="text-indigo-700 hover:underline">
                    <Link href={item.link}>Learn more</Link>
                  </a>
                </div>
              )}
            </div>
            {item.imgSrc && (
              <div className="w-full md:w-1/2">
                <Image
                  src={`${BASE_PATH}/${item.imgSrc}`}
                  alt={item.imgAlt}
                  width="100%"
                  height="60%"
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-xl shadow-xl"
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

ListWithImage.defaultProps = {
  heading: "Heading",
  list: [],
};
