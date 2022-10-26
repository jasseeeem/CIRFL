import { publicRuntimeConfig } from "../next.config";
import ListWithImage from "../components/ListWithImage";
export default function About() {
  const mousList = [
    {
      text: "An MoU between NIT Calicut and the Faculty of Information Technology and Electrical Engineering of the Norwegian University of Science and Technology (NTNU) was Signed on 10th December 2021 for 10 years. Dr Sudhish N George had led the MoU.",
      imgSrc: "",
      imgAlt: "",
    },
    {
      text: "A Sponsored Project titled  CapsNetwork - International Network for Capsule Imaging in Endoscopy funded by Research Council of Norway (RCN), Amount: 716 000 NOK, Starting Date: 29th Sep 2021, Duration: 5 years.",
      imgSrc: "nitc-board.jpg",
      imgAlt: "An image of the sign board infront of NITC",
    },
    {
      text: "Dr. M. Sankaralingam, Assistant Professor, Department of Chemistry had been invited by the Université Paris Cité, France, to work with Prof. Marc Robert, Department of Chemistry at  Université Paris Cité.",
      imgSrc: "nitc-board.jpg",
      imgAlt: "An image of the sign board infront of NITC",
    },
    {
      text: "Dr Vinay Joseph, Asst Professor, Department of Electronics and Communications Engineering and has a consultancy project with PhyTunes Inc USA which started in 2021 and is ongoing. The work is related to developing advanced wireless/wireline connectivity solutions.",
      imgSrc: "",
      imgAlt: "",
    },
  ];
  return (
    <div className="py-7 px-1 mx-auto max-w-7xl">
      <ListWithImage heading={"MoUs and Collaborations"} list={mousList} />
    </div>
  );
}
