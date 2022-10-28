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
            className="flex flex-col p-3 md:p-4 bg-gray-100 rounded-xl shadow-xl space-y-2"
          >
            <div className="w-4xl">
              {item.text && <p>{item.text}</p>}
              {item.points &&
                item.points.map((point, i) => {
                  return (
                    <li key={i} className="ml-4">
                      {point}
                    </li>
                  );
                })}
              {item.link && (
                <div className="mt-1">
                  <a className="text-indigo-700 hover:underline">
                    <Link href={item.link}>Learn more</Link>
                  </a>
                </div>
              )}
            </div>
            {item.images && item.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {item.images.map((image, i) => {
                  return (
                    <Image
                      key={i}
                      src={`${BASE_PATH}/${image.imgSrc}`}
                      alt={image.imgAlt}
                      width="100%"
                      height="60%"
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-xl shadow-xl"
                    />
                  );
                })}
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
