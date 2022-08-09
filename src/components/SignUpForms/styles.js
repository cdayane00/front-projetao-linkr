import styled from "styled-components";

export const Container = styled.section`
  flex-basis: 600px;
  min-width: 414px;

  padding: 0 54px;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-family: "Lato", sans-serif;
    color: var(--text-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
