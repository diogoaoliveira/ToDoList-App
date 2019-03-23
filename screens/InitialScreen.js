import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import RemoveButton from '../components/RemoveButton';
import Header from '../components/Header';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';

const { width } = Dimensions.get('window');

export default class InitialScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };

  state = {
    items: [
      { id: '1' + Date().toString(), title: 'Item 1', isCompleted: false },
      { id: '2' + Date().toString(), title: 'Item 2', isCompleted: false },
      { id: '3' + Date().toString(), title: 'Item 3', isCompleted: false },
    ],
  };

  addItem = newItem => {
    this.setState(prevState => ({
      items: prevState.items.concat({
        id: `${prevState.items.length + 1}${Date().toString()}`,
        title: newItem,
        isCompleted: false,
      }),
    }));
  };

  deleteItem = itemIndex => {
    let { items } = this.state;
    items.splice(itemIndex, 1);
    this.setState({
      items,
    });
  };

  onCheckItem = itemIndex => {
    const newItems = this.state.items.map((item, index) =>
      index === itemIndex ? { ...item, isCompleted: !item.isCompleted } : item
    );
    this.setState({
      items: newItems,
    });
  };

  removeAllCompleted = () => {
    const newItems = this.state.items.filter(item => !item.isCompleted);
    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
      <>
        <Header />
        <View style={styles.container}>
          <Input onAddItem={this.addItem} />
          {this.state.items.length ? (
            <ScrollView style={styles.list}>
              {this.state.items.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={
                    item.isCompleted
                      ? styles.listItemCompleted
                      : styles.listItem
                  }
                  onPress={() =>
                    this.props.navigation.navigate('Details', {
                      title: item.title,
                    })
                  }
                >
                  <Text style={styles.listItemText}>{item.title}</Text>
                  <Checkbox
                    selected={item.isCompleted}
                    onCheck={() => this.onCheckItem(index)}
                  />
                  <TouchableOpacity
                    onPress={() => this.deleteItem(index)}
                    style={styles.deleteButton}
                  >
                    <FontAwesome name="remove" size={24} color="red" />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <View style={styles.notFoundContainer}>
              <Entypo name="emoji-sad" size={width / 3} color="black" />
              <Text>Sem itens.</Text>
            </View>
          )}
        </View>
        <RemoveButton onPress={this.removeAllCompleted} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listItem: {
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  listItemCompleted: {
    backgroundColor: '#F8F8F8',
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  listItemText: {
    paddingVertical: 20,
    flex: 1,
  },
  deleteButton: {
    alignSelf: 'center',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
