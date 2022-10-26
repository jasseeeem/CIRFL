import ListWithImage from "../components/ListWithImage";
export default function Counselling() {
  const counsellingList = [
    {
      text: "NITC Students and Researchers who need specific inputs regarding international collaborations, exchange programmes and scope for higher education in foreign universities may contact and enter their details in the corresponding form.",
      imgSrc: "",
      imgAlt: "",
    },
  ];
  return (
    <div className="py-7 px-1 mx-auto max-w-7xl">
      <ListWithImage heading={"Counselling"} list={counsellingList} />
    </div>
  );
}
