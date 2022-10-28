import Image from "next/image";
import Link from "next/link";
import { publicRuntimeConfig } from "../next.config";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
export { Nav };

function Nav({}) {
  const BASE_PATH = publicRuntimeConfig.BASE_PATH;

  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="max-w-7xl mx-auto py-5 md:py-7">
      <nav className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex justify-between items-center">
          <Link href="/" className="">
            <div>
              {/* <Image
                src={`${BASE_PATH}/cirfl_logo.png`}
                alt="CIRFL Logo"
                width="50%"
                height="50%"
                layout="responsive"
                objectFit=""
                className="rounded-full"
              /> */}
              <h1 className="text-3xl font-extrabold text-sky-700 hover:cursor-pointer">
                CIRFL
              </h1>
            </div>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-sky-700 dark:focus:ring-sky-600"
            onClick={toggleButton}
          >
            <BiMenu size={25} />
          </button>
        </div>
        <div
          className={`${
            toggle ? "flex flex-col py-2" : "hidden"
          } md:block md:space-x-8 md:p-0 space-y-1 md:space-y-0 `}
        >
          <Link href="/about">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              About Us
            </a>
          </Link>
          <Link href="/collaborations">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Collaborations
            </a>
          </Link>
          <Link href="/activities">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Activities
            </a>
          </Link>
          <Link href="/opportunities">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Opportunities
            </a>
          </Link>
          <Link href="/language-programmes">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Language Programmes
            </a>
          </Link>
          <Link href="/counselling">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Counselling
            </a>
          </Link>
          <Link href="/members">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Members
            </a>
          </Link>
          <Link href="/gallery">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Gallery
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
