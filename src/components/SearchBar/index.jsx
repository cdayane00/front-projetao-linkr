import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchForms,
  SearchInput,
  SearchButton,
  SearchIcon,
  Search,
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
    // console.log(event.target.value);
    // console.log(displayValue);
  };

  return (
    <>
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
      </SearchForms>
      {search &&
        search?.user?.map((users) => (
          <Search>
            <Link to={`/user/${users.id}`}>
              <p>{users.name}</p>
              <img src={users.photo} alt={users.name} />
            </Link>
          </Search>
        ))}
    </>
  );
}
