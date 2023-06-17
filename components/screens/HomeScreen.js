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
    <SafeAreaView style={{ flex: 1, backgroundColor: "pink" }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "purple",
          justifyContent: "space-evenly",
          paddingVertical: 10
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

      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <Swiper
          containerStyle={{
            flexGrow: "1",
            backgroundColor: "transparent",
            border: "1px solid purple"
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
            firstName,
            lastName,
            sex,
            imageSrc,
            id
          }) => {
            return (
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "green"
                }}>
                <Text>Hello World </Text>
              </View>
            );
          }}
        />
      </View>
      <View>{/* FOOTER */}</View>
    </SafeAreaView>
  );
};

export default HomeScreen;
