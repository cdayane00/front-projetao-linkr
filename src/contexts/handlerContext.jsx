import React, { createContext, useState } from "react";
import { useLocalStorage } from "../utils/hooks";

export const HandlerContext = createContext(null);

function HandlerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [userData, setUserData] = useLocalStorage("linkrUserData", "");
  const [interaction, setInteraction] = useState();
  const logout = () => {
    setUserData("empty");
    localStorage.removeItem("linkrUserData");
  };
  return (
    <HandlerContext.Provider
      value={{
        isOpen,
        setIsOpen,
        postId,
        setPostId,
        refresh,
        setRefresh,
        userData,
        setUserData,
        logout,
        interaction,
        setInteraction,
      }}
    >
      {children}
    </HandlerContext.Provider>
  );
}

export default HandlerProvider;
