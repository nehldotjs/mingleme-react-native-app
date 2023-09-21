import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import ModalScreen from "./screens/modalScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./authUserScreens/LoginScreen";
import SignUpScreen from "./authUserScreens/SignUpScreen";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const ScreensContainer = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
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
