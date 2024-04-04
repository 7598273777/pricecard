import PropTypes from "prop-types";

export default function PriceCard(props = {}) {
  const { title, price, btnText,items} = props;
  return (
  
  <div className="card">
      <h2 className="title">{title}</h2>
      <div className="price">{price}</div>     
      <ul className="features">
        {items.map((element, index) => (
          <p key={index}>
            {element.isAvailable ? "✅" : "❌"} {element.name}
          </p>
        ))}
      </ul>
      <button className="btn">{btnText}</button>
  </div>
    
  );
}
