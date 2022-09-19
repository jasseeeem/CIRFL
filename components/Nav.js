import Link from "next/link";
import { useState } from "react";
export { Nav };

function Nav({}) {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="max-w-7xl mx-auto py-5 md:py-7">
      <nav className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex justify-between items-center">
          <Link href="/" className="hover:cursor-pointer">
            <h1 className="text-3xl font-extrabold text-sky-700">CIRFL</h1>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleButton}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            toggle ? "flex flex-col py-2" : "hidden"
          } md:block md:space-x-8 md:p-0`}
        >
          <Link href="/exchange-programs">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Exchange Programs
            </a>
          </Link>
          <Link href="/mous">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              MOUs
            </a>
          </Link>
          <Link href="/agreements">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Agreements
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
          <Link href="/events">
            <a className="tracking-wider leading-5 hover:text-sky-700 transition text-sm">
              Events
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
