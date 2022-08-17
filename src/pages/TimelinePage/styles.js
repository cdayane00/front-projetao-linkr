import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Content = styled.div`
  width: 937px;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 232px;
  position: relative;

  @media (max-width: 1000px) {
    width: unset;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;

  .observer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
  h3 {
    font-family: "Lato";
    font-weight: 400;
    font-size: 22px;
    color: var(--text-publish);
    text-align: center;
    @media (max-width: 650px) {
      font-size: 18px;
      text-align: center;
    }
  }
`;

const WarningContent = styled.div`
  width: 610px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: unset;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
  img {
    width: 350px;
    height: 350px;
  }
  h3 {
    font-family: "Lato";
    font-weight: 700;
    font-size: 22px;
    color: var(--text-publish);
    text-align: center;

    @media (max-width: 650px) {
      font-size: 18px;
      text-align: center;
    }
  }

  .ghost {
    width: 550px;
  }
`;

export { Main, Content, Feed, WarningContent };
