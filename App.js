// import { StatusBar } from 'expo-status-bar';
// Todos os imports sem um caminho especifico seram procurados diretamente dentro do "node_modules"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Todos os imports com um caminho especifico seram procurados nos seus respectivos caminhos
import Header from './src/components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Pessoas!" />
      </View>
    );
  }
}
