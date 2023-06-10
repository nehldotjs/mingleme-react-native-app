import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import { Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
  const { name } = useAuth();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View
      style={{
        flexGrow: "1",
        width: "100%",
        height: "100%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green"
      }}>
      <SafeAreaView
        style={{
          flexGrow: "1",
          backgroundColor: "green",
          height: "100%",
          width: "100%"
        }}>
        <Button
          title="homepage - Go to Profile Screen"
          onPress={() => navigation.navigate("Profile")}
        />

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "pink",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: "20px",
            height: "auto"
          }}>
          <TouchableOpacity style={{ height: "auto", width: "auto" }}>
            <View
              style={{
                backgroundColor: "red",
                display: "flex",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                overflow: "hidden"
              }}>
              <img
                style={{
                  display: "flex",
                  margin: "auto",
                  padding: "0px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover"
                }}
                src="https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-antelope-canyon-paths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="profile image"
                // srcset=""
              />{" "}
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                display: "flex",
                height: "70px",
                width: "70px",
              }}>
              <img
                style={{
                  display: "flex",
                  margin: "auto",
                  padding: "0px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover"
                }}
                src={require("../../assets/mingle-logo.png")}
                alt=""
              />{" "}
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Entypo name="chat" size={30} color="orange" />{" "}
            </View>
          </TouchableOpacity>
        </View>
        {/* MAIN */}
        <View
          style={{
            height: "100%",
            width: "100%",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            backgroundColor: "yellow"
          }}>
          {" "}
          <View>
            <Text>SWIPER HERE</Text>
          </View>
        </View>
        <View>{/* FOOTER */}</View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
