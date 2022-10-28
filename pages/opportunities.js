import { publicRuntimeConfig } from "../next.config";
import ListWithImage from "../components/ListWithImage";
export default function Opportunities() {
  const opportunitiesList = [
    {
      points: [
        "SERB has opened call for the Overseas Doctoral Fellowship Program (OVDF). The Call is open between 23rd September and 18th November 2022.",
        "The applicant should have registered for a full-time Ph.D. Degree in any of the recognized Institutions / Universities in India in Science, Technology, Engineering and Mathematics (including Medicine, Pharma, Agriculture and related S&T areas) disciplines.",
        "The SERB has MOU with Purdue University, USA, and University of Alberta, Edmonton, Canada, where you can apply directly.",
      ],
      link: "https://www.purdue.edu/india/research-and-partnerships/ovdf.phphttps://www.ualberta.ca/international/international-relations/asia/student-mobility/serb/serb-students.html",
    },
    {
      points: [
        "Younger faculty members who aspire to become national leaders in their respective field of government.",
        "Applications/nominations are invited for One Year Masters Degree Course on School of Government (Public Policy in the Central Government) under Young Leaders' Program (YLP) at the National Graduate Institute for Policy Studies, (GRIPS) Tokyo, Japan from October 2023 - September 2024 (one year).",
        "Please find attached the circular on the matter for your information.",
      ],
    },
    {
      points: [
        "DAAD - Matchmaking mission in Applied Sciences; Engineering, Mathematics and Natural Sciences: During this mission NIT Calicut has a chance to participate in a matchmaking session on 07th November 2022 in Bengaluru, from 14:00 to 18:00 hrs.",
        "The application process starts with a survey that I need to fill online.",
        "If selected in the application process, we will be discussing possibilities of cooperation.",
        "DAAD New Delhi will select the institutes for discussion based on the profiles matching requirements of the HAWs.",
      ],
    },
    {
      points: [
        "NTU Singapore India Connect Research Internship: an opportunity for research internship 2 - 5 months duration at NTU Singapore.",
        "The expenses towards the internship is on a co-funding basis involving student, home university/institute, and NTU to provide reasonable financial support covering registration fee, visa fee, travel, and other expenses (See the expected expenses section).",
        "For UG students, the 5-months internship starting January may be useful for UG students towards their project (if no coursework requirements are there), however, no financial contributions from the institute is assured.",
      ],
    },
  ];
  return (
    <div className="py-7 px-1 mx-auto max-w-7xl">
      <ListWithImage
        heading={"Opportunities for Students and Faculty Members"}
        list={opportunitiesList}
      />
    </div>
  );
}
