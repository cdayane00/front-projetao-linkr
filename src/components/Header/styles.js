import styled from "styled-components";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";

const Navbar = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  box-sizing: border-box;
  padding: 0 17px 0 20px;
  z-index: 2;
  background-color: var(--bg-secondary);

  a {
    text-decoration: none;
  }
  h2 {
    font-size: 49px;
  }

  .user {
    width: 102px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .popoverButton {
      background-color: var(--bg-secondary);
      outline: none;
    }
  }

  .user img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  input {
    width: 520px;
    height: 45px;
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
    ::placeholder {
      color: var(--search-bar);
    }
  }

  button {
    width: 43px;
    height: 45px;
    border: none;
    border-radius: 0 8px 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-white);
  }

  form {
    display: flex;
  }
`;

const Outerbox = styled.div`
  width: 150px;
  height: 47px;
  background-color: var(--bg-timeline-posts);
  position: absolute;
  border-radius: 0px 0px 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 72px;
  right: 0px;

  p {
    font-weight: 700;
    font-size: 17px;
    color: var(--text-primary);
    cursor: pointer;
  }
`;

const Chevron = styled(IoChevronDown)`
  font-size: 38px;
  color: var(--bg-white);
`;

const Search = styled(IoSearchOutline)`
  font-size: 21px;
  color: var(--text-placeholder);
`;
const MainTitle = styled.div`
  width: 100vw;
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin-top: 72px;
  background-color: var(--bg);
  z-index: 1;
`;

const ContentTitle = styled.div`
  width: 937px;
  h3 {
    font-size: 43px;
  }
  display: flex;
`;

const TitleContainer = styled.div`
  margin-right: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    object-fit: contain;
    margin-bottom: 20px;
  }
`;
export {
  Navbar,
  Chevron,
  Outerbox,
  MainTitle,
  ContentTitle,
  Search,
  TitleContainer,
};
