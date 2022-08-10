import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// API
import { loginUser } from "../../services/api";
// Utils
import { displayErrorNotify, displaySuccessNotify } from "../../utils";
// Components
import AuthInput from "../AuthInput";
import AuthSubmitButton from "../AuthSubmitButton";
// Styles
import { Container, Form } from "./styles";

export default function SignInForms() {
  const signInModel = { email: "", password: "" };
  const [signInData, setSignInData] = useState(signInModel);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  }

  function handleError(error) {
    console.log(error);
    displayErrorNotify(error?.response.status);
    setSignInData(signInModel);
  }

  async function submitUserData(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const promise = await loginUser(signInData);
      displaySuccessNotify(promise.status);
      navigate("/timeline");
    } catch (error) {
      handleError(error);
    }
    setIsSubmitting(false);
  }

  return (
    <Container>
      <Form onSubmit={(e) => submitUserData(e)}>
        <AuthInput
          name="email"
          type="email"
          placeholder="e-mail"
          value={signInData.email || ""}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="password"
          value={signInData.password}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting}
        />
        <AuthSubmitButton text="Sign In" isLoading={isSubmitting} />
      </Form>
      <Link to="/sign-up">First time? Create an account!</Link>
    </Container>
  );
}
