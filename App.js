import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {

  return (
    <View style={[styles.container, styles.jcEvenly, styles.aiCenter, styles.Row]}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
  box:{
    width: 50,
    height: 50,
    backgroundColor: '#fff'
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