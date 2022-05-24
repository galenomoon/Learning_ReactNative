import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Slider from "@react-native-community/slider";

export default function Sliders() {
  const [value, setValue] = useState(50);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value.toFixed(0)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={value => setValue(value)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 40,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});