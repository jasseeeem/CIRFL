import { publicRuntimeConfig } from "../next.config";
import ListWithImage from "../components/ListWithImage";
export default function LanguageProgrammes() {
  const programmesList = [
    {
      text: "A certificate course in the Japanese language in NIT Calicut. The certificate course will start on October 3 (tentatively), and the course is designed as a 93 hours instruction-based contact program focusing on Katsudo and Rikai for registered participants. After completing the program, participants will receive a certificate from Japan Foundation, New Delhi and NIT Calicut in collaboration. Seats are limited and will be offered on a first-come, first-served.",
      imgSrc: "",
      imgAlt: "",
    },
  ];
  return (
    <div className="py-7 px-1 mx-auto max-w-7xl">
      <ListWithImage
        heading={"Language programmes and Other Courses"}
        list={programmesList}
      />
    </div>
  );
}
