import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";
import * as Google from "expo-google-app-auth";

// Create the AuthContext
const AuthContext = createContext();

// Define the useAuth hook to consume the AuthContext
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Define the AuthProvider component to provide the AuthContext to children

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={AuthValues()}>{children}</AuthContext.Provider>
  );
}

// Define the Values to be rendered to the auth provider below

// const signInWithGoogle = async () => {
//   await Google.logInAsync();
// };

function AuthValues() {
  const value = {
    name: "nehl",
    user: true,
    // signInWithGoogle,
  };
  return value;
}
export { AuthProvider, useAuth };
