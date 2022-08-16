import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";

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
    :hover {
      color: #c6c6c6;
    }
    @media (max-width: 650px) {
      font-size: 45px;
    }
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

    @media (max-width: 650px) {
      width: unset;
    }
  }

  .user img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
    object-fit: contain;
    aspect-ratio: 1/1;

    @media (max-width: 650px) {
      width: 41px;
      height: 41px;
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
`;

const Outerbox = styled.div`
  width: 150px;
  height: 80px;
  background-color: var(--bg-timeline-posts);
  position: absolute;
  border-radius: 0px 0px 0px 20px;
  justify-content: center;
  align-items: center;
  top: 72px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .option {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
  }
  p {
    font-weight: 700;
    font-size: 17px;
    color: var(--text-primary);
    cursor: pointer;
    :hover {
      color: #c6c6c6;
  }
`;

const Chevron = styled(IoChevronDown)`
  font-size: 38px;
  color: var(--bg-white);

  @media (max-width: 650px) {
    font-size: 25px;
  }
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
  position: relative;
  h3 {
    font-size: 43px;

    @media (max-width: 1000px) {
      display: inline-block;
      width: 100%;
    }

    @media (max-width: 650px) {
      width: 100%;
      margin-top: 30px;
      margin-bottom: 15px;
      padding-left: 15px;

      font-size: 33px;
    }
  }

  @media (max-width: 1000px) {
    width: 611px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    object-fit: contain;
    margin-right: 20px;
    margin-left: 15px;

    @media (max-width: 650px) {
      width: 40px;
      height: 40px;
      border-radius: 26.5px;
      margin-top: 20px;
      margin-left: 15px;
      margin-right: 0px;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .user {
    display: flex;
    align-items: center;
  }

  .wrapper button {
    width: 112px;
    height: 31px;
    border-radius: 5px;
    font-family: "Lato";
    font-weight: 700;
    font-size: 14px;
    border: none;
    @media (max-width: 650px) {
      width: 90px;
      font-size: 12px;
      margin-top: 35px;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }

  .follow {
    background-color: var(--bg-button);
    color: var(--text-primary);
  }

  .unfollow {
    background-color: var(--bg-white);
    color: var(--text-blue);
  }

  .followers {
    position: absolute;
    bottom: -40px;
    right: 0px;
    @media (max-width: 650px) {
      display: none;
    }
  }
  p {
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0.04em;
  }
`;

export { Navbar, Chevron, Outerbox, MainTitle, ContentTitle };
