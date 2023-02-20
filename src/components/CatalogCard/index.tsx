import "./styles.css";
import carImg from "../../assets/car-card.png";

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
        </div>
      </div>
    </>
  );
}

export default CatalogCard;
