import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

const HomeScreen = () => {
  const { name } = useAuth();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View>
      <SafeAreaView>
        <Button
          title="homepage - Go to Profile Screen"
          onPress={() => navigation.navigate("Profile")}
        />

        <View>
          <TouchableOpacity>
            <Image source={require("../../assets/backgroundImg.jpg")} />
          </TouchableOpacity>
        </View>
        <View>{/* MAIN */}</View>
        <View>{/* FOOTER */}</View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
