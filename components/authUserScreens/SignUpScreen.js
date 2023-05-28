import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native";
import {
  FontAwesome5,
  Ionicons,
  Entypo,
  Feather,
  Fontisto
} from "@expo/vector-icons";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [submitBtnToggle, setSubmitBtnToggle] = useState(true);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const validateEmail = (email) => {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    console.log(name, email);
  };

  if (name && passWord && email) {
    setSubmitBtnToggle(true);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}>
            <Entypo name="login" size={20} color="black" />
            <Text>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Sign up for <Text style={styles.highlightedText}>free</Text>
            </Text>
          </View>

          <ScrollView
            style={{ width: "100%", height: "100%" }}
            contentContainerStyle={styles.formContainer}>
            {/* SIGN UP FORM */}
            <View style={styles.formWrapper}>
              {/* USERNAME */}
              <View style={styles.inputContainer}>
                <FontAwesome5
                  name="user"
                  size={18}
                  color="gray"
                  style={{ margin: "auto" }}
                />
                <TextInput
                  placeholder="username"
                  keyboardType="email-address"
                  style={[styles.textInput, { outline: "none" }]}
                  value={name}
                  onChangeText={setName}
                />
                {name.length > 5 ? (
                  <Ionicons name="checkmark" size={24} color="green" />
                ) : null}
              </View>

              {/* EMAIL */}
              <View style={styles.inputContainer}>
                <Fontisto name="email" size={18} color="gray" />
                <TextInput
                  placeholder="Enter your email"
                  style={[styles.textInput, { outline: "none" }]}
                  value={email}
                  onChangeText={setEmail}
                />
                {validateEmail(email) ? (
                  <Ionicons name="checkmark" size={24} color="green" />
                ) : null}
              </View>

              {/* PASSWORD */}
              <View style={styles.inputContainer}>
                <Feather name="lock" size={18} color="gray" />
                <TextInput
                  placeholder="Enter password"
                  secureTextEntry={true}
                  style={[styles.textInput, { outline: "none" }]}
                  value={passWord}
                  onChangeText={setPassWord}
                />
                {passWord.length >= 6 ? (
                  <Ionicons name="checkmark" size={24} color="green" />
                ) : null}
              </View>

              <View style={styles.inputContainer}>
                <Feather name="lock" size={18} color="gray" />
                <TextInput
                  placeholder="confirm password"
                  secureTextEntry={true}
                  style={[styles.textInput, { outline: "none" }]}
                  value={confirmPass}
                  onChangeText={setConfirmPass}
                />
                {passWord === confirmPass && confirmPass.length >= 6 ? (
                  <Ionicons name="checkmark" size={24} color="green" />
                ) : null}
              </View>
            </View>
          </ScrollView>

          {/* SUBMIT BUTTON */}
          <View style={{ width: "100%", marginBottom: "5%" }}>
            <TouchableOpacity
              style={
                submitBtnToggle ? styles.submitBtn : styles.disabledSubmitBtn
              }
              disabled={!submitBtnToggle}
              onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
          {/* END OF SIGN UP FORM */}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  safeAreaContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginButton: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    flex: 1,
    flexGrow: "1",
    justifyContent: "space-between",
    paddingHorizontal:"20px"
  },
  titleContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    padding: 10,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 30
  },
  highlightedText: {
    color: "orange"
  },
  formContainer: {
    width: "100%",
    flex: "1",
    justifyContent: "center",
    alignItems: "center"
  },
  formWrapper: {
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 15,
    margin: "auto",
    width: "100%"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    display: "flex",
    margin: "auto",
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "darkgray",
    borderStyle: "solid",
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  textInput: {
    width: "100%",
    backgroundColor: "#fff",
    flex: 1,
    outline: "none",
    border: "none",
    color: "gray",
    fontSize: 15
  },
  submitBtn: {
    width: "70%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  disabledSubmitBtn: {
    width: "70%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  submitBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  }
});
