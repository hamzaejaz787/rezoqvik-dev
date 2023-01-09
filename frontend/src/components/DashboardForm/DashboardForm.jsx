import { useState } from "react";
import Select from "react-select";
import DashboardCard from "./DashboardCard/DashboardCard";
import DashboardUpload from "./DashboardUpload/DashboardUpload";
import "./dashboard-form.css";

const DashboardForm = ({
  userBackground,
  userImage,
  userName,
  userTitle,
  userLocation,
}) => {
  const [value, setValue] = useState("");
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const changeHandler = (value) => {
    setValue(value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#fff" : "#000",
      background: state.isFocused
        ? "linear-gradient(to right, #f05f7a, #a83f87)"
        : "transparent",
      padding: 10,
      cursor: "pointer",
    }),
  };
  return (
    <>
      <section className="dashboard__form">
        <div className="dashboard__form_container">
          <h3 className="form-title">General Information</h3>

          <form className="dashboard__form_container-form">
            <label className="form-label">
              First Name
              <input
                type="text"
                className="form-input"
                placeholder="First name"
              />
            </label>

            <label className="form-label">
              Last Name
              <input
                type="text"
                className="form-input"
                placeholder="Last name"
              />
            </label>

            <label className="form-label">
              Father Name
              <input
                type="text"
                className="form-input"
                placeholder="Father name"
              />
            </label>

            <label className="form-label">
              CNIC Number
              <input
                type="number"
                className="form-input"
                placeholder="37405-12345678-9"
              />
            </label>

            <label className="form-label">
              Date of Birth
              <input type="date" className="form-input form-date" />
            </label>

            <label className="form-label">
              Gender
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                styles={customStyles}
                isSearchable={true}
              />
            </label>

            <label className="form-label">
              Email
              <input
                type="email"
                className="form-input"
                placeholder="example@mail.com"
              />
            </label>

            <label className="form-label">
              Cell Number
              <input
                type="number"
                className="form-input"
                placeholder="+92-321-12345678"
              />
            </label>
          </form>

          <h3 className="form-title address-title">Address</h3>
          <form className="dashboard__form_container-form">
            <label className="form-label" id="address">
              Address
              <input
                type="text"
                className="form-input"
                placeholder="Enter your address"
              />
            </label>
            <label className="form-label">
              ZIP/Postal Code
              <input type="number" className="form-input" placeholder="12345" />
            </label>
            <label className="form-label">
              City
              <input type="text" className="form-input" placeholder="City " />
            </label>
            <label className="form-label">
              Province/Region
              <input
                type="text"
                className="form-input"
                placeholder="Province/Region"
              />
            </label>
            <label className="form-label">
              Country
              <input type="text" className="form-input" placeholder="Country" />
            </label>
          </form>

          <button className="form-btn btn">Update</button>
        </div>

        <div className="dashboard__aside">
          <DashboardCard
            userBackground={userBackground}
            userImage={userImage}
            userName={userName}
            userTitle={userTitle}
            userLocation={userLocation}
          />

          <div className="dashboard__aside_display">
            <DashboardUpload />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardForm;
