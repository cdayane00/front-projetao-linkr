import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  height: 100vh;

  background-color: var(--bg-secondary);
  padding: 0 140px;

  h1 {
    font-size: 106px;
  }

  p {
    color: var(--text-primary);
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    line-height: 1.3em;
  }
`;
