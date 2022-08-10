import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  height: 100vh;

  background-color: var(--bg-secondary);
  padding: 0 100px 0 140px;

  h1 {
    font-size: 106px;

    @media (max-width: 768px) {
      font-size: 76px;
    }
  }

  p {
    color: var(--text-primary);
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    line-height: 1.3em;

    @media (max-width: 768px) {
      font-size: 23px;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    align-items: center;
    height: 175px;
  }
`;
