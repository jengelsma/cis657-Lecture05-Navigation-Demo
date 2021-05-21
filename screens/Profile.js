import { Button, Card } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Input } from "react-native-elements";

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("Hudsonville Honey");
  const [imageUrl, setImageUrl] = useState(
    "https://hudsonvillehoney.com//wp-content/uploads/2014/03/PB285718.jpg"
  );
  const [description, setDescription] = useState(
    "Welcome to the wonderfully fascinating and sweet world of beekeeping!"
  );
  return (
    <View>
      <Card>
        <Card.Title> {name} </Card.Title>
        <Card.Image source={{uri: imageUrl}} />
        <Text style={{ marginBottom: 10 }}>{description}</Text>
      </Card>
      <Button
        title="Go to Edit"
        onPress={() => navigation.push("ProfileEdit")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
