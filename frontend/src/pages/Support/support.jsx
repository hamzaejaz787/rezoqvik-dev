import "./support.css";

const Support = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="support__container">
        <h3 className="support__container-title">
          Experiencing any problems? <br /> We'd love to help via Email or Call!
        </h3>

        <form
          encType="multipart/form-data"
          className="support__container_form"
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">
              Your Name *
              <input type="text" name="name" required />
            </label>
            <label htmlFor="number">
              Your Phone Number *
              <input type="number" name="phone" required />
            </label>

            <label htmlFor="email">
              Your Email
              <input type="email" name="email" />
            </label>

            <label htmlFor="subject">
              Subject
              <input type="text" name="subject" />
            </label>

            <label htmlFor="message">
              Your Message
              <textarea name="message"></textarea>
            </label>
          </div>
          <button className="support-btn btn">Send</button>
        </form>
      </section>
    </>
  );
};

export default Support;
