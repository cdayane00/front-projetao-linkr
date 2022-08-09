import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 937px;
  h3 {
    font-size: 43px;
    color: var(--text-primary);
  }
`;

export { Main, Content };
