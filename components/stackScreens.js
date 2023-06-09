import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./authUserScreens/LoginScreen";
import SignUpScreen from "./authUserScreens/SignUpScreen";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const ScreensContainer = () => {
  const { user } = useAuth();
  return (
    <>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default ScreensContainer;
