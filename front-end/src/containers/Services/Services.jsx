import { MdOutlineWeb, MdOutlinePhotoCamera } from "react-icons/md";
import "./services.css";

const Services = () => {
  return (
    <>
      <section className="user__services">
        <h2 className="user__services-heading heading">My services</h2>

        <div className="user__services_container">
          <MdOutlineWeb
            style={{
              fill: "url(#purple-gradient)",
            }}
          />

          <div className="user__services_container-text">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              molestias autem dignissimos tempora ipsam vitae numquam
              exercitationem.
            </p>
          </div>
        </div>

        <div className="user__services_container">
          <MdOutlinePhotoCamera
            style={{
              fill: "url(#purple-gradient)",
            }}
          />

          <div className="user__services_container-text">
            <h4>Photography</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              molestias autem dignissimos tempora ipsam vitae numquam
              exercitationem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
