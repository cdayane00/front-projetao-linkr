import React from "react";
import SearchBar from "../SearchBar";
import { ContentTitle, MainTitle } from "./styles";

export default function PageTitle({ title, userPhoto, loading }) {
  return (
    <MainTitle>
      <ContentTitle>
        <SearchBar isMobile />
        <div className="wrapper">
          {loading && <h3>Loading...</h3>}
          {!loading && (
            <>
              {userPhoto && <img src={userPhoto} alt="photoUser" />}
              <h3>{title}</h3>
            </>
          )}
        </div>
      </ContentTitle>
    </MainTitle>
  );
}
