import ListWithImage from "../components/ListWithImage";
export default function Collaborations() {
  const collaborationsList = [
    {
      points: [
        "An MoU between NIT Calicut and the Faculty of Information Technology and Electrical Engineering of the Norwegian University of Science and Technology (NTNU) was Signed on 10th December 2021 for 10 years. Dr Sudhish N George had led the MoU.",
        "A Sponsored Project titled  CapsNetwork - International Network for Capsule Imaging in Endoscopy funded by Research Council of Norway (RCN), Amount: 716 000 NOK, Starting Date: 29th Sep 2021, Duration: 5 years.",
      ],
    },
    {
      text: "Dr. M. Sankaralingam, Assistant Professor, Department of Chemistry had been invited by the Université Paris Cité, France, to work with Prof. Marc Robert, Department of Chemistry at  Université Paris Cité.",
    },
    {
      text: "Dr Vinay Joseph, Asst Professor, Department of Electronics and Communications Engineering and has a consultancy project with PhyTunes Inc USA which started in 2021 and is ongoing. The work is related to developing advanced wireless/wireline connectivity solutions.",
    },
  ];
  return (
    <div className="py-7 px-1 mx-auto max-w-7xl">
      <ListWithImage heading={"Collaborations"} list={collaborationsList} />
    </div>
  );
}
