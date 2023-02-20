import "./styles.css";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard"

function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="catalog-cards-section" className="tc-container">
          <SearchBar />
          <div className="tc-catalog-cards">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default Catalog;
