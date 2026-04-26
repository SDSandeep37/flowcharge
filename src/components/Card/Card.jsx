import "./card.css";
import { Link } from "react-router-dom";
const Card = ({ title, description, buttonText, path }) => {
  return (
    <div className="card">
      <h2 className="cardTitle">{title || "Card Title"}</h2>
      <p className="cardDescription">
        {description || "Card description goes here."}
      </p>
      <button className="cardButton">
        <Link to={path} style={{ color: "var(--color-text)" }}>
          {buttonText || "Click Me"}
        </Link>
      </button>
    </div>
  );
};

export default Card;
