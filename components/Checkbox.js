import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Checkbox extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onCheck} style={styles.checkbox}>
        {this.props.selected && <View style={styles.checkboxSelected} />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 15,
  },
  checkboxSelected: {
    alignSelf: 'center',
    width: 18,
    height: 18,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'black',
  },
});
