import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HandlerContext } from "../../contexts/handlerContext";

// API
import { loginUser } from "../../services/api";
// Utils
import { callToast } from "../../utils";
// Components
import AuthInput from "../AuthInput";
import AuthSubmitButton from "../AuthSubmitButton";
// Styles
import { Container, Form } from "./styles";

export default function SignInForms() {
  const signInModel = { email: "", password: "" };
  const { userData, setUserData } = useContext(HandlerContext);
  const [signInData, setSignInData] = useState(signInModel);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  }

  function handleError(error) {
    callToast("error", error.response?.data?.error);
    setSignInData(signInModel);
  }

  async function submitUserData(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const promise = await loginUser(signInData);
      setUserData(promise.data);

      setTimeout(() => {
        navigate("/timeline");
      }, 1500);
    } catch (error) {
      handleError(error);
    }

    setIsSubmitting(false);
  }

  useEffect(() => {
    if (userData.config) {
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
          disabled={isSubmitting || userData.config}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="password"
          value={signInData.password}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting || userData.config}
        />
        <AuthSubmitButton
          text="Sign In"
          isLoading={isSubmitting || userData.config}
        />
      </Form>
      <Link to="/sign-up">First time? Create an account!</Link>
    </Container>
  );
}
