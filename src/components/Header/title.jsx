import React from "react";
import SearchBar from "../SearchBar";
import { ContentTitle, MainTitle } from "./styles";

export default function PageTitle({ title }) {
  return (
    <MainTitle>
      <ContentTitle>
        <SearchBar isMobile />
        <h3>{title}</h3>
      </ContentTitle>
    </MainTitle>
  );
}
