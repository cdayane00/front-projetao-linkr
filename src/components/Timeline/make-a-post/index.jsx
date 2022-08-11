import React, { useState } from "react";

import { Card, CardSide, CardDetails } from "./style";

export default function PostInput({ props }) {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function submitPost(event) {
    event.preventDefault();
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  }
  return (
    <Card>
      <CardSide>
        <img src={props.photo} alt="user" />
      </CardSide>
      <CardDetails>
        <p>What are you going to share today?</p>
        <form onSubmit={(event) => submitPost(event)}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
            required
            disabled={isDisabled}
          />
          <textarea
            className="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Awesome article about #javascript"
            required
            disabled={isDisabled}
          />
          <button type="submit">Publish</button>
        </form>
      </CardDetails>
    </Card>
  );
}
