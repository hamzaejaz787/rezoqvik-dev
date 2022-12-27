import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./home.css";
import Sellers from "../../containers/Sellers/Sellers";
import Categories from "../../containers/Categories/Categories";

const Home = () => {
  const { user, seller } = useSelector((state) => state.auth);

  return (
    <>
      {user || seller ? (
        <>
          <section className="intro__container_logged">
            <h1>Logged In Content</h1>
          </section>
        </>
      ) : (
        <>
          <section className="intro__container">
            <h1 className="intro__container-title">Get. Work. Done.</h1>
            <p className="intro__container-text">
              Connecting you to over 100,000 professionals around Pakistan
            </p>
            <Link to="/login" className="intro-cta btn">
              Get connected
            </Link>
          </section>

          <Sellers />
          <Categories />
        </>
      )}
    </>
  );
};

export default Home;
