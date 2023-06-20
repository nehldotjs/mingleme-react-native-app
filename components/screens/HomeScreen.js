import React, { useLayoutEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { Fontisto, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

const HomeScreen = () => {
  const { name, data } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const swiperRef = useRef(null);
  const handleSwipeLeft = () => {
    console.log("swiped left");
  };

  const handleSwipeRight = () => {
    console.log("swiped right");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: 100
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
      <View
        style={{
          backgroundColor: "red",
          position: "relative",
          flex: 1
        }}>
        <View
          style={{
            justifyContent: "space-evenly",
            position: "relative",
            flex: 1
          }}>
          <Swiper
            containerStyle={{
              backgroundColor: "transparent"
            }}
            ref={swiperRef}
            cards={data}
            onSwipedLeft={handleSwipeLeft}
            onSwipedRight={handleSwipeRight}
            loop={true}
            stackSize={2}
            cardIndex={0}
            verticalSwipe={false}
            overlayLabels={{
              left: {
                title: (
                  <FontAwesome5 name="heart-broken" size={50} color="red" />
                ),
                style: {
                  label: {
                    textAlign: "right",
                    color: "red"
                  }
                }
              },
              right: {
                title: <Ionicons name="ios-heart" size={50} color="green" />,
                style: {
                  label: {
                    textAlign: "left",
                    color: "green"
                  }
                }
              }
            }}
            renderCard={(item) => {
              const {
                occupation,
                age,
                sex,
                firstName,
                lastName,
                imageSrc,
                id
              } = item;
              return (
                <View
                  key={id}
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative"
                  }}>
                  <View
                    style={{
                      width: "100%",
                      flex: 1,
                      position: "relative",
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
                      alt={firstName + " " + lastName + " " + "profile picture"}
                    />
                  </View>

                  <View
                    style={[
                      {
                        bottom: "0px",
                        width: "100%",
                        height: "auto",
                        position: "absolute",
                        bottom: 0,
                        paddingVertical: "10px",
                        paddingHorizontal: "20px",
                        background: "rgba(0, 0, 0, 0.4)"
                      },
                      styles.cardShadow
                    ]}>
                    <View
                      style={{
                        flex: "1",
                        width: "100%",
                        height: "auto",
                        flexDirection: "row",
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
                        <Fontisto
                          name={sex == "male" ? "male" : "female"}
                          size={24}
                          color="white"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          backgroundColor: "purple",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row"
        }}>
        <TouchableOpacity onPress={() => swiperRef.current.swipeLeft()}>
          <Entypo name="cross" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => swiperRef.current.swipeRight()}>
          <Entypo name="heart" size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  }
});

export default HomeScreen;
