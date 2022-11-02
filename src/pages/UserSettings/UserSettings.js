import { useState, useMemo } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./user-settings.css";
import Select from "react-select";
import countryList from "react-select-country-list";

const UserSettings = () => {
  const { currentUser } = useAuth();
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      color: state.isSelected ? "#000" : "rgb(65, 65, 65)",
      padding: 20,
      cursor: "pointer",
    }),

    container: (provided, state) => ({
      ...provided,
      width: "100%",
      border: !state.isFocused
        ? "1px solid rgba(0, 0, 0, 0.05)"
        : "1px solid #a83f8",
    }),
  };

  return (
    <>
      <h1 className="title">Update Profile</h1>

      <section className="user__settings_form-container">
        <div className="user__settings_form-register">
          <h3 className="register-title ">Registration Data</h3>

          <form className="user__settings_form">
            <label>
              First Name
              <input type="text" placeholder="First Name" />
            </label>

            <label>
              Last Name
              <input type="text" placeholder="Last Name" />
            </label>

            <label>
              Email
              <input type="email" placeholder={currentUser.email} />
            </label>

            <label>
              Password
              <input type="password" placeholder="Update Password" />
            </label>

            <label className="number-input">
              Phone Number
              <input type="number" placeholder="0321-1234567" />
            </label>

            <label>
              CNIC Number
              <input type="number" placeholder="37405-12345678-9" />
            </label>

            <label>
              Father Name
              <input type="text" placeholder="Father Name" />
            </label>

            <label>
              Date of Birth
              <input type="date" />
            </label>
          </form>

          <h3 className="register-title address-title">Address Data</h3>

          <form className="user__settings_form">
            <label>
              Address
              <input
                className="address"
                type="text"
                placeholder="123 Street Name"
              />
            </label>

            <label>
              City
              <input type="text" placeholder="City" />
            </label>

            <label>
              Province/State/Region
              <input type="text" placeholder="Province/State/Region" />
            </label>

            <label>
              Zip/Postal Code
              <input type="number" placeholder="123456" />
            </label>

            <label>
              Country
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                styles={customStyles}
              />
            </label>
          </form>

          <button className="form-btn btn">Update Profile</button>
        </div>
      </section>
    </>
  );
};

export default UserSettings;
