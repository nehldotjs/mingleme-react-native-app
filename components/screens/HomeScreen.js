import React, { useLayoutEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
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
  const profileFunc = () => {
    return navigation.navigate("Profile");
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={profileFunc}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-antelope-canyon-paths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }}
              style={styles.profileImage}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/mingle-logo.png")}
              style={styles.logoImage}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Entypo name="chat" size={30} color="orange" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.swiperContainer}>
        <View style={styles.swiper}>
          <Swiper
            containerStyle={styles.swiper}
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
                <View key={id} style={styles.cardContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={imageSrc}
                      alt={firstName + " " + lastName + " " + "profile picture"}
                    />
                  </View>

                  <View style={[styles.cardOverlay, styles.cardShadow]}>
                    <View style={styles.infoContainer}>
                      <View>
                        <Text style={styles.nameText}>
                          {firstName + " " + lastName}
                        </Text>
                        <Text style={styles.occupationText}>{occupation}</Text>
                      </View>
                      <View>
                        <Fontisto
                          name={sex == "male" ? "male" : "female"}
                          size={24}
                          color="white"
                        />
                      </View>
                    </View>
                    {/* <Text>lorem30</Text> */}
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.swiperButton,
            { backgroundColor: "rgba(255, 0, 0, 0.4)" }
          ]}
          onPress={() => swiperRef.current.swipeLeft()}>
          <Entypo name="cross" size={30} style={{ color: "red" }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.swiperButton,
            { backgroundColor: "rgba(0, 255, 71, 0.4)" }
          ]}
          onPress={() => swiperRef.current.swipeRight()}>
          <Entypo name="heart" size={30} style={{ color: "green" }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "transparent",
    justifyContent: "spac-evenly",
    alignItem: "center",
    // backgroundColor: "purple",
    margin: "auto",
    width: "100%"
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 100
  },
  profileImageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    alignSelf: "stretch"
  },
  profileImage: {
    flex: 1
  },
  logoContainer: {
    width: 100,
    backgroundColor: "transparent",
    height: 50,
    padding: 10
  },
  logoImage: {
    flex: 1
  },
  swiperContainer: {
    // backgroundColor: "yellow",
    position: "relative",
    flex: 1
  },
  swiper: {
    flex: 1,
    backgroundColor: "transparent"
  },
  cardContainer: {
    width: "100%",
    height: "70%",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "black"
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "100%",
    width: "100%",
    margin: "auto",
    position: "absolute",
    zIndex: -1
  },
  cardOverlay: {
    bottom: 0,
    width: "100%",
    height: "auto",
    position: "absolute",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  nameText: {
    color: "white",
    fontSize: 20
  },
  occupationText: {
    color: "white",
    fontSize: 20
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  buttonsContainer: {
    width: "100%",
    height: "auto",
    position: "relative",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "pink",
    padding: "20px"
  },
  swiperButton: {
    height: 70,
    width: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: "auto"
  }
});

export default HomeScreen;
