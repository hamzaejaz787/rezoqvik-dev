/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <a href="#">Carpenter</a>
          </div>
          <div className="icon_wrapper">
            <img src={cleaner} alt="cleaner" />
            <a href="#">Cleaner</a>
          </div>
          <div className="icon_wrapper">
            <img src={electrician} alt="electrician" />
            <a href="#">Electrician</a>
          </div>
          <div className="icon_wrapper">
            <img src={painter} alt="painter" />
            <a href="#">Painter</a>
          </div>
          <div className="icon_wrapper">
            <img src={plumber} alt="plumber" />
            <a href="#">Plumber</a>
          </div>
          <div className="icon_wrapper icon-others">
            <BsThreeDots className="dots" /> <a href="#">Others</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
