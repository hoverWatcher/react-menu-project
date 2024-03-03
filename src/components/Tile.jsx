const Tile = ({ image, title, description, price }) => {
  return (
    <li className="tile">
      <img className="food-img" src={image} alt={title} />
      <div className="col-right">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default Tile;
