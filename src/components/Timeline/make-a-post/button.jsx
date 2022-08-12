import React from "react";
import { Render } from "./style";

export default function ButtonRender({ loading }) {
  if (loading === true) {
    return (
      <Render>
        <button type="submit" disabled={loading}>
          Publishing...
        </button>
      </Render>
    );
  }
  return (
    <Render>
      <button type="submit" disabled={loading}>
        Publish
      </button>
    </Render>
  );
}
