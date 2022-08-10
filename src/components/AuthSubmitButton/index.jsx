import React from "react";
import { Button } from "./styles";

export default function AuthSubmitButton({ text, isLoading }) {
  return (
    <Button type="submit" disabled={isLoading}>
      {text}
    </Button>
  );
}
