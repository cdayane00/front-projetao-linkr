import React, { createContext, useState } from "react";

export const HandlerContext = createContext(null);

function HandlerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <HandlerContext.Provider
      value={{ isOpen, setIsOpen, postId, setPostId, refresh, setRefresh }}
    >
      {children}
    </HandlerContext.Provider>
  );
}

export default HandlerProvider;
