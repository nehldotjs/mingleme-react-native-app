import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import ModalScreen from "./screens/ModalScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./authUserScreens/LoginScreen";
import SignUpScreen from "./authUserScreens/SignUpScreen";
import { useAuth } from "../context/AuthContext";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();
const ScreensContainer = () => {
  const { isAdmin } = useAuth();
  return (
    <Stack.Navigator>
      {!isAdmin ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Group>

          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreensContainer;
