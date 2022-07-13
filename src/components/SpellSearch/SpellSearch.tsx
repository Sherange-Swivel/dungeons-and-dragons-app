import React, { useState } from "react";
import { SpellSearchInterface } from "../../types/spellSearchInterface";

const SpellSearch = (props: SpellSearchInterface) => {
  const { handleSearch } = props;
  const [input, setInput] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleSearch(input);
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
          className="search-input"
          onChange={handleChange}
        />
        <button className="search-button">Search Spell</button>
      </form>
    </div>
  );
};

export default SpellSearch;
