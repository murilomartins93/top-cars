import "./styles.css";

function SearchBar() {
  return (
    <>
      <form className="tc-search-bar">
        <input type="text" placeholder="Digite sua busca" />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}

export default SearchBar;
