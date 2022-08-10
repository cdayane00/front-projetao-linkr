import React from "react";
import Banner from "../../components/Banner";
import SignInForms from "../../components/SignInForms";
import { Main, Container } from "../SignUpPage/styles";

export default function SignInPage() {
  return (
    <Main>
      <Container>
        <Banner />
        <SignInForms />
      </Container>
    </Main>
  );
}
