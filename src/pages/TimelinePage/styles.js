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
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
`;

const WarningContent = styled.div`
  width: 610px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 350px;
    height: 350px;
    margin: 0 auto;
  }
  h4 {
    font-family: "Lato";
    font-weight: 700;
    font-size: 22px;
    color: var(--text-publish);
  }

  .ghost {
    width: 550px;
  }
`;

export { Main, Content, Feed, WarningContent };
