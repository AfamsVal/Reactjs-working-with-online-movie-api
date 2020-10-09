import React, { useState } from "react";

const Search = (props) => {
  const [name, setName] = useState("");
  const inputHandle = (e) => {
    e.preventDefault();
    setName(e.target.value);
    props.name(e.target.value);
  };
  return (
    <div className="col-12">
      <div className="form-group">
        <input
          type="text"
          className="form-control text-center font-weight-bold"
          placeholder="Search for a character..."
          // autoFocus
          value={name}
          onChange={inputHandle}
        />
      </div>
    </div>
  );
};

export default Search;
