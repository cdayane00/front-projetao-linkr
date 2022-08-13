import styled from "styled-components";

const Card = styled.div`
  width: 611px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  background-color: var(--bg-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 29px;
  box-sizing: border-box;
  padding: 16px;

  @media (max-width: 650px) {
    display: unset;
    width: unset;

    border-radius: 0;
  }
`;

const CardSide = styled.div`
  width: 50px;
  height: 177px;
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    object-fit: contain;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const CardDetails = styled.div`
  width: 503px;
  position: relative;

  @media (max-width: 650px) {
    width: unset;
    width: 100%;
  }

  form {
    width: 503px;
    height: 147px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    font-family: "Lato";
    font-size: 15px;

    @media (max-width: 650px) {
      width: unset;
      width: 100%;
    }
  }

  input {
    height: 30px;
    width: 100%;
    border-radius: 5px;
    background-color: var(--bg-publish-input);
    font-weight: 300;
    color: var(--text-publish);

    ::placeholder {
      font-family: "Lato";
      color: var(--text-placeholder);
    }

    border: none;
    outline: 0;
    box-sizing: border-box;
    padding: 12px;
    &:disabled {
      background-color: var(--border);
      opacity: 0.5;
    }

    @media (max-width: 650px) {
      font-size: 13px;

      &::placeholder {
        font-size: 13px;
      }
    }
  }

  .text {
    width: 100%;
    height: 66px;
    border-radius: 5px;
    background-color: var(--bg-publish-input);
    font-weight: 300;
    color: var(--text-publish);
    ::placeholder {
      font-family: "Lato";
      color: var(--text-placeholder);
    }
    border: none;
    outline: 0;
    box-sizing: border-box;
    padding: 12px;
    line-height: 18px;
    resize: none;
  }

  p {
    font-weight: 300;
    font-size: 20px;
    color: var(--text-publish);
    margin-bottom: 10px;

    @media (max-width: 650px) {
      text-align: center;
      font-size: 17px;

      margin-bottom: 20px;
    }
  }
`;

const Render = styled.div`
  button {
    width: 112px;
    height: 31px;
    background-color: var(--bg-button);
    color: var(--text-primary);
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;

export { Card, CardSide, CardDetails, Render };
