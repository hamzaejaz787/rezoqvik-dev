import imgOne from "../../assets/18.jpg";
import imgTwo from "../../assets/18.jpg";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reviews = [
  {
    reviewerImage: imgOne,
    reviewerName: "Shane Watson",
    reviewerTitle: "CEO at Tarsons",
    reviewerAbout:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam porro incidunt nisi voluptas, ea libero fugit.",
  },
  {
    reviewerImage: imgTwo,
    reviewerName: "Rachel Weisz",
    reviewerTitle: "Web Developer at Tarsons",
    reviewerAbout:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam porro incidunt nisi voluptas, ea libero fugit.",
  },
];

const Testimonials = () => {
  return (
    <section className="user__testimonials">
      <h2 className="user__testimonials-heading heading">Reviews</h2>

      <div className="user__testimonials-wrapper">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
        >
          {reviews.map((item, index) => (
            <Testimonial
              reviewerImage={item.reviewerImage}
              reviewerName={item.reviewerName}
              reviewerTitle={item.reviewerTitle}
              reviewerAbout={item.reviewerAbout}
              key={item.title + index}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
