function Input() {
  return (
    <div id="input-container">
      <form  id="gym-search-form">
        <input
          type="text"
          name="gym-search"
          id="search-input"
          placeholder="Search for gyms near you..."
        />
        <button type="submit" id="search-button">
          🔍
        </button>
      </form>
    </div>
  );
}
export default Input;
