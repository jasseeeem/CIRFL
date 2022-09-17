import "../styles/globals.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen font-sans px-8 overflow-hidden">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
