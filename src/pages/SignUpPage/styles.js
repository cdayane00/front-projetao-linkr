import styled from "styled-components";

export const Main = styled.main`
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
