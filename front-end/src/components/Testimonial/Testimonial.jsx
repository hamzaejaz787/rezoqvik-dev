import "./testimonial.css";

const Testimonial = ({
  reviewerImage,
  reviewerName,
  reviewerTitle,
  reviewerAbout,
}) => {
  return (
    <>
      <div className="testimonial__card">
        <div className="testimonial__card-user">
          <img src={reviewerImage} alt="" className="testimonial__card-image" />

          <div className="testimonial__card-user-text">
            <h4>{reviewerName}</h4>
            <span>- {reviewerTitle}</span>
          </div>
        </div>

        <p>{reviewerAbout}</p>
      </div>
    </>
  );
};

export default Testimonial;
