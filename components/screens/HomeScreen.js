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
    <View style={{ backgroundColor: "black", height: "100vh" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "orange" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "purple",
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
              backgroundColor: "brown",
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
                      border: "1px solid blue",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "yellow",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                    <View
                      style={{
                        position: "relative",
                        width: "100%",
                        flex: "1",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          margin: "auto",
                          objectFit: "cover",
                          zIndex: "-1"
                        }}
                        src={imageSrc}
                        alt={firstName + " " + lastName + "profile picture"}
                      />
                      <View
                        style={{
                          height: "10%",
                          width: "100%",
                          bottom: "0px",
                          position: "absolute",
                          flexDirection: "row",
                          // backgroundColor: "red",
                          paddingVertical: "10px ",
                          paddingHorizontal: "10px ",
                          justifyContent: "space-between"
                        }}>
                        <View>
                          <Text>{firstName + " " + lastName}</Text>
                          <Text>{occupation}</Text>
                        </View>
                        <View>
                          {sex === "male" ? "M" : sex === "female" ? "F" : ""}
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
