import { CgGym } from "react-icons/cg";
import Image from "next/image";
import { FaFlag, FaUsers } from "react-icons/fa";
import { MdCenterFocusWeak } from "react-icons/md";
import { publicRuntimeConfig } from "../next.config";

export default function Card({name, position, department, imgSrc, imgAlt}) {

    const BASE_PATH = publicRuntimeConfig.BASE_PATH;
  
    return (  
        <div class="w-auto max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 pl-5 pr-5">
            <div class="flex flex-col items-center pb-7 pt-7">
            <Image
                 src={`${BASE_PATH}/${imgSrc}`}
                 alt={imgAlt}
                 width="150%"
                 height="180%"
                 layout="intrinsic"
                 className="w-full h-full rounded-xl"
            />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white pt-2">{name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{position}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{department}</span>
            </div>
        </div>
        
  );
}
