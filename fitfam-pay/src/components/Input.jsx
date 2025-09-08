import { useState } from "react";

function Input({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return; // ✅ prevent empty search
    onSearch(searchQuery);
  };

  return (
    <div id="input-container">
      <form id="gym-search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="gym-search"
          id="search-input"
          placeholder="Search for gyms near you..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" id="search-button">
          🔍
        </button>
      </form>
    </div>
  );
}

export default Input;
