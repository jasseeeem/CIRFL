export default function Activities({}) {
  const activitiesList = [
    "Coordinate bi-lateral research and academic programmes",
    "Facilitate MOUs between international universities & other research centres",
    "Stimulate a constructive environment for joint research projects for faculty members and international academics",
    "Encouraging Faculty & Student(s) exchange programmes",
    "Organise visits of academic and scientific experts from different parts of the world",
    "Arrange for in-house courses & programmes offered by visiting experts",
    "Offer open-elective courses in foreign languages to students",
    "Offer short-term intensive courses in foreign languages",
    "Mentor students to pursue international internships and apply for scholarships/fellowships",
  ];
  return (
    <div className="rounded-xl shadow-xl p-5">
      <h2 className="text-sky-700 text-3xl font-semibold mb-5 text-center">
        Functions / Activities
      </h2>
      <ul className="text-center">
        {activitiesList.map((activity, i) => {
          return <li key={i}>{activity}</li>;
        })}
      </ul>
    </div>
  );
}
