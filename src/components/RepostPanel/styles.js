import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 100%;
  border-radius: 16px 16px 0 0;

  padding: 0 15px 20px 15px;
  margin-bottom: -20px;

  display: flex;
  align-items: center;
  gap: 6px;

  background-color: var(--bg-re-post-panel);

  @media (max-width: 650px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const RepostIconPanel = styled.svg`
  cursor: default;
`;

export const RepostedBy = styled.span`
  font-size: 11px;
  font-family: "Lato", sans-serif;
  color: var(--text-primary);

  a {
    font-size: 11px;
    font-family: "Lato", sans-serif;
    color: var(--text-primary);

    text-decoration: none;

    &:hover {
      color: var(--link-hover);
    }
  }
`;
