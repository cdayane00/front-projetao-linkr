import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import {
  SearchForms,
  SearchInput,
  SearchButton,
  SearchIcon,
  Search,
  SearchResultsContainer,
} from "./styles";
import { getUsersByName } from "../../services/api";
import { useLocalStorage } from "../../utils/hooks";

export default function SearchBar({ isMobile }) {
  const [userData] = useLocalStorage("linkrUserData", "");
  const [search, setSearch] = useState(null);
  const [displayValue, setDisplayValue] = useState("");
  const navigate = useNavigate();
  async function getUserByname(event, userName) {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    try {
      const promise = await getUsersByName(userName, config);
      setSearch(promise.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  const handleChange = (event) => {
    setDisplayValue(event.target.value);
    console.log(displayValue);
    getUserByname(event, event.target.value);
    console.log(displayValue.length);
    console.log(search);
  };
  const reset = () => {
    setDisplayValue("");
  };

  function renderSearchResultsContainer(searchArray, inputValue) {
    if (searchArray && inputValue.length > 0) {
      return (
        <SearchResultsContainer>
          {searchArray &&
            searchArray?.user?.map((users) => (
              <Search
                key={users.id}
                onClick={() => {
                  reset();
                  navigate(`/user/${users.id}`);
                }}
              >
                <div className="search-input">
                  <img src={users.photo} alt={users.name} />
                  {users.name}
                  {!!users.isFollowing && <p> • following</p>}
                </div>
              </Search>
            ))}
        </SearchResultsContainer>
      );
    }
    return null;
  }

  const searchResult = renderSearchResultsContainer(search, displayValue);

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
