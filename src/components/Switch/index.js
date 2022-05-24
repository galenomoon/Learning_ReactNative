import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export default function Switches() {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container[toggle ? 0 : 1]}>
      <Icon style={styles.icon} name={toggle ? "bulb" : "moon"} color={toggle ? "black" : "white"} size={100} />
      <Switch
        value={toggle}
        onValueChange={() => setToggle(!toggle)}
        thumbColor={toggle ? "black" : "white"}
        trackColor={{ false: "black", true: "gray" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: [{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333"
}],
  icon:{
    marginBottom: 50,
  }
});