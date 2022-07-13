import React, { useState } from "react";

const SpellSearch = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Spell"
          value={input}
          name="text"
          className="search-input"
          onChange={handleChange}
        />
        <button className="search-button">Search Spell</button>
      </form>
    </div>
  );
};

export default SpellSearch;
