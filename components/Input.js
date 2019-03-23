import React, { Component } from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class Input extends Component {
  state = {
    text: '',
  };

  onSubmit = () => {
    if (this.state.text !== '') {
      this.props.onAddItem(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <TextInput
        placeholder="Adicione um item"
        placeholderTextColor="#e4e4e4"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        style={styles.container}
        onSubmitEditing={this.onSubmit}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    padding: 18,
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
    fontSize: 18,
  },
});
