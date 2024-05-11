import { useContext, useState } from "react";
import { createContext } from "react";

const authContext = createContext();
const initialData = {
  token: null,
  authenticated: false,
};

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(initialData);

  const signUser = (payload) => {
    const { token, data } = payload;
    const userData = data?.user ? data.user : data;
    console.log(userData);

    setAuthData((prev) => ({
      ...prev,
      token,
      authenticated: true,
    }));
    console.log("context", signUser);
    localStorage.setItem("prime_token", token);
  };

  const logoutUser = () => {
    setAuthData(initialData);
    localStorage.removeItem("prime_token");
    localStorage.removeItem("prime_user");
  };

  const isUserLoggedIn = () => {
    const token = localStorage.getItem("prime_token");
    if (token) {
      setAuthData((prev) => ({
        ...prev,
        token,
        authenticated: true,
      }));
    }
  };

  return (
    <authContext.Provider
      value={{
        signUser,
        logoutUser,
        isUserLoggedIn,
        authenticated: authData.authenticated,
        token: authData.token,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(authContext);
