import { View, Text, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

const ProfileScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      styele={{
        flex: 1,
        display: "flex",
        justifyContent: "spac-evenly",
        backgroundColor: "purple",
        alignItem: "center",
        height: "100%",
        margin: "auto",
        width: "100%"
      }}>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
