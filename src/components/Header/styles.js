import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";

const Navbar = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  h2 {
    font-size: 49px;
  }

  .user {
    width: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding: 11px;
    outline: 0;
    ::placeholder {
      color: var(--search-bar);
    }
  }
`;

const Outerbox = styled.div`
  width: 150px;
  height: 47px;
  background-color: var(--bg-timeline-posts);
  position: absolute;
  top: 72px;
  right: 0px;
  p {
    font-size: 17px;
    color: var(--text-primary);
  }
`;

const Chevron = styled(IoChevronDown)`
  width: 18.38px;
  height: 12.38px;
  fill: var(--bg-white);
`;

const MainTitle = styled.div`
  width: 100vw;
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentTitle = styled.div`
  width: 937px;
  h3 {
    font-size: 43px;
  }
`;
export { Navbar, Chevron, Outerbox, MainTitle, ContentTitle };
