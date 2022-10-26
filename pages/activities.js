import { publicRuntimeConfig } from "../next.config";
import ListWithImage from "../components/ListWithImage";
export default function Activities() {
  const activitiesList = [
    {
      text: "The Honourable Union Minister for State for Electronics, Information Technology, Skill Development and Entrepreneurship, Shri. Rajeev Chandrasekhar’s visited NIT Calicut for a “Fireside” chat with NITC students: Shri. Rajeev Chandrashekhar, Union Minister of State for Electronics, Information Technology, Skill Development and Entrepreneurship visited the National Institute of Technology Calicut on 30.08.2022. He was joined by the Member of Parliament of Kozhikode, Shri. M K Raghavan.The minister interacted with 11 incubates from the Technology Business Incubator (TBI) of NITC. Later, the minister had an exhilarating 'Fireside chat' with selected students of NITC on the topic 'New India for Young India: Techade of Opportunities'. He shared his valuable experience and motivated students by providing them with directions regarding their career-building in response to the worldwide need for better technological solutions.",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "CIRFL launched a Japanese language Certificate program jointly with Japan Foundation (JF), New Delhi, with their partial funding. The brochure of the program will be released on Monday, 16th Sep 10:30 AM - 11 AM. At the function, our Director will present the brochure to Dr Sanjeeb Pattjoshi IPS (IG and Director, Supplyco) in the presence of the representative from Japan Foundation, a special legal entity to undertake international dissemination of Japanese culture.",
      imgSrc: "nitc-board.jpg",
      imgAlt: "An image of the sign board infront of NITC",
    },
    {
      text: "Prof. Will Cantrell, Assistant Provost & Dean of Graduate School, and Prof. Ravindra Pandey, Chair of Dept of Physics, Michigan Technological University (MTU), USA, visited NITC on the 19th of September. They interacted with the students, research scholars and faculty members of NITC on possibilities of higher studies, credit-based student exchanges, faculty exchanges, twinning/dual degree/ double degree programs etc. (relevant to all disciplines) between NITC and MTU.",
      imgSrc: "nitc-board.jpg",
      imgAlt: "An image of the sign board infront of NITC",
    },
    {
      text: "The researchers and faculty members in Computer Science and Engineering Department, NITC are working on a collaborative project on 'Federated Learning for Cancer Research' with MVRCCRI and Maastricht University/Maastro Clinic, Netherlands. Clinical Data Scientist and Medical Physicist Dr Andre Dekker is heading the project.",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "A talk on 'Development of Chemical Microsorbent Devices for Detection of Diseases' was delivered by Dr Chiranjit Ghosh from the Division of Infectious Disease, Harvard Medical School, USA on 6-10-2022.",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "Shri. V.  Muraleedharan, Honorable Minister of State for External Affairs and Parliamentary Affairs visited NIT Calicut to launch various projects on 13.08.2022. Hon’ble Minister inaugurated the office complex for the newly established multidisciplinary centres, laid the foundation stone for an International Hall of Residence and officially launched an international seminar on the theme of 'Internationalisation of Higher Education in the light of NEP 2020' at the NITC campus. Hon'ble MP Shri. M K Raghavan and Hon'ble MLA Shri. P T A Rahim felicitated the gathering.",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "P A Muhammed Basheer, a distinguished Professor and Chair in Structural Engineering at the University of Leeds, United Kingdom, visited NITC on 26.8.2022. He has been an educationalist and researcher in the field of civil (structural) engineering for more than 30 years.  Prof Basheer is a Fellow of several professional bodies, including the Royal Society of Engineering. He is serving on editorial boards of several prestigious journals and has published many books and numerous research articles to his credit. He delivered a lecture titled 'Developing and delivering a vision to become internationally leading in academia' at 2:30 pm in MED Seminar Hall.",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "Dr Arantza Aldea and Dr Mahak M from Oxford Brookes University (OBU), facilitated by the British Council Exploratory Funds, visited NIT Calicut during 4 - 5 July 2022. Dr Aldea and Dr Mahak delivered talks on 4th July 2022 at 3 PM about collaboration information and joint ventures between OUB and NITC. The main aim of this seminar is to identify possible teaching and learning collaboration and potential research collaboration opportunities with NIT Calicut.",
      imgSrc: "",
      imgAlt: "",
    },

    {
      text: "High-level delegation led by Dy. Director to Israel to study academia-startup ecosystem interaction - March 12 - 19 2022.",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "Mr. Jackson Ondiko, visiting during 28 April 2022 - 28 May 2022, mentored by Dr. Sujith Kumar C S, MED, under a Indo-South Africa bilateral project",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "Dr. Olusola Akinrinola, INSA-JRD-TATA Fellow, visiting during 13 May 2022 - 12 July 2022, mentored by Prof. P. Predeep, Physics Department.",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "Open-house with the visiting Professor Dr. Thomas Goetz from Koblenz University Germany for aspirants of NITC community to forge academic relations or higher studies in Madhava Hall in Mathematics  during 3 - 4 pm on 5/5/2022",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "As a result of the research collaborations of NITC researchers in CSED with MVRCCRI and Maastricht University,  Clinical Data Scientist and Medical Physicist Dr. Andre Dekker and his colleague Dr. Leonard Wee of Maastricht University/Maastro Clinic, Netherlands, are visiting NITC on 26th May 2022 (Thursday), along with researchers from MVR Cancer Centre. We hosted the visitors 10:15 AM - 12:30 PM at the Senate Hall in the new administrative block.",
      imgSrc: "",
      imgAlt: "",
    },
  ];
  return (
    <div className="py-7 px-1 mx-auto max-w-7xl">
      <ListWithImage heading={"Our Activities"} list={activitiesList} />
    </div>
  );
}
