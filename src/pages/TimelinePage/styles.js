import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";
import { IoChevronUpCircleOutline } from "react-icons/io5";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Content = styled.div`
  width: 937px;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 232px;
  position: relative;

  @media (max-width: 1000px) {
    width: unset;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;

  .observer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 40px;
    h3 {
      font-family: "Lato";
      font-weight: 400;
      font-size: 22px;
      color: var(--text-publish);
      text-align: center;
      @media (max-width: 650px) {
        font-size: 18px;
        text-align: center;
        padding: 0 15px;
      }
    }
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  .scroll {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    -webkit-animation: breathing 5s ease-out infinite normal;
    animation: breathing 5s ease-out infinite normal;
    -webkit-font-smoothing: antialiased;

    @-webkit-keyframes breathing {
      0% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }

      25% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      60% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }

      100% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
    }

    @keyframes breathing {
      0% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }

      25% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      60% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }

      100% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }
    }
  }
`;

const WarningContent = styled.div`
  width: 610px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: unset;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
  img {
    width: 350px;
    height: 350px;
  }
  h3 {
    font-family: "Lato";
    font-weight: 700;
    font-size: 22px;
    color: var(--text-publish);
    text-align: center;

    @media (max-width: 650px) {
      font-size: 18px;
      text-align: center;
    }
  }

  .ghost {
    width: 550px;
  }
`;

const Refresh = styled(BiRefresh)`
  font-size: 22px;
  color: var(--text-primary);
`;

const RefreshWrapper = styled.div`
  button {
    width: 100%;
    height: 50px;
    background-color: var(--bg-button);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    color: var(--text-primary);
    font-size: 16px;
    border: none;
    margin-bottom: 17px;

    @media (max-width: 650px) {
      margin: 0 0 17px;
      border-radius: 5px;
    }
  }
`;

const ToTheTop = styled(IoChevronUpCircleOutline)`
  font-size: 50px;
  color: var(--text-publish);
`;

export {
  Main,
  Content,
  Feed,
  WarningContent,
  Refresh,
  RefreshWrapper,
  ToTheTop,
};
