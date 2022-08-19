import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const SearchForms = styled.form`
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  width: 100%;

  --size-desktop: 70%;
  --size-mobile: calc(100% - 30px);

  padding: 0 30px;

  position: relative;

  @media (max-width: 650px) {
    display: ${(props) => (props.isMobile ? "flex" : "none")};
    padding: 0 15px;

    z-index: 4;
  }
`;

export const SearchInput = styled(DebounceInput)`
  height: 45px;
  max-width: 560px;
  width: 70%;

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

export const SearchResultsContainer = styled.div`
  height: auto;
  max-height: 230px;
  max-width: 603px;
  width: var(--size-desktop);
  padding: 15px 0 10px 0;

  overflow: scroll;
  overflow-x: hidden;

  top: 38px;
  z-index: -1;

  flex-shrink: 1;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  position: absolute;

  gap: 15px;
  background-color: #e7e7e7;
  // background-color: var(--search-bar);

  opacity: 1;
  border-radius: 0 0 8px 8px;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  @media (max-width: 650px) {
    width: var(--size-mobile);
  }
`;

export const Search = styled.div`
  padding: 0 12px;

  .search-input {
    font-family: "Lato";
    font-weight: 400;
    font-size: 19px;
    color: var(--text-search-bar);
    text-decoration: none;

    display: flex;
    align-items: center;

    gap: 12px;

    p {
      font-size: 19px;
      color: #c5c5c5;

      @media (max-width: 650px) {
        font-size: 14px;
      }
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;

      object-fit: cover;

      @media (max-width: 650px) {
        width: 30px;
        height: 30px;
        aspect-ratio: 1/1;
        margin: unset;

        font-size: 17px;
      }
    }

    @media (max-width: 650px) {
      align-items: center;
    }
  }

  &::placeholder {
    color: var(--search-bar);
  }
`;
