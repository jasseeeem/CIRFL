import Card from "../components/Card";
import { publicRuntimeConfig } from "../next.config";

export default function Members() {
  const BASE_PATH = publicRuntimeConfig.BASE_PATH;
  const members = [
    {
      name: "Dr. Satyananda Panda",
      position: "Member",
      department: "Professor, MAT",
      imgSrc: "https://nitc.irins.org/assets/profile_images/53951.jpg",
    },
    {
      name: "Dr. Muniyandi Sankaralingam",
      position: "Member",
      department: "Professor, CHY",
      imgSrc: "https://nitc.irins.org/assets/profile_images/98109.jpg",
    },
    {
      name: "Dr. Sudhish N George",
      position: "Member",
      department: "Associate Professor, ECED",
      imgSrc:
        "https://media-exp1.licdn.com/dms/image/C5603AQH96bXbIk8PCw/profile-displayphoto-shrink_400_400/0/1517673930283?e=1669248000&v=beta&t=mP3YbT_LtO01YGr8JcMr_HFwfAX0kfR-EAQsl_65rWs",
    },
    {
      name: "Dr. Nikhil Sasidharan",
      position: "Member",
      department: "Assistant Professor, EED",
      imgSrc:
        "https://media-exp1.licdn.com/dms/image/C5603AQH68dH_jf7o1g/profile-displayphoto-shrink_400_400/0/1516800859522?e=1669248000&v=beta&t=oWKjhIbx2QaSlCSMsxe1JnfUVOupRFcpdbgs8sKMPNQ",
    },
    {
      name: "Dr. Pramada SK",
      position: "Member",
      department: "Assistant Professor, CED",
      imgSrc:
        "https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1870181.jpg",
    },
    {
      name: "Dr. Soney Varghese",
      position: "Member",
      department: "Associate Professor, SMSE",
      imgSrc:
        "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=6pHV-swAAAAJ&citpid=1",
    },
    {
      name: "Dr. Preeti Navaneeth",
      position: "Member",
      department: "Assistant Professor, SOMS",
      imgSrc: `${BASE_PATH}/preeti.jpg`,
    },
    {
      name: "Dr. Chandra Sekhar Bastha",
      position: "Member",
      department: "Assistant Professor, CHED",
      imgSrc:
        "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=lIpVAasAAAAJ&citpid=5",
    },
    {
      name: "Dr. Sujith Kumar CS",
      position: "Member",
      department: "Assistant Professor, MED",
      imgSrc:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH7I00_ib_o3Q/profile-displayphoto-shrink_400_400/0/1660496520077?e=1669248000&v=beta&t=LvC5PdKKQLQ4UNUcs09T6ns6Ugg5YVNHMAi7Sthjv5A",
    },
    {
      name: "Dr. Shyni Anilkumar",
      position: "Member",
      department: "Assistant Professor, DAP",
      imgSrc:
        "https://media-exp1.licdn.com/dms/image/C5603AQHq11WsdRyAIQ/profile-displayphoto-shrink_400_400/0/1647170090807?e=1669248000&v=beta&t=Xouv3MjumVGjdqTCdzhU1xmPhoBefaqwH2a7B5Pc1e0",
    },
    {
      name: "Dr. Arun Raj Kumar P",
      position: "Member",
      department: "Assistant Professor, CSED",
      imgSrc:
        "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=by5zZUYAAAAJ&citpid=3",
    },
  ];

  return (
    <div className="py-5 px-1 mx-auto max-w-7xl ">
      <h2 className="text-sky-700 text-3xl font-semibold text-center mb-5">
        Members
      </h2>
      <div className="flex flex-row gap-3 md:gap-7 justify-center pb-3 md:pb-7">
        <Card
          name="Dr. Ravi Varma M K"
          position="Chairperson"
          department="Professor, Physics"
          imgSrc="https://media-exp1.licdn.com/dms/image/C5603AQEH0QcwBdmFEg/profile-displayphoto-shrink_400_400/0/1598592582946?e=1669248000&v=beta&t=V0FMOjnN_oxK0uAZVwofwGWEHoj5D4TGwICMsU1JQKU"
          imgAlt={`Photo of Dr. Ravi Varma M K, Professor, Physics`}
        />
        <Card
          name="Dr. Baiju G Nair"
          position="Vice Chairperson"
          department="Associate Professor, SBT"
          imgSrc="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=Bl00JwcAAAAJ&citpid=4"
          imgAlt={`Photo of Dr. Baiju G Nair Associate Professor, SBT`}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-7 px-50">
        {members.map((member) => {
          return (
            <Card
              name={member.name}
              position={member.position}
              department={member.department}
              imgSrc={member.imgSrc}
              imgAlt={`Photo of ${member.name}, ${member.position}, ${member.department}`}
              key={member.name}
            />
          );
        })}
      </div>
    </div>
  );
}
