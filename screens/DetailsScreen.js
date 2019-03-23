import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };

  render() {
    const title = this.props.navigation.getParam('title', '');
    return (
      <View>
        <Header title={title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
