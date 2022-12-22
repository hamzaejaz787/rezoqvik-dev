import { Link } from "react-router-dom";
import {
  carpenter,
  cleaner,
  electrician,
  painter,
  plumber,
  BsThreeDots,
} from "./imports";
import "./categories.css";

const Categories = () => {
  return (
    <>
      <section className="categories__container">
        <h3 className="categories__container-title">Services Offered</h3>

        <div className="categories__container_icons">
          <div className="icon_wrapper">
            <img src={carpenter} alt="carpenter" />
            <Link to="/login">Carpenter</Link>
          </div>
          <div className="icon_wrapper">
            <img src={cleaner} alt="cleaner" />
            <Link to="/login">Cleaner</Link>
          </div>
          <div className="icon_wrapper">
            <img src={electrician} alt="electrician" />
            <Link to="/login">Electrician</Link>
          </div>
          <div className="icon_wrapper">
            <img src={painter} alt="painter" />
            <Link to="/login">Painter</Link>
          </div>
          <div className="icon_wrapper">
            <img src={plumber} alt="plumber" />
            <Link to="/login">Plumber</Link>
          </div>
          <div className="icon_wrapper icon-others">
            <BsThreeDots className="dots" /> <Link to="/login">Others</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
