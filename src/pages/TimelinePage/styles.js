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

const Sidebar = styled.div`
  width: 301px;
  height: 406px;
  background: var(--bg-timeline-posts);
  border-radius: 16px;
  position: fixed;
  top: 232px;
  left: calc(var(--width-body) * 0.5 + 166px); ;
`;
export { Main, Content, Feed, Sidebar };
