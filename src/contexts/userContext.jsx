import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
