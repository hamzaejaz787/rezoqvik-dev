import { ImAttachment } from "react-icons/im";
import img from "../../../assets/18.jpg";
import "./dashboard-upload.css";

const DashboardUpload = () => {
  return (
    <>
      <div className="dashboard__upload">
        <h2 className="title">Select Profile Photo</h2>

        <div className="upload__container">
          <img src={img} alt="thumbnail" className="upload-thumbnail" />

          <div className="upload__container-items">
            <span className="upload-icon">
              <ImAttachment />
            </span>

            <input type="file" className="file-input" multiple={false} />

            <div className="upload__wrapper">
              <h6>Choose an Image</h6>

              <small>JPG, GIF or PNG. Max size of 800k</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUpload;
