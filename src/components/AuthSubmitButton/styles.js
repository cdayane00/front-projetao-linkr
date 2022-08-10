import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--bg-button);

  color: var(--text-primary);
  font-size: 27px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;

  border: none;
  border-radius: 6px;

  padding: 10px;

  &:focus {
    outline: 2px solid var(--outline-blue);
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
