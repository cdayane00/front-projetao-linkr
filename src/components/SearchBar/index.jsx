import React from "react";
import { SearchForms, SearchInput, SearchButton, SearchIcon } from "./styles";

export default function SearchBar() {
  return (
    <SearchForms>
      <SearchInput />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchForms>
  );
}
