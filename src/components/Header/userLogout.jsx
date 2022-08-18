import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Outerbox } from "./styles";
import { HandlerContext } from "../../contexts/handlerContext";

export default function UserToggle() {
  const { logout } = useContext(HandlerContext);
  const navigate = useNavigate();
  return (
    <Outerbox>
      <div className="option" onClick={() => {}}>
        <p>Settings</p>
      </div>
      <div
        className="option"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        <p>Logout</p>
      </div>
    </Outerbox>
  );
}
