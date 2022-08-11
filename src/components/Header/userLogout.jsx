import React from "react";
import { useNavigate } from "react-router-dom";
import { Outerbox } from "./styles";

export default function UserToggle() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("linkrUserData");
  };
  return (
    <Outerbox
      onClick={() => {
        logout();
        navigate("/");
      }}
    >
      <p>Logout</p>
    </Outerbox>
  );
}
