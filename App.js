import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView }from 'react-native';
import FlatLists from './src/components/FlatList';
import FortuneBiscuit from './src/components/FortuneBiscuit';
import Timer from './src/components/Timer';
import ScrollViews from './src/components/ScrollViews';
import Pickers from './src/components/Picker';

export default function App() {
  return (
    <View style={styles.container}>
      <Pickers/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  }
});
