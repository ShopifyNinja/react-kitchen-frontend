import React from "react";
import { FormGroup, Input } from "reactstrap";

function SearchBar({ onSearch, placeholder }) {
  return (
    <FormGroup className="m-0">
      <Input
        type="search"
        placeholder={placeholder || "Search by name..."}
        className="search-bx"
        onChange={onSearch}
      />
    </FormGroup>
  );
}

export default SearchBar;
