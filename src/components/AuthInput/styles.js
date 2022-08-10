import styled from "styled-components";

export const Input = styled.input`
  width: 100%;

  background-color: var(--bg-white);

  color: var(--text-on-white);
  font-size: 27px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;

  border: none;
  border-radius: 6px;

  padding: 13px 17px;

  &::placeholder {
    color: var(--text-placeholder);
  }

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
