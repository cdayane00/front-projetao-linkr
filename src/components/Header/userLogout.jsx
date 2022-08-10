import React from "react";
import { Outerbox } from "./styles";

export default function UserToggle({ toggle }) {
  if (toggle) {
    return (
      <Outerbox>
        <p>Logout</p>
      </Outerbox>
    );
  }
}
