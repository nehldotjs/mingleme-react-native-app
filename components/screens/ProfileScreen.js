import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const navigation = useNavigation();
  const data = [
    {
      profilePic:
        "https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      id: "1",
      firstName: "nelson",
      lastName: "osuya",
      sex: "male",
      status: "single",
      month: "sept",
      day: "24",
      year: "2023",
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem libero nihil, in saepe velitexcepturi, aperiam ut vitae minima molestias quaerat enim tempora nostrum iure quam sunt officiis corporis? "
    }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          display: "flex",
          backgroundColor: "skyblue"
        }}>
        <View
          style={{
            backgroundColor: "orange",
            flex: 1,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            display: "flex"
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "green",
              justifyContent: "center",
              alignItem: "center",
              width: "100%"
            }}>
            <Image
              source={require("../../assets/backgroundImg.jpg")}
              style={{
                height: "100%",
                width: "100%",
                margin: "auto",
                display: "flex"
              }}
              resizemode="cover"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "pink",
            flex: "1",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            display: "none"
          }}>
          <Text>Toggle button</Text>
        </View>
        <View
          style={{
            backgroundColor: "orange",
            flex: "1",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            display: "none"
          }}>
          <Text>Account Detail</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "spac-evenly",
    backgroundColor: "purple",
    alignItem: "center",
    height: "100%",
    margin: "auto",
    width: "100%"
  }
});
