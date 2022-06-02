import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input
        onChange={searchChange}
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
};

export default Searchbox;
