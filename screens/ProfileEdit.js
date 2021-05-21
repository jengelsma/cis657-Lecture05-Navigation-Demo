import { Button, Input } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileEditScreen = ({ route, navigation }) => {
  // console.log('Parmeters: ', route.params);
  const initialName = route.params.name;
  const initialImageUrl = route.params.imageUrl;
  const initialDescription = route.params.description;
  const [name, setName] = useState(initialName);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [description, setDescription] = useState(initialDescription);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => 
          navigation.navigate('Profile')}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => 
          navigation.navigate('Profile', {
            name,
            imageUrl,
            description
          })
        }
      >
        <Text>Save</Text>
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <Input placeholder="Enter name" value={name} onChangeText={setName} />
      <Input
        placeholder="Enter image URL"ß
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <Input
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileEditScreen;
