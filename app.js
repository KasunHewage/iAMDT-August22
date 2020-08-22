import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Kasun Hewage
      </Text>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 300, height: 300, alignSelf: "center"}} />
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur feugiat lacus in porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </Text>
      <Button
        title="Press me"
        onPress={() => alert('Kasun Hewage')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    margin: 24,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
