import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title ? this.props.title : 'Todo List'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8ACEE9',
  },
  title: {
    paddingTop: 50,
    paddingBottom: 30,
    textAlign: 'center',
    color: 'white',
  },
});
