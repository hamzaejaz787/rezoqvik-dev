import { Link } from "react-router-dom";
import "./home.css";
import Sellers from "../../containers/Sellers/Sellers";

const Home = () => {
  return (
    <>
      <section className="intro__container">
        <h1 className="intro__container-title">Get. Work. Done.</h1>
        <p className="intro__container-text">
          Connecting you to over 100,000 professionals around Pakistan
        </p>
        <Link className="intro-cta btn">Get connected</Link>
      </section>

      <Sellers />
    </>
  );
};

export default Home;
