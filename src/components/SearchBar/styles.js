import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const Search = styled.div`
  height: 160px;
  max-width: 603px;
  width: 70%;
  position: absolute;
  top: 54px;
  right: calc(var(--width-body) * 0.2775);

  flex-shrink: 1;

  background-color: var(--bg-white);
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  color: var(--text-search-bar);
  box-sizing: border-box;
  padding: 12px;
  outline: 0;
  border-radius: 0 0 8px 8px;
  border: none;

  &::placeholder {
    color: var(--search-bar);
  }

  @media (max-width: 650px) {
    max-width: unset;
    width: 100%;

    font-size: 17px;
  }
`;

export const SearchForms = styled.form`
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 30px;

  @media (max-width: 650px) {
    display: ${(props) => (props.isMobile ? "flex" : "none")};
    padding: 0 15px;
  }
`;

export const SearchInput = styled(DebounceInput)`
  height: 45px;
  max-width: 560px;
  width: 70%;
  position: relative;

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

  @media (max-width: 650px) {
    max-width: unset;
    width: 100%;

    font-size: 17px;
  }
`;

export const Searchinput = styled.div`
  input {
    height: 45px;
    max-width: 560px;
    width: 100%;

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

    @media (max-width: 650px) {
      max-width: unset;
      width: 100%;

      font-size: 17px;
    }
  }
`;

export const SearchButton = styled.button`
  width: 43px;
  height: 45px;
  border: none;
  border-radius: 0 8px 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-white);
`;

export const SearchIcon = styled(IoSearchOutline)`
  font-size: 21px;
  color: var(--search-bar);

  flex-shrink: 0;
`;
