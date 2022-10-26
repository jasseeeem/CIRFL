import PhotoText from "../components/PhotoText";
import Banner from "../components/Banner";
import Activities from "../components/Activities";

export default function About() {
  return (
    <div className="py-7 px-1 mx-auto max-w-7xl ">
      <div className="flex flex-col space-y-10">
        <PhotoText
          heading1="Our Vision"
          paragraph1="Mobilise, Collaborate and Transpire Global Educational/Academic Exchange"
          imgSrc="nitc-amphitheater.jpg"
          heading2="Our Mission"
          paragraph2="Secure a niche for NITC in the global educational paradigm, foster healthy international collaboration to facilitate research and learning of global standards and Support a vigorous international exchange of academia and scholastic talent"
          alt="An image of the board in front of NITC"
        />
        <Banner />
        <Activities />
      </div>
    </div>
  );
}
