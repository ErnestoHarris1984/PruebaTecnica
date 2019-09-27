import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screens  from './Components/Screens';
console.disableYellowBox = true;


export default function App() {
  return (
    <View style={styles.container}>
      <Screens />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
