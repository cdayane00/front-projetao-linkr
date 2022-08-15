import React, { createContext, useState } from "react";

export const SettingsContext = createContext(null);

function SettingsProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <SettingsContext.Provider
      value={{ isOpen, setIsOpen, user, setUser, refresh, setRefresh }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
