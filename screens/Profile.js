import { Button, Card } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Feather } from '@expo/vector-icons';
import { Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileScreen = ({ route, navigation }) => {
  const [name, setName] = useState("Hudsonville Honey");
  const [imageUrl, setImageUrl] = useState(
    "https://hudsonvillehoney.com//wp-content/uploads/2014/03/PB285718.jpg"
  );
  const [description, setDescription] = useState(
    "Welcome to the wonderfully fascinating and sweet world of beekeeping!"
  );

  useEffect(() => {
    if (route.params?.name) {
      setName(route.params.name);
    }
    if (route.params?.imageUrl) {
      setImageUrl(route.params.imageUrl);
    }
    if (route.params?.description) {
      setDescription(route.params.description)
    }
  }, [route.params?.name, route.params?.imageUrl, route.params?.description]);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => 
          navigation.navigate('ProfileEdit', {
            name,
            imageUrl,
            description
          })
        }
      >
        <Feather style={{ marginRight: 10 }} name="edit" size={24} />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <Card>
        <Card.Title> {name} </Card.Title>
        <Card.Image source={{uri: imageUrl}} />
        <Text style={{ marginBottom: 10 }}>{description}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
