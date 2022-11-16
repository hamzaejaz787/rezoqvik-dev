import webDesign from "../../assets/web-design.jpeg";
import play from "../../assets/play.png";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <section className="user__gallery">
        <h2 className="user__gallery-heading heading">Gallery</h2>

        <div className="user__gallery_container">
          <div className="user__gallery_container-item">
            <img src={play} alt="" className="play-btn" />
            <img src={webDesign} alt="" />
          </div>
          <div className="user__gallery_container-item">
            <img src={webDesign} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
