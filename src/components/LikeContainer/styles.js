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
`;

export const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: ${(props) => (props.prop ? "flex" : "none")};
  margin-top: 5px;

  position: absolute;
  top: 50%;

  @media (max-width: 650px) {
    top: 58%;
  }

  .arrow-up {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-bottom: 5px solid white;
  }

  .content {
    width: 169px;
    height: 24px;
    background-color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  p {
    font-size: 11px;
    color: var(--text-tooltip);
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }
`;
