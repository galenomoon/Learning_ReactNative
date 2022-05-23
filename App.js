import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("mano");
  const [newName, setNewName] = useState("mano");
  const img = "https://i.scdn.co/image/ab6761610000e5eb9ecfcee83a3e86d021033107"

  //index
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setName(text)} />
      <Button title='send' onPress={()=> setNewName(name)}/>
      <Text>Hello {newName}!</Text>
      <Galeno name={newName} img={img} />
    </View>
  );
}

// component
export function Galeno({ name, img }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>Oi!</Text>
      <StatusBar style="auto" />
      <Image
        style={styles.picture}
        source={{
          uri: img
        }} />
      <Text>
        {name}
      </Text>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 250,
    height: 250,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50
  }
});
