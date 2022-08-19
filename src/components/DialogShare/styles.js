import styled from "styled-components";
import { Dialog } from "@headlessui/react";

const Wrapper = styled(Dialog)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background: rgba(255, 255, 255, 0.9);
`;

const Panel = styled(Dialog.Panel)`
  width: 597px;
  height: 262px;
  display: flex;
  box-sizing: border-box;
  padding: 50px;
  border-radius: 30px;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lato";
  font-weight: 700;
  color: var(--text-primary);
`;

const Description = styled(Dialog.Description)`
  width: 338px;
  height: 82px;
  font-size: 34px;
  line-height: 40.8px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 39px;
  button {
    width: 134px;
    height: 37px;
    border-radius: 5px;
    border: none;

    &:disabled {
      opacity: 0.75;
    }
  }

  .cancel {
    background-color: var(--bg-white);
    color: var(--text-blue);
  }
  .confirm {
    background-color: var(--bg-button);
    color: var(--text-primary);
  }
`;
export { Wrapper, Panel, Description, ButtonWrapper };
