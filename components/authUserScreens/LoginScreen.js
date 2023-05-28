import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// import LinearGradient from "react-native-linear-gradient";

const LoginScreen = () => {
  const [loginModal, setLoginModal] = useState(false);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const handleButtonClick = () => {
    setLoginModal(true);
    // Perform any action or state updates related to the button click
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/backgroundImg.jpg")}>
      <View
        style={{
          height: "100%",
          width: "100%",
          flex: "1",
          display: "flex",
          position: "absolute",
          margin: "auto",
          backgroundColor: "black",
          opacity: ".5"
        }}></View>
      {loginModal ? (
        <>
          <View style={styles.modalWrapper}>
            <View style={styles.modalContainer}>
              <form
                action="post"
                style={{
                  heigh: "100%",
                  width: "100%",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "column"
                }}>
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px"
                  }}>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    style={{
                      padding: "15px",
                      fontSize: "15px",
                      outlineColor: "transparent",
                      border: "none",
                      borderBottom: "1px solid darkgray",
                      backgroundColor: "#fff"
                    }}
                  />
                  <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    style={{
                      padding: "15px",
                      fontSize: "15px",
                      outlineColor: "transparent",
                      border: "none",
                      // borderBottom: "1px solid darkgray",
                      backgroundColor: "#fff"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    height: "auto"
                  }}>
                  <TouchableOpacity
                    style={{ width: "100%", height: "auto", padding: "5px" }}>
                    <Text
                      style={{
                        color: "white",
                        display: "flex",
                        width: "auto",
                        justifyContent: "flex-end",
                        alignItems: "center"
                      }}>
                      Recover password
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    height: "auto",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "orange",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    margin: "auto"
                  }}
                  onPress={() => {
                    console.log("hello");
                  }}>
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "#fff"
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </form>
              <View
                style={{
                  height: "auto",
                  width: "100%",
                  margin: "auto",
                  marginTop: "30px",
                  marginBottom: "30px",
                  display: "flex",
                  flexDirection: "row",
                  position: "relative",
                  alignContent: "center",
                  justifyContent: "center",
                  gap: "10px"
                }}>
                <View
                  style={{
                    flex: "1",
                    display: "flex",
                    margin: "auto",
                    height: "1px",
                    border: "none",
                    backgroundColor: "white"
                  }}></View>
                <Text
                  style={{
                    display: "flex",
                    margin: "auto",
                    textAlign: "center",
                    justifyContent: "center",
                    color: "#fff"
                  }}>
                  Or continue with
                </Text>
                <View
                  style={{
                    flex: "1",
                    display: "flex",
                    margin: "auto",
                    height: "1px",
                    border: "none",
                    backgroundColor: "white"
                  }}></View>
              </View>
              <TouchableOpacity style={styles.authBtn}>
                <View
                  style={{
                    backgroundColor: "red",
                    height: "100%",
                    width: "auto",
                    padding: "10px"
                  }}>
                  <AntDesign name="google" size={24} color="white" />
                </View>
                <View
                  style={{
                    width: "auto",
                    flex: "1",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <Text
                    style={{
                      width: "auto",
                      padding: "10px",
                      margin: "auto",
                      fontWeight: "bold",
                      color: "white"
                    }}>
                    SignIn with google
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}
                style={{
                  width: "100%",
                  heigh: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row"
                }}>
                <Text style={{ color: "white", fontSize: "15px" }}>
                  Not a member?
                </Text>
                <Text style={{ color: "orange", fontSize: "15px" }}>
                  Register now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.container}>
            <SafeAreaView
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 40,
                paddingHorizontal: 30
              }}>
              <View
                style={{
                  // backgroundColor: "black",
                  flex: "1",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  opacity: ".3"
                }}></View>
              <View style={styles.startPage}>
                <View
                  style={{
                    margin: "auto",
                    width: "auto",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flex: "1"
                    // backgroundColor: "red"
                  }}>
                  <View>
                    <Text
                      style={{
                        color: "orange",
                        fontWeight: "bold",
                        fontSize: "50px"
                      }}>
                      MingleMe
                    </Text>
                  </View>
                  <View
                    style={{
                      margin: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px"
                    }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: "30px",
                        fontWeight: "semi-bold"
                      }}>
                      Welcome!
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: "15px",
                        textAlign: "center",
                        margin: "auto"
                      }}>
                      Get flirty now and get matched!, Join millions of
                      love-minded members!
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      margin: "auto",
                      gap: "20px",
                      justifyContent: "space-between"
                    }}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                      }}>
                      <TouchableOpacity
                        onPress={handleButtonClick}
                        style={{
                          paddingVertical: 10,
                          paddingHorizontal: 40,
                          border: "1px solid orange",
                          borderRadius: "10px"
                        }}>
                        <Text
                          style={{
                            color: "orange",
                            fontWeight: "bold"
                          }}>
                          Sign In
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "orange",
                          paddingHorizontal: 40,
                          paddingVertical: 10
                        }}>
                        <Text
                          onPress={() => navigation.navigate("SignUp")}
                          style={{
                            color: "white",
                            fontWeight: "bold"
                          }}>
                          Sign Up
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        margin: "auto"
                      }}>
                      <View
                        style={{
                          height: "2px",
                          width: "25%",
                          margin: "auto",
                          backgroundColor: "#fff"
                        }}></View>
                      <Text
                        style={{
                          width: "100%",
                          height: "auto",
                          margin: "auto",
                          flex: "1",
                          textAlign: "center",
                          color: "white"
                        }}>
                        Or continue with
                      </Text>
                      <View
                        style={{
                          height: "2px",
                          width: "25%",
                          margin: "auto",
                          backgroundColor: "#fff"
                        }}></View>
                    </View>
                    <TouchableOpacity style={styles.authBtn}>
                      <View
                        style={{
                          backgroundColor: "red",
                          height: "100%",
                          width: "auto",
                          padding: "10px"
                        }}>
                        <AntDesign name="google" size={24} color="white" />
                      </View>
                      <View
                        style={{
                          width: "auto",
                          flex: "1",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
                        <Text
                          style={{
                            width: "auto",
                            padding: "10px",
                            fontWeight: "bold",
                            color: "white"
                          }}>
                          SignIn with google
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </>
      )}
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  modalWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    padding: "20px"
  },
  modalContainer: {
    padding: "20px",
    display: "flex",
    height: "auto",
    width: "100%",
    gap: "20px",
    margin: "auto",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  loginBtn: {
    backgroundColor: "pink",
    width: "100%",
    borderRadius: "10px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "bold"
  },
  getStarted: {
    fontWeight: "bold",
    fontSize: "15px",
    color: "white"
  },
  startPage: {
    width: "100%",
    margin: "auto",
    height: "100%",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between"
  },
  authBtn: {
    margin: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    borderRadius: "5px",
    border: "2px solid red",
    justifyContent: "center",
    alignItems: "center",
    outlineColor: "transparent"
  }
});
