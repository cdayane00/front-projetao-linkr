import React from "react";
import { SearchForms, SearchInput, SearchButton, SearchIcon } from "./styles";

export default function SearchBar({ isMobile }) {
  return (
    <SearchForms isMobile={isMobile}>
      <SearchInput placeholder="Search for people and friends" />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchForms>
  );
}
