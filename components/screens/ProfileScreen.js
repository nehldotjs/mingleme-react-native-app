import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>this is ProfileScreen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default ProfileScreen