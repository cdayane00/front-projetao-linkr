import React from "react";
import SearchBar from "../SearchBar";
import { ContentTitle, MainTitle } from "./styles";

export default function PageTitle({ title, userPhoto }) {
  return (
    <MainTitle>
      <ContentTitle>
        <SearchBar isMobile />
        <div className="wrapper">
          {userPhoto && <img src={userPhoto} alt="photoUser" />}
          <h3>{title}</h3>
        </div>
      </ContentTitle>
    </MainTitle>
  );
}
