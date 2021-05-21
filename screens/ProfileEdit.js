import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Input } from "react-native-elements";

const ProfileEditScreen = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

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
