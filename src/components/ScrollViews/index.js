import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

export default function ScrollViews() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={scrollView.box1}></View>
      <View style={scrollView.box2}></View>
      <View style={scrollView.box3}></View>
      <View style={scrollView.box4}></View>
    </ScrollView>
  )
}
const scrollView = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
  },
  box3: {
    backgroundColor: 'blue',
    height: 250,
  },
  box4: {
    backgroundColor: 'yellow',
    height: 250,
  }
})