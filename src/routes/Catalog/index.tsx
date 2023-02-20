import "./styles.css";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="catalog-cards-section" className="tc-container">
          <SearchBar />
          <h1>Test</h1>
        </section>
      </main>
    </>
  );
}

export default Catalog;
