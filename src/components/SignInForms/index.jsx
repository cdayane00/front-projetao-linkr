import React, { useState, useEffect } from "react";
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
import { useLocalStorage } from "../../utils/hooks";

export default function SignInForms() {
  const [response, setResponse] = useLocalStorage("linkrUserData", "");
  const signInModel = { email: "", password: "" };
  const [signInData, setSignInData] = useState(signInModel);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (response.token) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate("/timeline");
        setIsSubmitting(false);
      }, 1500);
    }
  }, []);
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
      setResponse(promise.data);
      displaySuccessNotify(promise.status);
      setTimeout(() => {
        navigate("/timeline");
      }, 1500);
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
