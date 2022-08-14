import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUser } from "../../services/api";

import { callToast } from "../../utils";
import { useLocalStorage } from "../../utils/hooks";

import AuthInput from "../AuthInput";
import AuthSubmitButton from "../AuthSubmitButton";

import { Container, Form } from "./styles";

export default function SignUpForms() {
  const signUpModel = { email: "", password: "", name: "", imageUrl: "" };

  const [userData] = useLocalStorage("linkrUserData", "");
  const [signUpData, setSignUpData] = useState(signUpModel);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  }

  function handleError(error) {
    console.log(error);
    callToast("error", error?.response?.data?.error);
    setSignUpData(signUpModel);
  }

  async function submitUserData(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createUser(signUpData);
      callToast("success", "User created successfully");
      navigate("/");
    } catch (error) {
      handleError(error);
    }
    setIsSubmitting(false);
  }

  useEffect(() => {
    if (userData.token) {
      setTimeout(() => navigate("/timeline"), 1500);
    }
  }, []);

  return (
    <Container>
      <Form onSubmit={(e) => submitUserData(e)}>
        <AuthInput
          name="email"
          type="email"
          placeholder="e-mail"
          value={signUpData.email || ""}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting || userData.token}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="password"
          value={signUpData.password}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting || userData.token}
        />
        <AuthInput
          name="name"
          type="text"
          maxLength="30"
          placeholder="username"
          value={signUpData.name}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting || userData.token}
        />
        <AuthInput
          name="imageUrl"
          type="url"
          placeholder="picture url"
          value={signUpData.imageUrl}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting || userData.token}
        />
        <AuthSubmitButton
          text="Sign Up"
          isLoading={isSubmitting || userData.token}
        />
      </Form>
      <Link to="/">Switch back to log in</Link>
    </Container>
  );
}
