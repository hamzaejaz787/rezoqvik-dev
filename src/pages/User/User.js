/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

//Assets, Components & Containers
import {
  programming,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  FaPhoneAlt,
  FaBirthdayCake,
  IoMdMail,
  HiLocationMarker,
  AiFillIdcard,
  RiParentLine,
  userOne,
  Products,
  Services,
  Testimonials,
  Gallery,
  Map,
  Appointment,
} from "./imports";

//CSS import
import "./user.css";

const User = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <section className="user__container">
        <img src={programming} alt="" className="user__container-cover-img" />

        <img src={userOne} alt="" className="user__container_user-img" />

        <div className="user__container_text-wrapper">
          <h4 className="user__container-name">
            {!currentUser.displayName
              ? "Name not specified"
              : currentUser.displayName}
          </h4>
          <small className="user__container-title">Web Developer</small>

          {/* SOCIAL MEDIA ICONS */}
          <div className="user__container_icons">
            <Link>
              <FaFacebook size={24} />
            </Link>
            <Link>
              <FaInstagram size={24} />
            </Link>
            <Link>
              <FaLinkedinIn size={24} />
            </Link>
            <Link>
              <FaWhatsapp size={24} />
            </Link>
            <Link>
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>

        {/* Gradient color for icons */}
        <svg width="0" height="0">
          <linearGradient
            id="purple-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#f05f7a" offset="0%" />
            <stop stopColor="#a83f87" offset="100%" />
          </linearGradient>
        </svg>

        {/* CONTACT INFO */}
        <div className="user__container_info">
          <div className="user__container_info-card">
            <FaPhoneAlt size={24} style={{ fill: "url(#purple-gradient)" }} />
            <div className="user__container_info-card-text">
              <small>Mobile Number</small>
              <h3>+92 321 123123</h3>
            </div>
          </div>
          <div className="user__container_info-card">
            <FaBirthdayCake
              size={24}
              style={{ fill: "url(#purple-gradient)" }}
            />
            <div className="user__container_info-card-text">
              <small>Date of Birth</small>
              <h3>17 April 1997</h3>
            </div>
          </div>
          <div className="user__container_info-card">
            <IoMdMail size={24} style={{ fill: "url(#purple-gradient)" }} />
            <div className="user__container_info-card-text">
              <small>E-mail address</small>
              <h3>{currentUser.email}</h3>
            </div>
          </div>
          <div className="user__container_info-card">
            <HiLocationMarker
              size={24}
              style={{ fill: "url(#purple-gradient)" }}
            />

            <div className="user__container_info-card-text">
              <small>Location</small>
              <h3>Karachi - Pakistan</h3>
            </div>
          </div>
          <div className="user__container_info-card">
            <AiFillIdcard size={24} style={{ fill: "url(#purple-gradient)" }} />

            <div className="user__container_info-card-text">
              <small>CNIC</small>
              <h3>37405-1234567-8</h3>
            </div>
          </div>
          <div className="user__container_info-card">
            <RiParentLine size={24} style={{ fill: "url(#purple-gradient)" }} />

            <div className="user__container_info-card-text">
              <small>Father Name</small>
              <h3>Lorem ipsum</h3>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT SECTION */}
      <section className="user__appointment">
        <h2 className="user__appointment-heading heading">
          Make an appointment
        </h2>

        <Appointment />
      </section>

      {/* COMPONENTS */}
      <Services />
      <Gallery />
      <Products />
      <Testimonials />

      <section className="user__contact">
        <h2 className="user__contact-heading heading">Location</h2>
        <Map />
      </section>
    </>
  );
};

export default User;
