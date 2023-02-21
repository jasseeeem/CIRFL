import Landing from "../components/Landing";
import Banner from "../components/Banner";
import PhotoText from "../components/PhotoText";

export default function Home() {
  return (
    <div className="py-7 px-1 mx-auto max-w-7xl ">
      <div className="flex flex-col">
        <Landing />
        <Banner />
        <div className="mt-16">
          <PhotoText
            heading1="Our Mission"
            paragraph1="Secure a niche for NITC in the global educational paradigm, foster healthy international collaboration to facilitate research and learning of global standards and support a vigorous
international exchange of academia and scholastic talent"
            imgSrc="nitc-amphitheater.jpg"
            heading2="Our Vision"
            paragraph2="Mobilise, Collaborate and Transpire Global Educational/Academic Exchange"
            alt="An image of the board in front of NITC"
          />
        </div>
      </div>
    </div>
  );
}
