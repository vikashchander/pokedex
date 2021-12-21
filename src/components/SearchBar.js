import React from "react";
import { Input } from "semantic-ui-react";
import { Button } from 'semantic-ui-react'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="input-group">
        <Input focus placeholder="Seach Pokemon" />
        <Button content="Seach " />
      </div>
    );
  }
}

export default SearchBar;
