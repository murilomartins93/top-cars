import "./styles.css";
import carImg from "../../assets/car-card.png";
import Button from "../Button";

function CatalogCard() {
  return (
    <>
      <div>
        <div className="tc-catalog-card">
          <img src={carImg} />
          <h1>Audi Supra TT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default CatalogCard;
