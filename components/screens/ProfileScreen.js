import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  const [profileDetailsModalToggler, setProfileDetailsModalToggler] =
    useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const toggleModal = () => {
    // setProfileDetailsModalToggler(!profileDetailsModalToggler);
  };

  const imageModalHandler = () => {
    // setProfileDetailsModalToggler(profileDetailsModalToggler);
  };

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
      userHeight: '6"7"',
      hobbies: ["sky diving", "reading", "coding"],
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem libero nihil, in saepe velitexcepturi, aperiam ut vitae minima molestias quaerat enim tempora nostrum iure quam sunt officiis corporis? "
    }
  ];

  const renderProfileData = data.map((item) => {
    const {
      id,
      hobbies,
      firstName,
      lastName,
      sex,
      status,
      month,
      day,
      year,
      bio,
      userHeight
    } = item;
    return (
      <View
        key={id}
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "purple"
        }}>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "purple",
            flexDirection: "row"
          }}>
          <Text style={styles.boldText}>{lastName + " " + firstName}</Text>
          <Text style={styles.boldText}>{userHeight}</Text>
        </View>
        <View
          style={{
            height: "auto",
            width: "100%",
            padding: 20,
            backgroundColor: "green",
            justifyContent: "space-evenly"
          }}>
          {hobbies.map((x, index) => (
            <Text
              key={index}
              style={{
                flex: 1,
                width: "auto",
                color: "white",
                backgroundColor: "gray"
              }}>
              {x}
            </Text>
          ))}
        </View>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          display: "flex"
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
          <TouchableOpacity
            onPress={imageModalHandler}
            style={{
              flex: 1,
              width: "100%",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto"
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
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
          </TouchableOpacity>
        </View>
        {/* IMAGE SECTION */}
        {/* TOGGLE BUTTON SECTION */}
        <View
          style={{
            flex: 1,
            position: "absolute",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100%",
            width: "100%"
          }}>
          <View
            style={{
              display: "flex",
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <View
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                justifyContent: "flex-start",
                backgroundColor: "orange"
              }}>
              <LinearGradient
                colors={["rgba(0, 0, 0, 0.50)", "black", "black"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  flex: 1,
                  width: "100%",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5
                }}>
                <View
                  style={{
                    flex: 1,
                    width: "100%",
                    margin: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    backgroundColor: "orangered"
                  }}>
                  <View
                    style={{
                      flex: 1,
                      width: "100%",
                      margin: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 2
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        width: "100%",
                        margin: "auto",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        position: "relative"
                      }}
                      onPress={toggleModal}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          width: "100%",
                          height: "100%",
                          backgroundColor: "yellow"
                        }}>
                        {renderProfileData}
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
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
    justifyContent: "space-evenly",
    backgroundColor: "purple",
    alignItems: "center",
    height: "100%",
    margin: "auto",
    width: "100%"
  },
  modalOnStyling: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    display: "flex"
  },
  modalOffStyling: {
    display: "none"
  },

  // DATA STYLING
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    margin: "auto",
    width: "100%",
    textAlign: "center",
    textTransform: "capitalize"
  }
});
