import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// API
import { createUser } from "../../services/api";
// Utils
import { displayErrorNotify, displaySuccessNotify } from "../../utils";
// Components
import AuthInput from "../AuthInput";
import AuthSubmitButton from "../AuthSubmitButton";
// Styles
import { Container, Form } from "./styles";

export default function SignUpForms() {
  const signUpModel = { email: "", password: "", name: "", imageUrl: "" };

  const [signUpData, setSignUpData] = useState(signUpModel);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  }

  function handleError(error) {
    console.log(error);
    displayErrorNotify(error?.response.status);
    setSignUpData(signUpModel);
  }

  async function submitUserData(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const promise = await createUser(signUpData);
      displaySuccessNotify(promise.status);
      navigate("/");
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
          value={signUpData.email || ""}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="password"
          value={signUpData.password}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting}
        />
        <AuthInput
          name="name"
          type="text"
          maxLength="30"
          placeholder="username"
          value={signUpData.name}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting}
        />
        <AuthInput
          name="imageUrl"
          type="url"
          placeholder="picture url"
          value={signUpData.imageUrl}
          onChange={(e) => handleChange(e)}
          disabled={isSubmitting}
        />
        <AuthSubmitButton text="Sign Up" isLoading={isSubmitting} />
      </Form>
      <Link to="/">Switch back to log in</Link>
    </Container>
  );
}
