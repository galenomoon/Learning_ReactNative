import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView }from 'react-native';
import FlatLists from './src/components/FlatList/FlatLists';
import FortuneBiscuit from './src/components/FortuneBiscuit/FortuneBiscuit';
import Timer from './src/components/Timer/Timer';
import ScrollViews from './src/components/ScrollViews/ScrollViews';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <FlatLists/> */}
     {/* <FortuneBiscuit/> */}
     {/* <ScrollViews/> */}
     {/* <Timer/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  }
});
