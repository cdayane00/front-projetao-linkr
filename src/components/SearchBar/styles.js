import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";

export const SearchForms = styled.form`
  display: flex;
  max-width: 520px;
  min-width: 300px;
`;

export const SearchInput = styled.input`
  height: 45px;

  flex-shrink: 1;

  background-color: var(--bg-white);
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  color: var(--text-search-bar);
  box-sizing: border-box;
  padding: 12px;
  outline: 0;
  border-radius: 8px 0 0 8px;
  border: none;

  &::placeholder {
    color: var(--search-bar);
  }
`;

export const SearchButton = styled.button``;

export const SearchIcon = styled(IoSearchOutline)`
  font-size: 21px;
  color: var(--text-placeholder);
`;
