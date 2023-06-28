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
import { LinearGradient } from "expo-linear-gradient";

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
  const toggleModal = () => {
    console.log("modal check");
  };
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
        {/* IMAGE SECTION */}
        <View
          style={{
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
        {/* IMAGE SECTION */}
        {/* TOGGLE BUTTON SECTION */}
        <View
          style={{
            // backgroundColor: "red",
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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              backgroundColor: "blue"
            }}>
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.20)", "black"]} // Array of gradient colors
              start={{ x: 1, y: 0 }} // Start point (top left)
              end={{ x: 1, y: 1 }} // End point (bottom left)
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "orange",
                position: "relative",
                justifyContent: "center",
                alignItems: "center"
              }}>
              {" "}
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  margin: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2
                  // backgroundColor: "red"
                }}
                onPress={toggleModal}>
                <Text>Hello World</Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "red"
                }}>
                <Text
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    // alignItems: "flex-start",
                    alignItems: "center",
                    color: "white"
                  }}>
                  Modal Check Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Voluptatem facilis corporis excepturi quis?
                  Labore illo nisi porro aliquid aut quas. Dicta nisi natus
                  dolores hic tempore vitae dolore consectetur quod illo
                  doloremque rerum, eos placeat reprehenderit accusamus ab
                  magnam. Repellat at earum nam autem adipisci cum, et dicta
                  alias assumenda excepturi doloremque sint harum obcaecati
                  laborum est dolore, dolores, dignissimos pariatur expedita.
                  Suscipit repellendus iure rem quaerat natus? Tempore quod eos
                  repellendus, praesentium saepe tempora adipisci obcaecati qui
                  culpa, nesciunt esse magni dolorum, blanditiis velit! Quo
                  alias tempore reprehenderit quia. Molestias praesentium neque
                  placeat accusamus suscipit veniam excepturi minima nesciunt?
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* TOGGLE BUTTON SECTION */}

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
