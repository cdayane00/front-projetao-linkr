/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Input } from "./styles";

export default function AuthInput({
  name,
  type,
  placeholder,
  value,
  onChange,
  ...otherProps
}) {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete="off"
      required
      {...otherProps}
    />
  );
}
