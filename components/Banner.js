import { CgGym } from "react-icons/cg";
import { FaFlag, FaUsers } from "react-icons/fa";
import { MdCenterFocusWeak } from "react-icons/md";

export default function Banner({}) {
  const bannerElements = [
    {
      icon: CgGym,
      boldText: "Strengthen",
      normalText:
        "international collaboration in the Academic and Research domain",
    },
    {
      icon: FaFlag,
      boldText: "Establish",
      normalText:
        "a mechanism for the attainment of global standards among the NITC fraternity",
    },
    {
      icon: FaUsers,
      boldText: "Mobilise",
      normalText: "International Academic Collaboration",
    },
    {
      icon: MdCenterFocusWeak,
      boldText: "Focus",
      normalText: "on creating world-class teaching practices and curriculum",
    },
  ];
  return (
    <div className="rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 items-start justify-between z-10">
      {bannerElements.map((bannerElement) => {
        return (
          <div
            key={bannerElement.icon}
            className="p-5 md:p-7 flex flex-col space-y-5 justify-center w-full h-full"
          >
            <div className="text-sky-700 flex justify-center">
              <bannerElement.icon size="35" />
            </div>
            <p className="text-md text-center">
              <b>{bannerElement.boldText}</b> {bannerElement.normalText}
            </p>
          </div>
        );
      })}
    </div>
  );
}
