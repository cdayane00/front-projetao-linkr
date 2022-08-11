import React from "react";
import { ContentTitle, MainTitle } from "./styles";

export default function PageTitle({ title }) {
  return (
    <MainTitle>
      <ContentTitle>
        <h3>{title}</h3>
      </ContentTitle>
    </MainTitle>
  );
}
