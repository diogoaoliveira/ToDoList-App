import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class RemoveButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Text style={styles.text}>Remove completed items</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#F8F8F8',
    backgroundColor: 'white',
    borderTopWidth: 1,
  },
  text: {
    paddingVertical: 25,
    textAlign: 'center',
    color: '#D47879',
  },
});
