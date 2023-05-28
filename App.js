import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ScreensContainer from "./components/stackScreens";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <ScreensContainer />
      </NavigationContainer>
    </AuthProvider>
  );
}
