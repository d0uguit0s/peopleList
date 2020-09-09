// import { StatusBar } from 'expo-status-bar';
// Todos os imports sem um caminho especifico seram procurados diretamente dentro do "node_modules"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Todos os imports com um caminho especifico seram procurados nos seus respectivos caminhos
import Header from './src/components/Header'

import axios from 'axios';

export default class App extends React.Component {
  renderList() {
    // const names = [
    //   'Eddie Van Halen',
    //   'Jimi Hendrix',
    //   'Chimbinha',
    //   'Steve Vai'
    // ];

    // const textElements = names.map(name => {
    //   return <Text key={name}>{name}</Text>
    // });

    // Promisses
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data
        const names = results.map(people => people.name.first)
        console.log(names);
      })

    // return textElements;
  }

  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        { this.renderList() }
      </View>
    );
  }
}
