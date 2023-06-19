import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import { Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
  const { name, data } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleSwipeLeft = () => {
    console.log("swiped left");
  };

  const handleSwipeRight = () => {
    console.log("swiped right");
  };

  return (
    <View style={{ backgroundColor: "#fbfbfb", height: "100vh" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            // backgroundColor: "purple",
            justifyContent: "space-evenly",
            height: "10%"
          }}>
          <TouchableOpacity>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                overflow: "hidden",
                alignSelf: "stretch"
              }}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-antelope-canyon-paths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }}
                style={{ flex: 1 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 100,
                backgroundColor: "transparent",
                height: 50,
                padding: 10
              }}>
              <Image
                source={require("../../assets/mingle-logo.png")}
                style={{ flex: 1 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Entypo name="chat" size={30} color="orange" />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
              margi: "auto",
              position: "relative",
              // backgroundColor: "brown",
              position: "absolute"
            }}>
            <Swiper
              containerStyle={{
                backgroundColor: "transparent",
                position: "absolute"
              }}
              cards={data}
              onSwipedLeft={handleSwipeLeft}
              onSwipedRight={handleSwipeRight}
              loop={true}
              stackSize={2}
              cardIndex={0}
              verticalSwipe={false}
              renderCard={({
                occupation,
                age,
                sex,
                firstName,
                lastName,
                imageSrc,
                id
              }) => {
                return (
                  <View
                    key={id}
                    style={{
                      height: "70%",
                      width: "100%",
                      borderRadius: "20px",
                      // border: "1px solid blue",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                    <View
                      style={{
                        position: "relative",
                        flex: "1",
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "center"
                      }}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          margin: "auto",
                          objectFit: "cover",
                          position: "absolute",
                          zIndex: "-1"
                        }}
                        src={imageSrc}
                        alt={
                          firstName + " " + lastName + " " + "profile picture"
                        }
                      />
                      <View
                        style={{
                          height: "auto",
                          width: "100%",
                          position: "relative",
                          bottom: "0px",
                          paddingHorizontal: "20px",
                          paddingVertical: "10px",
                          background: "rgba(0, 0, 0, 0.4)",
                        }}>
                        <View
                          style={{
                            width: "100%",
                            height: "auto",
                            flex: "1",
                            flexDirection: "row",
                            // paddingHorizontal: "10px",
                            // backgroundColor: "orange",
                            justifyContent: "space-between"
                          }}>
                          <View>
                            <Text style={{ color: "white", fontSize: "20px" }}>
                              {firstName + " " + lastName}
                            </Text>
                            <Text style={{ color: "white", fontSize: "20px" }}>
                              {occupation}
                            </Text>
                          </View>
                          <View>
                            <Text style={{ color: "white", fontSize: "20px" }}>
                              {sex === "male"
                                ? "M"
                                : sex === "female"
                                ? "F"
                                : "M"}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
