import Image from "next/image";
import { publicRuntimeConfig } from "../next.config";

export default function Card({ name, position, department, imgSrc, imgAlt }) {
  const BASE_PATH = publicRuntimeConfig.BASE_PATH;

  return (
    <div class="w-auto max-w-sm flex flex-col bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-3 md:p-5 items-center">
      <Image
        src={`${imgSrc}`}
        alt={imgAlt}
        width="100%"
        height="100%"
        objectFit="cover"
        className="rounded-xl"
      />
      <h5 class="mb-1 text-lg font-medium text-gray-900 dark:text-white pt-2 text-center">
        {name}
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400 text-center">
        {position}
      </span>
      <span class="text-sm text-gray-500 dark:text-gray-400 text-center">
        {department}
      </span>
    </div>
  );
}
