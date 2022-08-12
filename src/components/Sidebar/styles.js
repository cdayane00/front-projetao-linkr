import styled from "styled-components";

const Wrapper = styled.div`
  width: 301px;
  border-radius: 16px;
  position: fixed;
  top: 232px;
  left: calc(var(--width-body) * 0.5 + 166px);

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 61px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: var(--bg-timeline-posts);
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid var(--border);
  h3 {
    font-size: 27px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 345px;
  box-sizing: border-box;
  padding: 22px 16px;
  background: var(--bg-timeline-posts);
  border-radius: 0 0 16px 16px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  a {
    font-family: "Lato";
    font-size: 19px;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.2em;
    letter-spacing: 0.05em;

    text-decoration: none;

    width: fit-content;
  }
`;

export { Wrapper, Title, Content };
