import React from "react";
import { SearchForms, SearchInput, SearchButton, SearchIcon } from "./styles";

export default function SearchBar() {
  return (
    <SearchForms>
      <SearchInput placeholder="Search for people and friends" />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchForms>
  );
}
