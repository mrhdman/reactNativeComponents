import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ActivityIndicator, AppRegistry } from 'react-native'

const Hello = Platform.select({
  ios: 'Hello Oxford, Mississippi.'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>{Hello}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
