import React from "react";
import { useNavigate } from "react-router-dom";
import { Outerbox } from "./styles";
import { logout } from "../../utils/index";

export default function UserToggle() {
  const navigate = useNavigate();
  return (
    <Outerbox>
      <div
        className="option"
        onClick={() => {
          console.log("open a dialog pls");
        }}
      >
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
