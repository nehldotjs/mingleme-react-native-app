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
  const { name } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const data = [
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" }
  ];

  const handleSwipeLeft = () => {
    console.log("swiped left");
  };

  const handleSwipeRight = () => {
    console.log("swiped right");
  };

  return (
    <SafeAreaView style={{ flex: 1, display: "flex", height: "100vh" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: "20px",
          alignItems: "center",
          backgroundColor: "purple"
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "red",
              height: 50,
              width: 50,
              borderRadius: 25,
              overflow: "hidden"
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
          <View style={{ height: 70, width: "auto" }}>
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
          flexGrow: 1,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow"
        }}>
        <Swiper
          style={{
            backgroundColor: "purple",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 100
          }}
          cards={data}
          renderCard={(card) => (
            <View style={{ height: 100, backgroundColor: "red" }}>
              <Text>{card.text}</Text>
            </View>
          )}
          onSwipedLeft={handleSwipeLeft}
          onSwipedRight={handleSwipeRight}
          loop={true}
        />
      </View>
      <View>{/* FOOTER */}</View>
    </SafeAreaView>
  );
};

export default HomeScreen;
