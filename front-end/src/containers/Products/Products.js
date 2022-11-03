import Product from "../../components/Product/Product";
import webDesign from "../../assets/web-design.jpeg";
import "./products.css";

const Products = () => {
  const userProducts = [
    {
      productImage: webDesign,
      productName: "Laptop",
      productDescription: "Dell Inspiron Core i3 11th Gen",
      productPrice: 200,
    },
    {
      productImage: webDesign,
      productName: "Laptop",
      productDescription: "Dell Inspiron Core i3 11th Gen",
      productPrice: 300,
    },
  ];

  return (
    <>
      <section className="user__products">
        <h2 className="user__products-heading heading">Products</h2>

        <div className="user__products-cards">
          {userProducts.map((item, index) => (
            <Product
              productImage={item.productImage}
              productName={item.productName}
              productDescription={item.productDescription}
              productPrice={item.productPrice}
              key={item.title + index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
