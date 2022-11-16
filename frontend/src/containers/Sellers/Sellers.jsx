import Seller from "../../components/Seller/Seller";
import { userOne, userTwo, userThree, userFour } from "./imports";
import "./sellers.css";

const sellersData = [
  {
    sellerImage: userOne,
    sellerName: "Rachel Weisz",
    sellerTitle: "Web Developer",
  },
  {
    sellerImage: userTwo,
    sellerName: "Rachel Weisz",
    sellerTitle: "Web Developer",
  },
  {
    sellerImage: userThree,
    sellerName: "Rachel Weisz",
    sellerTitle: "Web Developer",
  },
  {
    sellerImage: userFour,
    sellerName: "Rachel Weisz",
    sellerTitle: "Web Developer",
  },
];

const Sellers = () => {
  return (
    <>
      <section className="sellers__container">
        <h3 className="sellers__container-title">Top Rated Profiles</h3>

        <div className="sellers__container-cards">
          {sellersData.map((item, index) => (
            <Seller
              sellerImage={item.sellerImage}
              sellerName={item.sellerName}
              sellerTitle={item.sellerTitle}
              key={item.title + index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Sellers;
