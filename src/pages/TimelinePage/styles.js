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

export { Main, Content, Feed };
