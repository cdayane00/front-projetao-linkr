import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// API
import { loginUser } from "../../services/api";
// Utils
import { callToast } from "../../utils";
// Components
import AuthInput from "../AuthInput";
import AuthSubmitButton from "../AuthSubmitButton";
// Styles
import { Container, Form } from "./styles";
import { useLocalStorage } from "../../utils/hooks";

export default function SignInForms() {
  const signInModel = { email: "", password: "" };

  const [response, setResponse] = useLocalStorage("linkrUserData", "");
  const [signInData, setSignInData] = useState(signInModel);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  }

  function handleError(error) {
    console.log(error);
    callToast("error", error.response?.data?.error);
    setSignInData(signInModel);
  }

  async function submitUserData(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const promise = await loginUser(signInData);
      setResponse(promise.data);

      setTimeout(() => {
        navigate("/timeline");
      }, 1500);
    } catch (error) {
      handleError(error);
    }

    setIsSubmitting(false);
  }

  useEffect(() => {
    if (response.token) {
      setTimeout(() => {
        navigate("/timeline");
      }, 1500);
    }
  }, []);

  return (
    <Container>
      <Form onSubmit={(e) => submitUserData(e)}>
        <AuthInput
          name="email"
          type="email"
          placeholder="e-mail"
          value={signInData.email || ""}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting || response.token}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="password"
          value={signInData.password}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting || response.token}
        />
        <AuthSubmitButton
          text="Sign In"
          isLoading={isSubmitting || response.token}
        />
      </Form>
      <Link to="/sign-up">First time? Create an account!</Link>
    </Container>
  );
}
