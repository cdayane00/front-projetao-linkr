import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import styled from "styled-components";

export const Heart = styled(IoHeartOutline)`
  font-size: 20px;
  color: var(--text-primary);

  cursor: pointer;
`;

export const HeartFilled = styled(IoHeartSharp)`
  font-size: 20px;
  fill: var(--heart);

  cursor: pointer;
`;

export const LikeCounter = styled.span`
  margin-top: 4px;
  font-size: 11px;
  color: var(--text-primary);

  font-family: "Lato", sans-serif;

  @media (max-width: 650px) {
    text-align: center;
    line-height: 1.2em;
  }
  /* 
  p {
    margin-top: 4px;
    font-size: 11px;
    color: var(--text-primary);
    font-family: "Lato", sans-serif;
    @media (max-width: 650px) {
      text-align: center;
      line-height: 1.2em;
    } */
`;
