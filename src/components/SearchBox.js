import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="row ">
    <div className="col-5">
      <input
        type="text"
        onChange={handleChange}
        className="form-control m-2"
        placeholder={placeholder}
      ></input>
    </div>
  </div>
);
