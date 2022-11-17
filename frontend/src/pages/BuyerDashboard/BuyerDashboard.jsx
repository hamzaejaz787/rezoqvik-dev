/* eslint-disable no-unused-vars */
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
} from "./import";
import "./buyer-dashboard.css";

const BuyerDashboard = () => {
  return (
    <>
      {" "}
      <section className="buyer__dashboard">
        <img src={programming} alt="" className="buyer__dashboard-cover-img" />

        <img src={userOne} alt="" className="buyer__dashboard_user-img" />

        <div className="buyer__dashboard_text-wrapper">
          <h4 className="buyer__dashboard-name">User Name</h4>
          <small className="buyer__dashboard-title">Web Developer</small>

          {/* SOCIAL MEDIA ICONS */}
          <div className="buyer__dashboard_icons">
            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a href={"https://instagram.com"} target="_blank" rel="noreferrer">
              <FaInstagram size={24} />
            </a>
            <a
              href={"https://www.linkedin.com/"}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href={"https://web.whatsapp.com/"}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a href={"https://twitter.com/"} target="_blank" rel="noreferrer">
              <FaTwitter size={24} />
            </a>
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
        <div className="buyer__dashboard_info">
          <div className="buyer__dashboard_info-card">
            <FaPhoneAlt size={24} style={{ fill: "url(#purple-gradient)" }} />
            <div className="buyer__dashboard_info-card-text">
              <small>Mobile Number</small>
              <h3>+92 321 123123</h3>
            </div>
          </div>
          <div className="buyer__dashboard_info-card">
            <FaBirthdayCake
              size={24}
              style={{ fill: "url(#purple-gradient)" }}
            />
            <div className="buyer__dashboard_info-card-text">
              <small>Date of Birth</small>
              <h3>17 April 1997</h3>
            </div>
          </div>
          <div className="buyer__dashboard_info-card">
            <IoMdMail size={24} style={{ fill: "url(#purple-gradient)" }} />
            <div className="buyer__dashboard_info-card-text">
              <small>E-mail address</small>
              <h3>current@email.com</h3>
            </div>
          </div>
          <div className="buyer__dashboard_info-card">
            <HiLocationMarker
              size={24}
              style={{ fill: "url(#purple-gradient)" }}
            />

            <div className="buyer__dashboard_info-card-text">
              <small>Location</small>
              <h3>Karachi - Pakistan</h3>
            </div>
          </div>
          <div className="buyer__dashboard_info-card">
            <AiFillIdcard size={24} style={{ fill: "url(#purple-gradient)" }} />

            <div className="buyer__dashboard_info-card-text">
              <small>CNIC</small>
              <h3>37405-1234567-8</h3>
            </div>
          </div>
          <div className="buyer__dashboard_info-card">
            <RiParentLine size={24} style={{ fill: "url(#purple-gradient)" }} />

            <div className="buyer__dashboard_info-card-text">
              <small>Father Name</small>
              <h3>Lorem ipsum</h3>
            </div>
          </div>
        </div>
      </section>
      {/* APPOINTMENT SECTION */}
      <section className="buyer__dashboard_appointment">
        <h2 className="buyer__dashboard_appointment-heading heading">
          Make an appointment
        </h2>

        <Appointment />
      </section>
      {/* COMPONENTS */}
      <Services />
      <Gallery />
      <Products />
      <Testimonials />
      <section className="buyer__dashboard_contact">
        <h2 className="buyer__dashboard_contact-heading heading">Location</h2>
        <Map />
      </section>
    </>
  );
};

export default BuyerDashboard;
