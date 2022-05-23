import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

export default function App() {
const [name, setName] = useState('menó');
  return (
    <View style={[styles.container, styles.jcEvenly, styles.aiCenter, styles.Col]}>
      <View style={[styles.box, styles.aiCenter]} >
        <Text>Olá {name}{name.length !== 0 && ", Bem vindo"}</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Enter your name" 
        onChangeText={(text) => setName(text)}
        />
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 5,
    margin: 5,
    paddingHorizontal: 40,
    paddingVertical: 0,
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  jcCenter: {
    justifyContent: "center"
  },
  jcEnd: {
    justifyContent: "flex-end"
  },
  jcStart: {
    justifyContent: "flex-start"
  },
  jcBetween: {
    justifyContent: "space-between"
  },
  jcAround: {
    justifyContent: "space-around"
  },
  jcEvenly: {
    justifyContent: "space-evenly"
  },
  aiCenter: {
    alignItems: "center"
  },
  aiEnd: {
    alignItems: "flex-end"
  },
  aiStart: {
    alignItems: "flex-start"
  },
  aiBetween: {
    alignItems: "space-between"
  },
  aiAround: {
    alignItems: "space-around"
  },
  aiEvenly: {
    alignItems: "space-evenly"
  },
  Row: {
    flexDirection: "row"
  },
  Col: {
    flexDirection: "column"
  },
});