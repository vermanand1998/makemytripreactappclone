// context.js
import React, { createContext, useState } from "react";

// Define the context
const LoginContext = createContext();

// Define the provider component
export const LoginStateProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

// Export the context so it can be imported in other files
export default LoginContext;
