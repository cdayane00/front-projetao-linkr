import React from "react";
import { ContentTitle, MainTitle, TitleContainer } from "./styles";

export default function PageTitle({ title, userPhoto }) {
  return (
    <MainTitle>
      <ContentTitle>
        <TitleContainer>
          {userPhoto && <img src={userPhoto} alt="photoUser" />}
        </TitleContainer>
        <h3>{title}</h3>
      </ContentTitle>
    </MainTitle>
  );
}
