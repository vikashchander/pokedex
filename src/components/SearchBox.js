import React from "react";
import { Input } from "semantic-ui-react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <Input focus placeholder={placeholder} onChange={handleChange} />
);
