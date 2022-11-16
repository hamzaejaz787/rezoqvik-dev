import "./appointment.css";

const Appointment = () => {
  return (
    <div className="appointment__container">
      <div className="appointment__container-dates">
        <span>Date</span>
        <input
          type="text"
          onChange={(e) => console.log(e.target.value)}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          placeholder="Pick a Date"
        />
      </div>

      <div className="appointment__container-timings">
        <span>Hour</span>

        <div className="appointment__container-timings-wrapper">
          <button>08:10 - 20:00</button>

          <button>06:10 - 18:00</button>

          <button>10:00 - 22:00</button>

          <button>20:00 - 08:00</button>
        </div>
      </div>

      <button className="appointment-btn btn">Make an Appointment</button>
    </div>
  );
};

export default Appointment;
