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
    <div className="col-2 p-2">
      <div className="btn-group ">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Type
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Action
          </a>
        </div>
      </div>
    </div>
  </div>
);
