import styled from "styled-components";
import { IoHeartOutline } from "react-icons/io5";

const Card = styled.div`
  width: 611px;
  height: auto;
  box-sizing: border-box;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  background-color: var(--bg-timeline-posts);
  margin-bottom: 16px;
`;

const CardSide = styled.div`
  width: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    object-fit: contain;
    margin-bottom: 20px;
  }
`;

const CardDetails = styled.div`
  width: 502px;
  display: flex;
  flex-direction: column;
  gap: 7px;

  .user {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--text-primary);
    font-size: 19px;
  }

  .description {
    width: 100%;
    height: 52px;
    color: var(--text-post);
    font-size: 17px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .meta-data {
    width: 100%;
    height: 155px;
    background-color: pink;
    border: 1px solid var(--border);
    border-radius: 11px;
  }
`;
const Heart = styled(IoHeartOutline)`
  font-size: 20px;
  color: var(--text-primary);
`;

export { Card, CardSide, CardDetails, Heart };
