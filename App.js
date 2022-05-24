import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FlatLists from './src/components/FlatList';
import FortuneBiscuit from './src/components/FortuneBiscuit';
import Timer from './src/components/Timer';
import ScrollViews from './src/components/ScrollViews';
import Pickers from './src/components/Picker';
import Sliders from './src/components/Slider';
import Switches from './src/components/Switch';
import InstaGaleno from './src/components/InstaGaleno';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.h1}>Learning React-Native</Text>
      </View> */}
      {/* <View style={styles.body}> */}
        <InstaGaleno/>
        {/* <Switches /> */}
        {/* {console.log("ss")} */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    // paddingVertical: 25,
  },
  header: {
    flex: 1,
    backgroundColor: '#444',
    justifyContent: 'center',
    paddingHorizontal:20
  },
  body: {
    flex: 9,
    padding:20
  },
  h1: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
