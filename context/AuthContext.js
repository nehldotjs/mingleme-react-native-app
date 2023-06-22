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

const data = [
  {
    id: 1,
    firstName: "john",
    lastName: "Doe",
    occupation: "Engineer",
    Age: "30",
    sex: "male",
    imageSrc:
      "https://images.pexels.com/photos/17217610/pexels-photo-17217610/free-photo-of-man-love-people-relaxation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    firstName: "Keisha",
    lastName: "henzo",
    occupation: "Engineer",
    Age: "30",
    sex: "female",
    imageSrc:
      "https://images.pexels.com/photos/17033057/pexels-photo-17033057/free-photo-of-bride-in-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    firstName: "po",
    lastName: "bo",
    occupation: "Engineer",
    Age: "30",
    sex: "female",
    imageSrc:
      "https://images.pexels.com/photos/17131068/pexels-photo-17131068/free-photo-of-man-love-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 4,
    firstName: "ennie",
    lastName: "pixu",
    occupation: "Engineer",
    Age: "30",
    sex: "female",
    imageSrc:
      "https://images.pexels.com/photos/17237963/pexels-photo-17237963.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 5,
    firstName: "hernandez",
    lastName: "henzo",
    occupation: "Engineer",
    Age: "30",
    sex: "female",
    imageSrc:
      "https://images.pexels.com/photos/16943618/pexels-photo-16943618/free-photo-of-man-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  }
];
function AuthValues() {
  const value = {
    name: "nehl",
    user: true,
    data,
    // signInWithGoogle,
  };
  return value;
}
export { AuthProvider, useAuth };