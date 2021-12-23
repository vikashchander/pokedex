import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div class="form-outline">
    <input
      onChange={handleChange}
      type="text"
      id="typeText"
      class="form-control"
    />
    <label class="form-label" for="typeText">
      {placeholder}
    </label>
  </div>
);
