import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Sellers from "../../containers/Sellers/Sellers";
import Categories from "../../containers/Categories/Categories";

import "./home.css";

const Home = () => {
  const { user, seller } = useSelector((state) => state.auth);

  const data = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {user || seller ? (
        <>
          {data.role === "buyer" ? (
            <>
              <section className="intro__container_logged">
                <h1 className="intro__container-title">Find Your Worker</h1>
                <p className="intro__container-text">
                  Connecting you to over 100,000 professionals around Pakistan
                </p>
              </section>
              <Sellers />
              <Categories />
            </>
          ) : (
            <>
              <section className="intro__container_logged">
                <Categories />
              </section>
            </>
          )}
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
