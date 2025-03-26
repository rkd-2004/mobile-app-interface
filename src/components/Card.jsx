const Card = ({ title, price, image }) => {
    return (
      <div className="product-card">
        <img src={image} alt={title} />
        <div className="card-details">
          <h3>{title}</h3>
          <p>{price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default Card;