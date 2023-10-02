import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

function ModalScreen() {
  const { mingleMeLogo } = useAuth();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: "https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-antelope-canyon-paths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }}
      /> */} 
      <Image source={mingleMeLogo} />
      <Text style={{ margin: "auto", color: "orange" }}>Hello </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "spac-evenly",
    alignItem: "center",
    backgroundColor: "purple",
    margin: "auto",
    width: "100%"
  }
});
export default ModalScreen;
