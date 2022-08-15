import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchForms,
  SearchInput,
  SearchButton,
  SearchIcon,
  Search,
  SearchResultsContainer,
} from "./styles";
import { getUsersByName } from "../../services/api";

export default function SearchBar({ isMobile }) {
  const [search, setSearch] = useState(null);
  const [displayValue, setDisplayValue] = useState("");

  async function getUserByname(userName) {
    try {
      const promise = await getUsersByName(userName);
      setSearch(promise.data);
      console.log(setSearch);
      console.log(search);
    } catch (erro) {
      console.log(erro);
    }
  }

  const handleChange = (event) => {
    setDisplayValue(event.target.value);
    getUserByname(event.target.value);
  };

  function renderSearchResultsContainer() {
    if (search) {
      return (
        <SearchResultsContainer>
          {search &&
            search?.user?.map((users) => (
              <Search key={users.id}>
                <Link to={`/user/${users.id}`}>
                  <img src={users.photo} alt={users.name} />
                  {users.name}
                </Link>
              </Search>
            ))}
        </SearchResultsContainer>
      );
    }
    return null;
  }

  const searchResult = renderSearchResultsContainer();

  return (
    <SearchForms isMobile={isMobile}>
      <SearchInput
        placeholder="Search for people and friends"
        value={displayValue}
        minLength={3}
        debounceTimeout={300}
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
      {searchResult}
    </SearchForms>
  );
}
