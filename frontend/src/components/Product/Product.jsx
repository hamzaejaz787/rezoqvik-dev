import "./product.css";

const Product = ({
  productImage,
  productName,
  productDescription,
  productPrice,
}) => {
  return (
    <div className="product__card">
      <img
        src={productImage}
        alt=""
        className="product__card-image"
        loading="lazy"
      />

      <h4 className="product__card-title">{productName}</h4>
      <p className="product__card-text">{productDescription}</p>
      <small className="product__card-price">${productPrice}</small>
    </div>
  );
};

export default Product;
